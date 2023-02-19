import { request } from '../lib';

const crawlTurkish = (word: string): Promise<string> => {
  return request({
    protocol: 'https',
    hostname: 'sozluk.gov.tr',
    path: `/gts?ara=${encodeURIComponent(word)}`,
  });
};

export default crawlTurkish;
