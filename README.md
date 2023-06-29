# Tienda de Joyas - API REST

Este proyecto es una API REST desarrollada para la tienda de joyas My Precious Spa. Proporciona una interfaz para interactuar con el inventario de joyas, permitiendo realizar consultas con límites, filtros, paginación y ordenamiento.

## Requisitos

- Node.js (v12 o superior)
- PostgreSQL

1.- Ve al directorio del proyecto:

- cd tienda-joyas-api

2.- Instala las dependencias:

npm install

## Configuración de la base de datos:

 - Crea una base de datos en PostgreSQL llamada joyas.
 - Ejecuta el script SQL proporcionado en el archivo db.sql para crear la tabla inventario y agregar algunos datos de ejemplo.
 - Configuración del entorno:

## Crea un archivo .env en el directorio raíz del proyecto.

Agrega las siguientes variables de entorno al archivo .env y configúralas según tu entorno de desarrollo:

 - DB_USER=usuario_de_postgres
 - DB_PASSWORD=password_de_postgres
 - DB_HOST=localhost
 - DB_PORT=5432
 - DB_NAME=joyas

## Inicia la aplicación:

npm start
La API estará disponible en http://localhost:3000.

## Uso
La API proporciona las siguientes rutas:

    - GET /joyas: Obtiene la lista de joyas con opciones de límite, paginación y ordenamiento.
    - GET /joyas/filtros: Obtiene la lista de joyas filtradas por precio máximo, mínimo, categoría y metal.
    - Consulta la documentación de la API para obtener más detalles sobre los parámetros y las respuestas.

