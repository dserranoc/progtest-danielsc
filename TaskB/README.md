# Ejercicio B

Contamos con un objeto con varias propiedades anidadas (3 niveles) como el siguiente:

```javascript
const original = {
  foo: 'one',
  bar: 2,
  baz: {
      foo: 4,
      bar: {
          foo: 0,
          bar: null,
      },
      baz: {
          foo: 1,
          bar: 6,
          baz: 'two',
      }
  }
}
```

Queremos obtener otro objeto de un solo nivel, cuyas claves están conformadas por el path que representan las claves de cada nivel hasta el valor, concatenadas por un punto. 

Pero queremos quedarnos solo con los valores que sean pares.

Es decir, que el resultado sea el siguiente:

```javascript
const expected = {
   bar: 2,
   'baz.foo': 4,
   'baz.bar.foo': 0,
   'baz.baz.bar': 6,
}
```
