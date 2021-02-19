import striptags from 'striptags';

type Normalize = (definition: string) => string;

const EMPHASIS_TAGS = ['a', 'b', 'em', 'internalXref'];

const normalizeHtmlTags: Normalize = (definition) => striptags(striptags(definition, EMPHASIS_TAGS), undefined, '"');

const normalizeLineBreaks: Normalize = (definition) => definition.replace(/[\r\n]/g, '');

const normalizeQuotes: Normalize = (definition) => definition.replace(/\."/g, '".');

/**
 * `(1.2) definition` -> `definition`
 */
const normalizeMarkers: Normalize = (definition) => definition.replace(/^\(\d+\.\d+\)\s+/g, '');

const normalizeTrailingSymbols: Normalize = (definition) => definition.trim().replace(/:$/, '');

const normalizeLeadingSymbols: Normalize = (definition) => definition.trim().replace(/^:/, '');

const normalizeNonWords: Normalize = (definition) => (/\w/.test(definition) ? definition : '');

const normalizers: Normalize[] = [
  normalizeHtmlTags,
  normalizeMarkers,
  normalizeQuotes,
  normalizeLineBreaks,
  normalizeTrailingSymbols,
  normalizeLeadingSymbols,
  normalizeNonWords,
  (definition) => definition.trim(),
];

const normalizeDefinition = (definition: string): string => {
  return normalizers.reduce((result, normalize) => normalize(result), definition);
};

export default normalizeDefinition;
