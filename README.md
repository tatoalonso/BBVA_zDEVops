# BBVA_zDEVops

PARTE 1 
-------

- Se crea la función mergeDateRanges, que asume que recibe un array de rangos de fecha en formato UTC con el fin de no mezclar distintos tipos de fechas en el mismo rango

- Para probar la funcionalidad , hay que descargar el código de la tag v1.1.0-part1 y ejecutar el comando node text.js


PARTE 2
-------

- Instrucciones:
    * Bajar el codigo de la tag v1.1.0-part2
    * Hacer npm install
    * Levantar el servicio web con el comando node src/index.js
    * ejecutar el comando :

        curl -X POST http://localhost:3000/merge \
        -H "Content-Type: application/json" \
        -d ' [
        ["2024-01-01T15:30:00Z", "2024-03-01T15:00:00Z"],
        ["2024-02-01T15:15:00Z", "2024-05-01T14:45:00Z"],
        ["2023-10-01T13:00:00Z", "2023-11-01T13:45:00Z"] ]'



Cosas que no hice pero pensé en ellas:

- El rendimiento de la función si el array de las fechas fuera muy largo.
- Test unitarios.