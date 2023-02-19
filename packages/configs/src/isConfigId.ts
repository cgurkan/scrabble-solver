import literaki from './literaki';
import scrabble from './scrabble';
import kelimelik from './kelimelik';

const configs = [literaki, scrabble, kelimelik];

const isConfigId = (configId: unknown): boolean => {
  return configs.some(({ id }) => id === configId);
};

export default isConfigId;
