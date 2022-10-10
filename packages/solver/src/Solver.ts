import { Trie } from '@kamilmielnik/trie';
import { Board, Config, Result, Tile } from '@scrabble-solver/types';

import getUniquePatterns from './getUniquePatterns';
import PatternsFiller from './PatternsFiller';
import PatternsGenerator from './PatternsGenerator';
import ScoresCalculator from './ScoresCalculator';

class Solver {
  private readonly patternsFiller: PatternsFiller;

  private readonly patternsGenerator: PatternsGenerator;

  private readonly scoresCalculator: ScoresCalculator;

  constructor(config: Config, trie: Trie) {
    this.patternsFiller = new PatternsFiller(config, trie);
    this.patternsGenerator = new PatternsGenerator(config);
    this.scoresCalculator = new ScoresCalculator(config);
  }

  public solve(board: Board, tiles: Tile[]): Result[] {
    const patterns = this.patternsGenerator.generate(board);
    const filledPatterns = patterns.flatMap((pattern) => this.patternsFiller.fill(pattern, tiles));
    const uniquePatterns = getUniquePatterns(filledPatterns);
    const results = uniquePatterns.map(
      (pattern, index) =>
        new Result({
          cells: pattern.cells,
          collisionsCount: pattern.getCollisions().length,
          id: index,
          points: this.scoresCalculator.calculate(pattern),
        }),
    );
    return results;
  }
}

export default Solver;
