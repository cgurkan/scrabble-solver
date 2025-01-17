import { Trie } from '@kamilmielnik/trie';
import { Board, Config, ResultJson, Tile } from '@scrabble-solver/types';

import fillPattern from './fillPattern';
import generatePatterns from './generatePatterns';
import getPatternScore from './getPatternScore';
import getUniquePatterns from './getUniquePatterns';

const solve = (trie: Trie, config: Config, board: Board, tiles: Tile[]): ResultJson[] => {
  const patterns = generatePatterns(config, board);
  const filledPatterns = patterns.flatMap((pattern) => fillPattern(trie, config, pattern, tiles));
  const uniquePatterns = getUniquePatterns(filledPatterns);
  const results = uniquePatterns.map((pattern, index) => ({
    cells: pattern.cells.map((cell) => cell.toJson()),
    collisions: pattern.getCollisions().map((collision) => collision.cells.map((cell) => cell.toJson())),
    id: index,
    points: getPatternScore(config, pattern),
  }));

  return results;
};

export default solve;
