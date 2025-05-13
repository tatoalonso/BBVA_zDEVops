import NumberMerger from './rangeMergers/NumberMerger.js';
import LetterMerger from './rangeMergers/LetterMerger.js';
import DateMerger   from './rangeMergers/DateMerger.js';


export function mergeRangeFactory(ranges) {
  const first = ranges[0] && ranges[0][0];

  if (typeof first === 'number') {
    return new NumberMerger(ranges);
  }

  if (typeof first === 'string' && first.length === 1) {
    return new LetterMerger(ranges);
  }
  
  return new DateMerger(ranges);
}
