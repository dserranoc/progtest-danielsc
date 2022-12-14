# Ejercicio D

Tenemos una función que hace uso de una serie de métodos externos de una librería matemática muy compleja a la que nos han dado acceso.

Queremos hacer una prueba de concepto usando esa API, y hemos diseñado una función para hacer una serie de cálculos sobre una lista de números. Se comprueba el valor final con un console.assert para validarla, y al ejecutarlo vemos que no está funcionando como se espera debido a errores en el código.

Viendo el código y el algoritmo que se pretende ejecutar, ¿puedes corregir los errores de la función sumSmallDoubles para pasar la validación?


```javascript
/* External API stubs */
const twice = amount => Promise.resolve(amount * 2);
const add = (total, amount) => Promise.resolve(total + amount);
/* End of stubs */
 
const THRESHOLD = 10;
async function sumSmallDoubles(...values) {
   const sum = 0;
   const doubles = values.reduce((acc, value) => {
       return [...acc, twice(value)];
   }, []);
 
   for (const value in doubles) {
       if (value < THRESHOLD) {
           sum = add(sum, value);
       }
   }
 
   return sum;
}
 
const testApiFunction = async () => {
   const result = await sumSmallDoubles([1, 4, 5, -2]);
   console.assert(result === 6, 'Result should be 6, found %i', result);
};
 
testApiFunction();
```
