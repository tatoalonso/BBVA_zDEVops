export default class BaseMerger{
    constructor(ranges) {
      const normalized = this.validate(ranges)
      this.ranges = normalized;
    }
    validate(ranges){
      if (!Array.isArray(ranges)) {
        throw new TypeError('Se esperaba un array de rangos');
      }
      return ranges;
    }
    //Cada subclase debe implementar compare(a, b): number
    compare(a, b) {
      throw new Error('compare(a,b) debe implementarse en la subclase');
    }

    // Ordena por compare(start, start).
    sort() {
      return this.ranges
        .slice()
        .sort((a, b) => this.compare(a[0], b[0]));
    }
  
    //Fusiona rangos solapados o contiguos.
    merge() {
      const sorted = this.sort();
      if (sorted.length === 0) return [];
  
      const out = [];
      let [start, end] = sorted[0];
  
      for (const [newStart, newEnd] of sorted.slice(1)) {
        if (this.compare(newStart, end) <= 0) {
          // extiende el fin si hace falta
          if (this.compare(newEnd, end) > 0) end = newEnd;
        } else {
          out.push([start, end]);
          [start, end] = [newStart, newEnd];
        }
      }
  
      out.push([start, end]);
      return out;
    }
  }