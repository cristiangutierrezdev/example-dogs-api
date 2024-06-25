# 🐶🐶🐶 Bienvenido a la  API de Perros 🐶🐶🐶

Esta API ha sido creada con fines educativos y experimentales. Puedes utilizar la API para hacer peticiones de tipo **GET**, **POST**, **PUT** y **DELETE**, lo que te permitirá practicar un CRUD desde el front end. Esta basada en perros porque así lo quise hacer XD más abajo podrás encontrar la documentación para utilizarla correctamente.

# Requisitos ⚙️

Esta api no exige ningún tipo de autenticación por lo tanto lo único necesario a tener en cuenta es la siguiente url base.

###### URL BASE
`https://experimental-dogs-experimental-org.koyeb.app/api/v1`


## Peticiones 📖


### Crear un perro 💾 🐶

##### Metodo 
`POST`
##### path 
`/dogs`

##### Datos a enviar para crear un perro
|    llave       |Tipo de valor                  |¿Es obligatorio?             |
|----------------|-------------------------------|-----------------------------|
|name            |`string`                       |SI                           |
|breed           |`string`                       |SI                           |
|image           |`string`                       |SI                           |
|color           |`string`                       |NO                           |
|age             |`number`                       |NO                           |
|favoriteToy     |`string`                       |NO                           |
|personality     |`string`                       |NO                           |
|bio             |`string`                       |NO                           |

##### Ejemplo de body 
```
{
    "name": "Pepe",
    "breed": "Fox Terrier",
    "image": "https://images.dog.ceo/breeds/terrier-fox/n02095314_3299.jp",
    "color": "Café y Negro",
    "age": 3,
    "favoriteToy": "Peluche",
    "personality": "Juguetón",
    "bio": "A Pepe le gusta jugar mucho con su peluche",
  },
```

##### Respuesta
La respuesta de la api será el objeto del perro creado en la base de datos.
##
### Obtener todos los perros 🐶🐶🐶

##### Metodo 
`GET`
##### path 
`/dogs`
##### Respuesta
La respuesta de la api sera un arreglo de objetos de los perros.
##
### Obtener un perro por su ID 🐶

##### Metodo 
`GET`
##### path 
`/dogs/:dogid`

> **Nota:** Recuerda que debes reemplazar `:dogid` por el ID del perro que quieres obtener.
##### Respuesta
La respuesta de la api sera el objeto del perro obtenido de la base de datos.
##
### Modificar un perro 🔨🐶

##### Metodo 
`PUT`
##### path 
`/dogs/:dogid`

> **Nota:** Recuerda que debes reemplazar `:dogid` por el ID del perro que quieres obtener.
##### Datos que puedes modificar del perro
|    llave       |Tipo de valor                  |¿Es obligatorio?             |
|----------------|-------------------------------|-----------------------------|
|name            |`string`                       |NO                           |
|breed           |`string`                       |NO                           |
|image           |`string`                       |NO                           |
|color           |`string`                       |NO                           |
|age             |`number`                       |NO                           |
|favoriteToy     |`string`                       |NO                           |
|personality     |`string`                       |NO                           |
|bio             |`string`                       |NO                           |

##### Respuesta
La respuesta de la api sera el objeto del perro modificado de la base de datos.
##
### Eliminar un perro 💀🐶

##### Metodo 
`DELETE`
##### path 
`/dogs/:dogid`

> **Nota:** Recuerda que debes reemplazar `:dogid` por el ID del perro que quieres obtener.
##### Respuesta
La respuesta de la api sera el siguiente mensaje:
``Perro eliminado``
