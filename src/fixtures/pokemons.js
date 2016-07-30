/* eslint comma-dangle: "off" */

import Parse from 'parse/node';
import Pokemon from '../models/Pokemon';


export const pokemons = [{
  // id: 2,
  name: 'Ivysaur',
  pokenumber: 2,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/002/original/data?1468308714',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/002/google/2.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,poison'
}, {
  // id: 3,
  name: 'Venusaur',
  pokenumber: 3,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/003/original/data?1468308714',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/003/google/3.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,poison'
}, {
  // id: 5,
  name: 'Charmeleon',
  pokenumber: 5,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/005/original/data?1468308714',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/005/google/5.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire'
}, {
  // id: 6,
  name: 'Charizard',
  pokenumber: 6,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/006/original/data?1468308714',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/006/google/6.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire,flying'
}, {
  // id: 7,
  name: 'Squirtle',
  pokenumber: 7,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/007/original/data?1468308714',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/007/google/7.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 9,
  name: 'Blastoise',
  pokenumber: 9,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/009/original/data?1468308714',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/009/google/9.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 10,
  name: 'Caterpie',
  pokenumber: 10,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/010/original/data?1468308715',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/010/google/10.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug'
}, {
  // id: 11,
  name: 'Metapod',
  pokenumber: 11,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/011/original/data?1468308715',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/011/google/11.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug'
}, {
  // id: 13,
  name: 'Weedle',
  pokenumber: 13,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/013/original/data?1468308715',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/013/google/13.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug,poison'
}, {
  // id: 14,
  name: 'Kakuna',
  pokenumber: 14,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/014/original/data?1468308715',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/014/google/14.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug,poison'
}, {
  // id: 15,
  name: 'Beedrill',
  pokenumber: 15,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/015/original/data?1468308715',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/015/google/15.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug,poison'
}, {
  // id: 17,
  name: 'Pidgeotto',
  pokenumber: 17,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/017/original/data?1468308715',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/017/google/17.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal,flying'
}, {
  // id: 18,
  name: 'Pidgeot',
  pokenumber: 18,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/018/original/data?1468308716',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/018/google/18.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal,flying'
}, {
  // id: 19,
  name: 'Rattata',
  pokenumber: 19,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/019/original/data?1468308716',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/019/google/19.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 21,
  name: 'Spearow',
  pokenumber: 21,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/021/original/data?1468308716',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/021/google/21.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal,flying'
}, {
  // id: 22,
  name: 'Fearow',
  pokenumber: 22,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/022/original/data?1468308716',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/022/google/22.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal,flying'
}, {
  // id: 23,
  name: 'Ekans',
  pokenumber: 23,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/023/original/data?1468308716',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/023/google/23.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison'
}, {
  // id: 25,
  name: 'Pikachu',
  pokenumber: 25,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/025/original/data?1468308716',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/025/google/25.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'electric'
}, {
  // id: 26,
  name: 'Raichu',
  pokenumber: 26,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/026/original/data?1468308717',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/026/google/26.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'electric'
}, {
  // id: 27,
  name: 'Sandshrew',
  pokenumber: 27,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/027/original/data?1468308717',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/027/google/27.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ground'
}, {
  // id: 29,
  name: 'Nidoran♀',
  pokenumber: 29,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/029/original/data?1468308717',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/029/google/29.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison'
}, {
  // id: 30,
  name: 'Nidorina',
  pokenumber: 30,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/030/original/data?1468308717',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/030/google/30.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison'
}, {
  // id: 31,
  name: 'Nidoqueen',
  pokenumber: 31,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/031/original/data?1468308717',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/031/google/31.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison,ground'
}, {
  // id: 33,
  name: 'Nidorino',
  pokenumber: 33,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/033/original/data?1468308717',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/033/google/33.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison'
}, {
  // id: 34,
  name: 'Nidoking',
  pokenumber: 34,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/034/original/data?1468308718',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/034/google/34.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison,ground'
}, {
  // id: 35,
  name: 'Clefairy',
  pokenumber: 35,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/035/original/data?1468308718',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/035/google/35.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fairy'
}, {
  // id: 37,
  name: 'Vulpix',
  pokenumber: 37,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/037/original/data?1468308718',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/037/google/37.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire'
}, {
  // id: 38,
  name: 'Ninetales',
  pokenumber: 38,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/038/original/data?1468308718',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/038/google/38.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire'
}, {
  // id: 39,
  name: 'Jigglypuff',
  pokenumber: 39,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/039/original/data?1468308718',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/039/google/39.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fairy,normal'
}, {
  // id: 41,
  name: 'Zubat',
  pokenumber: 41,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/041/original/data?1468308718',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/041/google/41.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison,flying'
}, {
  // id: 42,
  name: 'Golbat',
  pokenumber: 42,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/042/original/data?1468308718',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/042/google/42.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison,flying'
}, {
  // id: 43,
  name: 'Oddish',
  pokenumber: 43,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/043/original/data?1468308719',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/043/google/43.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,poison'
}, {
  // id: 44,
  name: 'Gloom',
  pokenumber: 44,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/044/original/data?1468308719',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/044/google/44.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,poison'
}, {
  // id: 46,
  name: 'Paras',
  pokenumber: 46,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/046/original/data?1468308719',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/046/google/46.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug,grass'
}, {
  // id: 47,
  name: 'Parasect',
  pokenumber: 47,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/047/original/data?1468308719',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/047/google/47.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug,grass'
}, {
  // id: 48,
  name: 'Venonat',
  pokenumber: 48,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/048/original/data?1468308719',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/048/google/48.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug,poison'
}, {
  // id: 50,
  name: 'Diglett',
  pokenumber: 50,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/050/original/data?1468308719',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/050/google/50.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ground'
}, {
  // id: 51,
  name: 'Dugtrio',
  pokenumber: 51,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/051/original/data?1468308720',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/051/google/51.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ground'
}, {
  // id: 52,
  name: 'Meowth',
  pokenumber: 52,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/052/original/data?1468308720',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/052/google/52.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 54,
  name: 'Psyduck',
  pokenumber: 54,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/054/original/data?1468308720',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/054/google/54.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 55,
  name: 'Golduck',
  pokenumber: 55,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/055/original/data?1468308720',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/055/google/55.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 56,
  name: 'Mankey',
  pokenumber: 56,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/056/original/data?1468308720',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/056/google/56.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fighting'
}, {
  // id: 58,
  name: 'Growlithe',
  pokenumber: 58,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/058/original/data?1468308720',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/058/google/58.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire'
}, {
  // id: 59,
  name: 'Arcanine',
  pokenumber: 59,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/059/original/data?1468308721',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/059/google/59.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire'
}, {
  // id: 60,
  name: 'Poliwag',
  pokenumber: 60,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/060/original/data?1468308721',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/060/google/60.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 62,
  name: 'Poliwrath',
  pokenumber: 62,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/062/original/data?1468308721',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/062/google/62.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water,fighting'
}, {
  // id: 63,
  name: 'Abra',
  pokenumber: 63,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/063/original/data?1468308721',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/063/google/63.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'psychic'
}, {
  // id: 64,
  name: 'Kadabra',
  pokenumber: 64,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/064/original/data?1468308721',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/064/google/64.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'psychic'
}, {
  // id: 66,
  name: 'Machop',
  pokenumber: 66,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/066/original/data?1468308721',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/066/google/66.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fighting'
}, {
  // id: 67,
  name: 'Machoke',
  pokenumber: 67,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/067/original/data?1468308721',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/067/google/67.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fighting'
}, {
  // id: 68,
  name: 'Machamp',
  pokenumber: 68,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/068/original/data?1468308722',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/068/google/68.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fighting'
}, {
  // id: 70,
  name: 'Weepinbell',
  pokenumber: 70,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/070/original/data?1468308722',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/070/google/70.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,poison'
}, {
  // id: 71,
  name: 'Victreebel',
  pokenumber: 71,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/071/original/data?1468308722',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/071/google/71.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,poison'
}, {
  // id: 72,
  name: 'Tentacool',
  pokenumber: 72,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/072/original/data?1468308722',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/072/google/72.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water,poison'
}, {
  // id: 74,
  name: 'Geodude',
  pokenumber: 74,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/074/original/data?1468308722',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/074/google/74.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'rock,ground'
}, {
  // id: 75,
  name: 'Graveler',
  pokenumber: 75,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/075/original/data?1468308722',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/075/google/75.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'rock,ground'
}, {
  // id: 77,
  name: 'Ponyta',
  pokenumber: 77,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/077/original/data?1468308723',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/077/google/77.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire'
}, {
  // id: 78,
  name: 'Rapidash',
  pokenumber: 78,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/078/original/data?1468308723',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/078/google/78.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'electric'
}, {
  // id: 79,
  name: 'Slowpoke',
  pokenumber: 79,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/079/original/data?1468308723',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/079/google/79.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water,psychic'
}, {
  // id: 81,
  name: 'Magnemite',
  pokenumber: 81,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/081/original/data?1468308723',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/081/google/81.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ground'
}, {
  // id: 82,
  name: 'Magneton',
  pokenumber: 82,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/082/original/data?1468308723',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/082/google/82.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ground'
}, {
  // id: 83,
  name: 'Farfetch’d',
  pokenumber: 83,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/083/original/data?1468308723',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/083/google/83.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fighting,normal'
}, {
  // id: 85,
  name: 'Dodrio',
  pokenumber: 85,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/085/original/data?1468308724',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/085/google/85.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 86,
  name: 'Seel',
  pokenumber: 86,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/086/original/data?1468308724',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/086/google/86.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison'
}, {
  // id: 87,
  name: 'Dewgong',
  pokenumber: 87,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/087/original/data?1468308724',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/087/google/87.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison'
}, {
  // id: 89,
  name: 'Muk',
  pokenumber: 89,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/089/original/data?1468308724',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/089/google/89.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ground,rock'
}, {
  // id: 90,
  name: 'Shellder',
  pokenumber: 90,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/090/original/data?1468308724',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/090/google/90.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 91,
  name: 'Cloyster',
  pokenumber: 91,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/091/original/data?1468308724',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/091/google/91.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass'
}, {
  // id: 93,
  name: 'Haunter',
  pokenumber: 93,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/093/original/data?1468308725',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/093/google/93.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 94,
  name: 'Gengar',
  pokenumber: 94,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/094/original/data?1468308725',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/094/google/94.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 95,
  name: 'Onix',
  pokenumber: 95,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/095/original/data?1468308725',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/095/google/95.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 97,
  name: 'Hypno',
  pokenumber: 97,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/097/original/data?1468308725',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/097/google/97.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 98,
  name: 'Krabby',
  pokenumber: 98,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/098/original/data?1468308725',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/098/google/98.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 99,
  name: 'Kingler',
  pokenumber: 99,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/099/original/data?1468308725',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/099/google/99.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'psychic,water'
}, {
  // id: 101,
  name: 'Electrode',
  pokenumber: 101,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/101/original/data?1468308726',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/101/google/101.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'electric'
}, {
  // id: 102,
  name: 'Exeggcute',
  pokenumber: 102,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/102/original/data?1468308726',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/102/google/102.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,psychic'
}, {
  // id: 104,
  name: 'Cubone',
  pokenumber: 104,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/104/original/data?1468308726',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/104/google/104.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 105,
  name: 'Marowak',
  pokenumber: 105,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/105/original/data?1468308726',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/105/google/105.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 106,
  name: 'Hitmonlee',
  pokenumber: 106,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/106/original/data?1468308726',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/106/google/106.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water,flying'
}, {
  // id: 108,
  name: 'Lickitung',
  pokenumber: 108,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/108/original/data?1468308727',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/108/google/108.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 109,
  name: 'Koffing',
  pokenumber: 109,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/109/original/data?1468308727',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/109/google/109.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison'
}, {
  // id: 110,
  name: 'Weezing',
  pokenumber: 110,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/110/original/data?1468308727',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/110/google/110.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 111,
  name: 'Rhyhorn',
  pokenumber: 111,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/111/original/data?1468308727',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/111/google/111.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ground,rock'
}, {
  // id: 113,
  name: 'Chansey',
  pokenumber: 113,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/113/original/data?1468308727',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/113/google/113.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 114,
  name: 'Tangela',
  pokenumber: 114,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/114/original/data?1468308727',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/114/google/114.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass'
}, {
  // id: 116,
  name: 'Horsea',
  pokenumber: 116,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/116/original/data?1468308727',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/116/google/116.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'rock,water'
}, {
  // id: 117,
  name: 'Seadra',
  pokenumber: 117,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/117/original/data?1468308728',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/117/google/117.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'rock,water'
}, {
  // id: 118,
  name: 'Goldeen',
  pokenumber: 118,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/118/original/data?1468308728',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/118/google/118.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 119,
  name: 'Seaking',
  pokenumber: 119,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/119/original/data?1468308728',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/119/google/119.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 121,
  name: 'Starmie',
  pokenumber: 121,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/121/original/data?1468308728',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/121/google/121.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'electric,flying'
}, {
  // id: 122,
  name: 'Mr. Mime',
  pokenumber: 122,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/122/original/data?1468308728',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/122/google/122.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire,flying'
}, {
  // id: 123,
  name: 'Scyther',
  pokenumber: 123,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/123/original/data?1468308728',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/123/google/123.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug,flying'
}, {
  // id: 125,
  name: 'Electabuzz',
  pokenumber: 125,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/125/original/data?1468308729',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/125/google/125.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'dragon,flying'
}, {
  // id: 126,
  name: 'Magmar',
  pokenumber: 126,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/126/original/data?1468308729',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/126/google/126.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 127,
  name: 'Pinsir',
  pokenumber: 127,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/127/original/data?1468308729',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/127/google/127.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug'
}, {
  // id: 129,
  name: 'Magikarp',
  pokenumber: 129,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/129/original/data?1468308729',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/129/google/129.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 130,
  name: 'Gyarados',
  pokenumber: 130,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/130/original/data?1468308729',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/130/google/130.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 132,
  name: 'Ditto',
  pokenumber: 132,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/132/original/data?1468308729',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/132/google/132.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 133,
  name: 'Eevee',
  pokenumber: 133,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/133/original/data?1468308730',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/133/google/133.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 134,
  name: 'Vaporeon',
  pokenumber: 134,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/134/original/data?1468308730',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/134/google/134.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 136,
  name: 'Flareon',
  pokenumber: 136,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/136/original/data?1468308730',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/136/google/136.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire'
}, {
  // id: 137,
  name: 'Porygon',
  pokenumber: 137,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/137/original/data?1468308730',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/137/google/137.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 138,
  name: 'Omanyte',
  pokenumber: 138,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/138/original/data?1468308730',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/138/google/138.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 140,
  name: 'Kabuto',
  pokenumber: 140,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/140/original/data?1468308730',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/140/google/140.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 141,
  name: 'Kabutops',
  pokenumber: 141,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/141/original/data?1468308730',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/141/google/141.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 142,
  name: 'Aerodactyl',
  pokenumber: 142,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/142/original/data?1468308731',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/142/google/142.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 144,
  name: 'Articuno',
  pokenumber: 144,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/144/original/data?1468308731',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/144/google/144.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 145,
  name: 'Zapdos',
  pokenumber: 145,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/145/original/data?1468308731',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/145/google/145.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 1,
  name: 'Bulbasaur',
  pokenumber: 1,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/001/original/data?1468308714',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/001/google/1.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,poison'
}, {
  // id: 4,
  name: 'Charmander',
  pokenumber: 4,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/004/original/data?1468308714',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/004/google/4.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire'
}, {
  // id: 8,
  name: 'Wartortle',
  pokenumber: 8,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/008/original/data?1468308714',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/008/google/8.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 12,
  name: 'Butterfree',
  pokenumber: 12,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/012/original/data?1468308715',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/012/google/12.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug,flying'
}, {
  // id: 16,
  name: 'Pidgey',
  pokenumber: 16,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/016/original/data?1468308715',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/016/google/16.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal,flying'
}, {
  // id: 20,
  name: 'Raticate',
  pokenumber: 20,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/020/original/data?1468308716',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/020/google/20.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 24,
  name: 'Arbok',
  pokenumber: 24,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/024/original/data?1468308716',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/024/google/24.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison'
}, {
  // id: 28,
  name: 'Sandslash',
  pokenumber: 28,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/028/original/data?1468308717',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/028/google/28.png?1468382050',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ground'
}, {
  // id: 32,
  name: 'Nidoran♂',
  pokenumber: 32,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/032/original/data?1468308717',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/032/google/32.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'poison'
}, {
  // id: 36,
  name: 'Clefable',
  pokenumber: 36,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/036/original/data?1468308718',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/036/google/36.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fairy'
}, {
  // id: 40,
  name: 'Wigglytuff',
  pokenumber: 40,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/040/original/data?1468308718',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/040/google/40.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fairy,normal'
}, {
  // id: 45,
  name: 'Vileplume',
  pokenumber: 45,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/045/original/data?1468308719',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/045/google/45.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,poison'
}, {
  // id: 49,
  name: 'Venomoth',
  pokenumber: 49,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/049/original/data?1468308719',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/049/google/49.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug,poison'
}, {
  // id: 53,
  name: 'Persian',
  pokenumber: 53,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/053/original/data?1468308720',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/053/google/53.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 57,
  name: 'Primeape',
  pokenumber: 57,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/057/original/data?1468308720',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/057/google/57.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fighting'
}, {
  // id: 61,
  name: 'Poliwhirl',
  pokenumber: 61,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/061/original/data?1468308721',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/061/google/61.png?1468382051',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 65,
  name: 'Alakazam',
  pokenumber: 65,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/065/original/data?1468308721',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/065/google/65.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'psychic'
}, {
  // id: 69,
  name: 'Bellsprout',
  pokenumber: 69,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/069/original/data?1468308722',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/069/google/69.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,poison'
}, {
  // id: 73,
  name: 'Tentacruel',
  pokenumber: 73,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/073/original/data?1468308722',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/073/google/73.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water,poison'
}, {
  // id: 76,
  name: 'Golem',
  pokenumber: 76,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/076/original/data?1468308723',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/076/google/76.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'rock,ground'
}, {
  // id: 80,
  name: 'Slowbro',
  pokenumber: 80,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/080/original/data?1468308723',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/080/google/80.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'grass,psychic'
}, {
  // id: 84,
  name: 'Doduo',
  pokenumber: 84,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/084/original/data?1468308724',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/084/google/84.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fighting,normal'
}, {
  // id: 88,
  name: 'Grimer',
  pokenumber: 88,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/088/original/data?1468308724',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/088/google/88.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ground,rock'
}, {
  // id: 92,
  name: 'Gastly',
  pokenumber: 92,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/092/original/data?1468308725',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/092/google/92.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ghost,poison'
}, {
  // id: 96,
  name: 'Drowzee',
  pokenumber: 96,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/096/original/data?1468308725',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/096/google/96.png?1468382052',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'psychic'
}, {
  // id: 100,
  name: 'Voltorb',
  pokenumber: 100,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/100/original/data?1468308726',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/100/google/100.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'ice,psychic'
}, {
  // id: 103,
  name: 'Exeggutor',
  pokenumber: 103,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/103/original/data?1468308726',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/103/google/103.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'bug'
}, {
  // id: 107,
  name: 'Hitmonchan',
  pokenumber: 107,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/107/original/data?1468308726',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/107/google/107.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fighting'
}, {
  // id: 112,
  name: 'Rhydon',
  pokenumber: 112,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/112/original/data?1468308727',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/112/google/112.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'fire'
}, {
  // id: 115,
  name: 'Kangaskhan',
  pokenumber: 115,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/115/original/data?1468308727',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/115/google/115.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'rock,water'
}, {
  // id: 120,
  name: 'Staryu',
  pokenumber: 120,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/120/original/data?1468308728',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/120/google/120.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'water'
}, {
  // id: 124,
  name: 'Jynx',
  pokenumber: 124,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/124/original/data?1468308728',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/124/google/124.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'psychic,ice'
}, {
  // id: 128,
  name: 'Tauros',
  pokenumber: 128,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/128/original/data?1468308729',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/128/google/128.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 131,
  name: 'Lapras',
  pokenumber: 131,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/131/original/data?1468308729',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/131/google/131.png?1468382053',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 135,
  name: 'Jolteon',
  pokenumber: 135,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/135/original/data?1468308730',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/135/google/135.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'electric'
}, {
  // id: 139,
  name: 'Omastar',
  pokenumber: 139,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/139/original/data?1468308730',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/139/google/139.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 143,
  name: 'Snorlax',
  pokenumber: 143,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/143/original/data?1468308731',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/143/google/143.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 146,
  name: 'Moltres',
  pokenumber: 146,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/146/original/data?1468308731',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/146/google/146.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 147,
  name: 'Dratini',
  pokenumber: 147,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/147/original/data?1468308731',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/147/google/147.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'dratiniragon'
}, {
  // id: 148,
  name: 'Dragonair',
  pokenumber: 148,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/148/original/data?1468308731',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/148/google/148.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 149,
  name: 'Dragonite',
  pokenumber: 149,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/149/original/data?1468308731',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/149/google/149.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'normal'
}, {
  // id: 150,
  name: 'Mewtwo',
  pokenumber: 150,
  preview_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/150/original/data?1468308732',
  marker_url: 'https://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/150/google/150.png?1468382054',
  seen_in_afternoon: true,
  seen_in_morning: true,
  seen_in_evening: true,
  kinds: 'psychic'
}];

export function run() {
  const query = new Parse.Query(Pokemon);
  query.count().then((pokemonCount) => {
    console.log('counting Pokemons... got ', pokemonCount);

    if (pokemonCount === 0) {
      console.log('drastically increasing pokemon population 🎉');
      try {
        Parse.Object.saveAll(pokemons.map(p => new Pokemon(p))).then(
          () => { console.log(`All good! ${pokemons.length} pokemons added`); },
          (e) => { console.log(`Oops. Something went terribly wrong: ${JSON.stringify(e)}`); }
        );
      } catch (e) {
        console.log(`Oops. Something went terribly wrong: ${e.toString()}`);
      }
    }
  });
}
