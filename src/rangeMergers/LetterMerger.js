import BaseMerger from './BaseMerger.js';

export default class LetterMerger extends BaseMerger {
  compare(a, b) { return a.localeCompare(b); }
}