import { Locale } from '@scrabble-solver/types';

import { getTxtWordList } from './lib';

const FILE_URL = 'https://raw.githubusercontent.com/cgurkan/turkish-wordlist/main/words-tr.txt';

const getTrTrWordList = async (): Promise<string[]> => {
  return getTxtWordList(FILE_URL, Locale.TR_TR);
};

export default getTrTrWordList;
