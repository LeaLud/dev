import React from 'react';

// Obteniendo el array en JavaScript o en JSON
const taskList = [
    {
      "id": 1,
      "titulo": "Diseñar página principal",
      "descripcion": "Crear el diseño de la página principal usando HTML y CSS",
      "fecha_agregado": "2024-01-15",
      "fecha_fin": "2024-01-20"
    },
    {
      "id": 2,
      "titulo": "Implementar sistema de autenticación",
      "descripcion": "Desarrollar el sistema de registro y login usando JWT",
      "fecha_agregado": "2024-02-10",
      "fecha_fin": "2024-02-15"
    },
    {
      "id": 3,
      "titulo": "Configurar base de datos",
      "descripcion": "Configurar y conectar la base de datos PostgreSQL al proyecto",
      "fecha_agregado": "2024-03-05",
      "fecha_fin": "2024-03-07"
    },
    {
      "id": 4,
      "titulo": "Crear API REST",
      "descripcion": "Desarrollar una API RESTful para gestionar usuarios y productos",
      "fecha_agregado": "2024-03-20",
      "fecha_fin": "2024-03-25"
    },
    {
      "id": 5,
      "titulo": "Integrar pagos",
      "descripcion": "Implementar el sistema de pagos usando Stripe",
      "fecha_agregado": "2024-04-01",
      "fecha_fin": "2024-04-05"
    },
    {
      "id": 6,
      "titulo": "Realizar pruebas unitarias",
      "descripcion": "Escribir y ejecutar pruebas unitarias para la API",
      "fecha_agregado": "2024-04-10",
      "fecha_fin": "2024-04-15"
    },
    {
      "id": 7,
      "titulo": "Optimizar rendimiento",
      "descripcion": "Mejorar la carga y el rendimiento del sitio web",
      "fecha_agregado": "2024-05-01",
      "fecha_fin": "2024-05-05"
    },
    {
      "id": 8,
      "titulo": "Desplegar en servidor",
      "descripcion": "Configurar y desplegar el proyecto en un servidor AWS",
      "fecha_agregado": "2024-05-10",
      "fecha_fin": "2024-05-12"
    },
    {
      "id": 9,
      "titulo": "Implementar SEO",
      "descripcion": "Optimizar el sitio web para motores de búsqueda",
      "fecha_agregado": "2024-05-15",
      "fecha_fin": "2024-05-20"
    },
    {
      "id": 10,
      "titulo": "Actualizar documentación",
      "descripcion": "Actualizar la documentación del proyecto para reflejar los cambios recientes",
      "fecha_agregado": "2024-05-25",
      "fecha_fin": "2024-05-30"
    },
    {
        "id": 11,
        "titulo": "Aprender React",
        "descripcion": "Hire me!",
        "fecha_agregado": "2024-05-25",
        "fecha_fin": "2027-05-30"
      }
  ]  

const BucleArrayMap = () => {
    return (

        //Llamando el array para repasar cada uno de sus elementos con .map()
        taskList.map((task, i) => (
            <ul key={i}>
                <li><p>ID: {task.id}</p></li>
                <li><h1>{task.titulo}</h1></li>
                <li><h3>{task.autor}</h3></li>
                <li><p><strong>Fecha de inicio:</strong> {task.fecha_agregado}. <strong>Fecha de fin:</strong> {task.fecha_fin}</p></li>

            </ul>
        ))
    )
}

export default BucleArrayMap;