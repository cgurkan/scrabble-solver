import { getLocaleConfig } from '@scrabble-solver/configs';
import { Board } from '@scrabble-solver/types';

import settingsInitialState from './settingsInitialState';

const { configId, locale } = settingsInitialState;
const { boardHeight, boardWidth } = getLocaleConfig(configId, locale);
const boardInitialState: Board = Board.create(boardWidth, boardHeight);

// const createOxyphenbutazone = () => {
//   // Tiles: oypbaze

//   const board = Board.fromStringArray([
//     ' x  hen ut  on ',
//     'puer  or amas j',
//     'a led  a  er  a',
//     'c ki   i elf  c',
//     'i snot n  is  u',
//     'f  t o w do   l',
//     'y  e moa er   a',
//     'i  r   solar  t',
//     'n  v   h  t   i',
//     'g  i   i bitten',
//     '   e   n  v   g',
//     '   w   g  e    ',
//     '   e           ',
//     '   d           ',
//     '               ',
//   ]);

//   board.rows[4][3].tile.isBlank = true;
//   board.rows[9][11].tile.isBlank = true;

//   return board;
// };

export default boardInitialState;
