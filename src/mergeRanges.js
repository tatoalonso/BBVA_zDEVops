
import { mergeRangeFactory } from './mergeRangeFactory.js';

export function mergeRanges(ranges) {
  const rangeMerger = mergeRangeFactory(ranges);
  return rangeMerger.merge();
}
