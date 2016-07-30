import Parse from 'parse/node';
import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';


const Pokemon = Parse.Object.extend('Pokemon');

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'A concise description of what Pokemon is',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
      resolve: pokemon => pokemon.get('name'),
    },
    pokenumber: {
      type: GraphQLID,
      resolve: pokemon => pokemon.get('pokenumber'),
    },
    preview_url: {
      type: GraphQLString,
      resolve: pokemon => pokemon.get('preview_url'),
    },
    marker_url: {
      type: GraphQLString,
      resolve: pokemon => pokemon.get('marker_url'),
    },
    seen_in_afternoon: {
      type: GraphQLBoolean,
      resolve: pokemon => pokemon.get('seen_in_afternoon'),
    },
    seen_in_morning: {
      type: GraphQLBoolean,
      resolve: pokemon => pokemon.get('seen_in_morning'),
    },
    seen_in_evening: {
      type: GraphQLBoolean,
      resolve: pokemon => pokemon.get('seen_in_evening'),
    },
    kinds: {
      type: new GraphQLList(GraphQLString),
      resolve: pokemon => pokemon.get('kinds').split(','),
    },
  }),
});

Pokemon.SchemaType = PokemonType;

Pokemon.RootQuery = {
  type: new GraphQLList(Pokemon.SchemaType),
  resolve: (_, args, { Query }) => {
    const query = new Query(Pokemon);
    return query.find();
  },
};

Pokemon.Mutations = {
  addPokemon: {
    type: Pokemon.SchemaType,
    description: 'Create a new instance of Pokemon',
    args: {
      text: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (_, { text }, { Query, user }) => {
      const pokemon = new Query(Pokemon).create({ text });
      if (user) {
        pokemon.setACL(new Parse.ACL(user));
      }
      return pokemon.save().then(td => td);
    },
  },
  deletePokemon: {
    type: Pokemon.SchemaType,
    description: 'Delete an instance of Pokemon',
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: (_, { id }, { Query }) =>
      new Query(Pokemon).get(id).then((pokemon) => {
        if (pokemon) {
          return pokemon.destroy();
        }
        return pokemon;
      }),
  },
};

export default Pokemon;
