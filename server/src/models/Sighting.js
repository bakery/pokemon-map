import Parse from 'parse/node';
import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';
import request from 'request';
import Pokemon from './Pokemon';
import { pokemons } from '../fixtures/pokemons';

const Sighting = Parse.Object.extend('Sighting');

const getOrAttr = (item, key) => (
  typeof item.get !== 'undefined' && item.get(key)
) || item[key];

const SightingType = new GraphQLObjectType({
  name: 'Sighting',
  description: 'A concise description of what Sighting is',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: sighting => getOrAttr(sighting, 'id'),
    },
    latitude: {
      type: GraphQLFloat,
      resolve: sighting => getOrAttr(sighting, 'latitude'),
    },
    longitude: {
      type: GraphQLFloat,
      resolve: sighting => getOrAttr(sighting, 'longitude'),
    },
    pokemon_id: {
      type: GraphQLInt,
      resolve: sighting => getOrAttr(sighting, 'pokemon_id'),
    },
    pokemon: {
      type: Pokemon.SchemaType,
      resolve: sighting =>
        new Pokemon(
          pokemons.find(p => p.pokenumber === getOrAttr(sighting, 'pokemon_id'))
        ),
    },
  }),
});

Sighting.SchemaType = SightingType;

Sighting.RootQuery = {
  type: new GraphQLList(Sighting.SchemaType),
  args: {
    center_latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    center_longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    northeast_latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    northeast_longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    southwest_latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    southwest_longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  },
  resolve: (_, args) => {
    const defaultArgs = {
      live: false,
      minimal: true,
    };

    const pokecrewData = new Parse.Promise();

    request({
      url: 'https://api.pokecrew.com/api/v1/seens',
      qs: Object.assign({}, defaultArgs, args),
      json: true,
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const data = (body && body.seens) || [];
        console.log('resolving with', data);
        pokecrewData.resolve(data.map(
          s => Object.assign(s, {
            pokemon_id: parseInt(s.pokemon_id, 10),
          })
        ));
      } else {
        pokecrewData.reject(error);
      }
    });

    const southWest = new Parse.GeoPoint(args.southwest_latitude, args.southwest_longitude);
    const northEast = new Parse.GeoPoint(args.northeast_latitude, args.northeast_longitude);
    const sightingQuery = new Parse.Query(Sighting);

    sightingQuery.withinGeoBox('location', southWest, northEast);

    return Parse.Promise.when(pokecrewData, sightingQuery.find()).then((pcData, internalData) =>
      [...pcData, ...internalData.map(d => Object.assign({}, d.toJSON(), {
        id: d.id,
        latitude: d.get('location').latitude,
        longitude: d.get('location').longitude,
      }))]
    );
  },
};

Sighting.Mutations = {
  addSighting: {
    type: Sighting.SchemaType,
    description: 'Create a new instance of Sighting',
    args: {
      latitude: {
        type: new GraphQLNonNull(GraphQLFloat),
      },
      longitude: {
        type: new GraphQLNonNull(GraphQLFloat),
      },
      pokemon_id: {
        type: new GraphQLNonNull(GraphQLInt),
      },
    },
    resolve: (_, { latitude, longitude, pokemon_id }, { user }) => {
      const location = new Parse.GeoPoint({ latitude, longitude });

      const sighting = new Sighting({
        location, pokemon_id, user,
      });

      const sightingACL = new Parse.ACL();
      sightingACL.setPublicReadAccess(true);
      sightingACL.setPublicWriteAccess(false);

      sighting.setACL(sightingACL);

      return sighting.save().then(s => s);
    },
  },
};

export default Sighting;
