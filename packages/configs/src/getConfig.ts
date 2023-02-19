import { Config, Locale } from '@scrabble-solver/types';

import literaki from './literaki';
import scrabble from './scrabble';
import kelimelik from './kelimelik';

const configs = [literaki, scrabble, kelimelik];

interface Result extends Record<Locale, Config> {
  id: string;
  name: string;
}

const getConfig = (configId: string): Result => {
  const config = configs.find(({ id }) => id === configId);

  if (!config) {
    throw new Error(`Invalid "configId" parameter: not one of ${configs.map(({ id }) => id).join('/')}`);
  }

  return config;
};

export default getConfig;
