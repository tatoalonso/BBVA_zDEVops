import BaseMerger from './BaseMerger.js';

export default class DateMerger extends BaseMerger {

  validate(ranges) {
    // validación mínima + parseo a Date
    if (!Array.isArray(ranges)) {
      throw new TypeError('Se esperaba un array de rangos');
    }
    //validación de fecha UTC
    const utcOnly = /Z$/;
    return ranges.map(([s, e], i) => {
      if (typeof s !== 'string' || typeof e !== 'string') {
        throw new TypeError(`Rango ${i}: ambos deben ser strings ISO-Z`);
      }
      if (!utcOnly.test(s) || !utcOnly.test(e)) {
        throw new Error(`Rango ${i}: formato ISO-Z inválido: ${s} – ${e}`);
      }
     //conversion a array de rangos de Date
      const sd = new Date(s), ed = new Date(e);
      if (isNaN(sd) || isNaN(ed)) {
        throw new Error(`Rango ${i}: fecha no válida: ${s} – ${e}`);
      }
      if (sd > ed) {
        throw new Error(`Rango ${i}: inicio > fin: ${s} > ${e}`);
      }
      return [sd, ed];
    });
  }

  // Compara dos Date (valores numéricos de ms) */
  compare(a, b) {
    return a - b;
  }
  
  // Sobrescribe merge para formatear a ISO-strings.
  merge() {
    // merge() de BaseMerger ya usa this.ranges (Date) y compare()
    const mergedDates = super.merge();
    return mergedDates.map(
      ([sd, ed]) => [ sd.toISOString(), ed.toISOString() ]
    );
  }
}
