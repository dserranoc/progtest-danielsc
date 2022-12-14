# Ejercicio A

Partimos de una definición de dos tablas en una Base de Datos, usuarios (`user`) y estudios (`study`), con una relación entre ellas usando una tercera tabla `user_study_rel`, que indica qué usuarios pertenecen a cada estudio.

Cada usuario tiene una lista de roles que se almacenan en la columna roles de la tabla *user*, en forma de cadena de texto separados por comas.

```sql
CREATE TABLE user (
id INTEGER PRIMARY KEY,
email TEXT,
roles TEXT,
status TEXT DEFAULT 'active'
);
 
CREATE TABLE study (
id INTEGER PRIMARY KEY,
name TEXT,
status TEXT DEFAULT 'open'
);
 
CREATE TABLE user_study_rel (
user_id INTEGER,
study_id INTEGER
);
```

Los datos existentes en las tablas son los siguientes.

```
id | email                | roles              | status
-------------------------------------------------------
1  | api@sharecrf.com     | system             | active
2  | bob@sharecrf.com     | user               | active
3  | alice@sharecrf.com   | user               | active
4  | froilan@sharecrf.com | creator,user       | active
5  | admin@sharecrf.com   | user,backoffice    | active
 
id | name             | status
-------------------------------
1  | Default          | open
2  | Tumores          | pending
3  | Nuevo analgésico | closed
 
user_id | study_id
---------------------
1       | 1
1       | 2
2       | 2
4       | 3
```

Se pide construir una sentencia SQL para actualizar la tabla user y poner la columna status a "blocked" en los usuarios que cumplan lo siguiente:

1. No pertenecen a ningún estudio o pertenecen solamente a estudios en estado "closed"
2. No tienen entre sus roles "backoffice".
