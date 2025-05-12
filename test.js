const lib = require ('./mergeDateRanges')


// Ejemplo correcto 
  const inputUTC = [
    ["2024-01-01T15:30:00Z", "2024-03-01T15:00:00Z"],
    ["2024-02-01T15:15:00Z", "2024-05-01T14:45:00Z"],
    ["2023-10-01T13:00:00Z", "2023-11-01T13:45:00Z"],
  ];
  console.log( lib.mergeDateRanges(inputUTC) );
  /* [
         ["2023-10-01T13:00:00.000Z","2023-11-01T13:45:00.000Z"],
         ["2024-01-01T15:30:00.000Z","2024-05-01T14:45:00.000Z"]
     ]
  */

  
  // Ejemplo error
  const badInput = [
    ["2024-01-01T15:30:00Z", "2024-03-01T15:00:00Z"],
    ["2024-02-01T15:15:00", "2024-05-01T14:45:00Z"],
    ["2023-10-01T13:00:00Z", "2023-11-01T13:45:00Z"],
  ];

  console.log( lib.mergeDateRanges(badInput) );
  // Error: Fecha no UTC en rango: 2024-02-01T15:15:00 – 2024-05-01T14:45:00Z
  