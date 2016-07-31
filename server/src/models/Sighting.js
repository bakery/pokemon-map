import Parse from 'parse/node';
import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';
import request from 'request';
import Pokemon from './Pokemon';
import { pokemons } from '../fixtures/pokemons';

const Sighting = Parse.Object.extend('Sighting');

const SightingType = new GraphQLObjectType({
  name: 'Sighting',
  description: 'A concise description of what Sighting is',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: sighting => sighting.id,
    },
    latitude: {
      type: GraphQLFloat,
      resolve: sighting => sighting.latitude,
    },
    longitude: {
      type: GraphQLFloat,
      resolve: sighting => sighting.longitude,
    },
    pokemon_id: {
      type: GraphQLID,
      resolve: sighting => sighting.pokemon_id,
    },
    pokemon: {
      type: Pokemon.SchemaType,
      resolve: sighting =>
        new Pokemon(
          pokemons.find(p => p.pokenumber === parseInt(sighting.pokemon_id, 10))
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

    // pokemon_id=

    // center_latitude=38.71713783905443
    // center_longitude=-9.13937951534421
    // northeast_latitude=38.81324035802483
    // northeast_longitude=-9.037240996057108
    // southwest_latitude=38.62090592679008
    // southwest_longitude=-9.241518034631326


    // const query = new Query(Sighting);
    // return query.find();

    const result = new Parse.Promise();

    request({
      url: 'https://api.pokecrew.com/api/v1/seens',
      qs: Object.assign({}, defaultArgs, args),
      json: true,
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        console.log('resolving with', body.seens);
        result.resolve(body.seens);
      } else {
        result.reject(error);
      }
    });

    return result;
  },
};

Sighting.Mutations = {
  // addSighting: {
  //   type: Sighting.SchemaType,
  //   description: 'Create a new instance of Sighting',
  //   args: {
  //     text: { type: new GraphQLNonNull(GraphQLString) },
  //   },
  //   resolve: (_, { text }, { Query, user }) => {
  //     const sighting = new Query(Sighting).create({ text });
  //     if (user) {
  //       sighting.setACL(new Parse.ACL(user));
  //     }
  //     return sighting.save().then(td => td);
  //   },
  // },
  // deleteSighting: {
  //   type: Sighting.SchemaType,
  //   description: 'Delete an instance of Sighting',
  //   args: {
  //     id: { type: new GraphQLNonNull(GraphQLID) },
  //   },
  //   resolve: (_, { id }, { Query }) =>
  //     new Query(Sighting).get(id).then((sighting) => {
  //       if (sighting) {
  //         return sighting.destroy();
  //       }
  //       return sighting;
  //     }),
  // },
};

export default Sighting;
