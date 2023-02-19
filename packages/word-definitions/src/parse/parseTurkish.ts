import { load } from 'cheerio';

import { ParseResult } from '../types';

// eslint-disable-next-line max-len
const DOES_NOT_EXIST_MESSAGE = "Aradığınız kelime sözlükte bulunamadı.";
  
const parseTurkish = (html: string): ParseResult => {
  const $ = load(html);
  $('strong.mw_t_bc').replaceWith(', ');
  $('.text-lowercase').remove();
  $('.sub-content-thread').remove();

  const $definitions = $('[id^=dictionary-entry]').find('.dtText, .cxl-ref');

  return {
    definitions: Array.from($definitions).map((definition) => $(definition).text().replace(/\n/g, '')),
    exists: $('.spelling-suggestion-text').text().trim() !== DOES_NOT_EXIST_MESSAGE,
  };
};

export default parseTurkish;
