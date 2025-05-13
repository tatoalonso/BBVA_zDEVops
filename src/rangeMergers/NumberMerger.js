import BaseMerger from './BaseMerger.js';

export default class NumberMerger extends BaseMerger {
    compare(a, b) { return a - b; }
  }