import BonusJson from './BonusJson';
import TileConfig from './TileConfig';

interface ConfigJson {
  allTilesBonusScore: number;
  blankScore: number;
  blanksCount: number;
  boardHeight: number;
  boardWidth: number;
  bonuses: BonusJson[];
  id: string;
  maximumCharactersCount: number;
  name: string;
  tiles: TileConfig[];
}

export default ConfigJson;
