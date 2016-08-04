/* eslint eol-last:"off", comma-dangle:"off" */
// XX: this is used by the code generator
// please do not rename this
import { authenticate } from './authenticate';
import { addSighting } from './addSighting';
import { findPokemonsInArea } from './findPokemonsInArea';
const sagas = [
  findPokemonsInArea,
  addSighting,
  authenticate
];
module.exports = sagas;