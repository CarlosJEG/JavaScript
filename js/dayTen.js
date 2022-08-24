// localStorage y sessionStorage: Son objetos globales de JavaScript que nos permite almacenar datos.

localStorage // almacena datos y se mantienen esos datos hasta que se borre los datos del navegador, la cache.
sessionStorage // almacena datos pero se pierden cuando se refresca la pagina o se cierra.

localStorage.setItem("Prueba", "Coderhouse")

.setItem // este metodo nos permite almacenar datos.

.getItem // este motodo nos permite ver los datos almacenados.

.removeItem // este motodo nos permite borrar los datos almacenados. 


// Cuando se intenta almacenar objetos o arrays en localStorage o sessionStorage, no se puede leer ya que 
// lo convierten en tipo string, en estos caso se usa el objeto global JSON.

JSON.stringify() // convierte los objetos y los arrays en string.

JSON.parse() // convierte los datos tipo string en objetos o arrays.

