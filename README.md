# BBVA_zDEVops

PARTE 3
-------
- Instrucciones:
    * Bajar el codigo de la tag v1.1.0-part3
    * Hacer npm install
    * Levantar el servicio web con el comando node src/index.js
    * ejecutar el comando para rangos numéricos:

        curl -X POST http://localhost:3000/merge \
        -H "Content-Type: application/json" \
        -d ' [                              
            [1, 3],
            [2, 5],
            [7, 9] ]'

    * ejecutar el comando para rangos de letras:
       
       curl -X POST http://localhost:3000/merge \
       -H "Content-Type: application/json" \
       -d '[["A","C"],["B","D"],["F","G"]]'

    * ejecutar el comando para rangos de fechas:

     curl -X POST http://localhost:3000/merge \
     -H "Content-Type: application/json" \
     -d ' [
    ["2024-01-01T15:30:00Z", "2024-03-01T15:00:00Z"],
    ["2024-02-01T15:15:00Z", "2024-05-01T14:45:00Z"],
    ["2023-10-01T13:00:00Z", "2023-11-01T13:45:00Z"] ]'
    
       
Cosas que no hice pero pensé en ellas:

- El rendimiento de la función si el array de entrada fuera muy largo.
- Test unitarios.