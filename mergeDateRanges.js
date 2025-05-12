
function mergeDateRanges(ranges) {
    if (!Array.isArray(ranges)) {
      throw new TypeError('Se esperaba un array de rangos');
    }
    if (ranges.length === 0) return [];
  
    //Objeto Regex que sólo acepta sufijo 'Z' al final
    const utcOnly = /Z$/;
  
    //Validación: todas las fechas deben ser UTC
    for (const [startISO, endISO] of ranges) {
      if (typeof startISO !== 'string' || typeof endISO !== 'string') {
        throw new TypeError('Todas las fechas deben venir como strings ISO-Z');
      }
      if (!utcOnly.test(startISO) || !utcOnly.test(endISO)) {
        throw new Error(
          `Fecha no UTC en rango: ${startISO} – ${endISO}`
        );
      }
    }
  
    // Parsear a Date, crea objeto [{ start: startDate1, end: endDate1 },...]
    const normalized = ranges.map(([startISO, endISO]) => {
      const start = new Date(startISO);
      const end   = new Date(endISO);
      // Comprobaciones básicas
      if (isNaN(start) || isNaN(end)) {
        throw new Error(`Fecha inválida al parsear: ${startISO} – ${endISO}`);
      }
      if (start > end) {
        throw new Error(`El inicio debe ser anterior al fin: ${startISO} > ${endISO}`);
      }
      return { start, end };
    });
    
    
    //Ordenar por inicio
    normalized.sort((a, b) => a.start - b.start);
    console.log(normalized)
    //Fusionar solapamientos
    const merged = [];
    let current = normalized[0];
    
    for (let i = 1; i < normalized.length; i++) {
      const next = normalized[i];
      if (next.start <= current.end) {
        current.end = new Date(Math.max(current.end, next.end));
      } else {
        merged.push(current);
        current = next;
      }
      console.log(current)
    }
    merged.push(current);
  
    //Volver a ISO-Z
    return merged.map(({ start, end }) => [
      start.toISOString(),
      end.toISOString()
    ]);
  }
  
  module.exports = {mergeDateRanges};