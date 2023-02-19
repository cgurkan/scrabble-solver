import { literaki, scrabble, kelimelik } from '@scrabble-solver/configs';

interface Option {
  label: string;
  value: typeof literaki.id | typeof scrabble.id | typeof kelimelik.id;
}

const options: Option[] = [
  {
    label: scrabble.name,
    value: scrabble.id,
  },
  {
    label: literaki.name,
    value: literaki.id,
  },
  {
    label: kelimelik.name,
    value: kelimelik.id,
  },
];

export default options;
