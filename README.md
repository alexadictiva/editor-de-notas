# Editor de notas

Editor de una nota hecho con React y CSS. Permite abrir un editor, modificar un borrador y decidir si guardar los cambios o cancelarlos sin alterar la última versión guardada.

Este proyecto forma parte de mi práctica de React. La idea es entender qué datos necesitan su propio estado y cómo separar lo que estoy escribiendo de lo que ya confirmé.

## Qué puedes hacer

- Abrir el editor con el texto de la nota guardada.
- Escribir en el borrador sin cambiar la tarjeta de la nota.
- Guardar los cambios y cerrar el editor.
- Cancelar la edición sin modificar la nota guardada.
- Volver a editar a partir de la última versión guardada.
- Usar la interfaz en pantallas de escritorio y dispositivos móviles.

El proyecto trabaja con una sola nota. Los datos se mantienen en el estado de React durante el uso de la página; no se guardan al recargarla. La versión actual permite guardar una nota vacía.

## Cómo funciona

| Acción | Resultado |
| --- | --- |
| Editar nota | Copia el texto guardado al borrador y muestra el editor. |
| Escribir | Actualiza únicamente el borrador. |
| Guardar nota | Reemplaza la nota guardada con el borrador y oculta el editor. |
| Cancelar | Oculta el editor sin cambiar la nota guardada. |

Al volver a abrir el editor, el borrador se carga desde la nota guardada. Así, los cambios cancelados no reaparecen.

## Qué practiqué

- Manejo de estado con `useState`.
- Separación entre nota guardada, borrador y visibilidad del editor.
- Un textarea controlado con `value` y `onChange`.
- Eventos `onClick` para editar, guardar y cancelar.
- Mostrar y ocultar el editor mediante una clase CSS según un estado booleano.
- Distinguir los datos que necesito conservar de las acciones que los modifican.

## Cómo se organiza

- `src/App.jsx`: contiene la tarjeta, el editor, los tres estados y las funciones que controlan la edición. Todo está en un componente para practicar el recorrido de los datos.
- `src/index.css`: contiene los estilos, la clase que oculta el editor y la adaptación a pantallas pequeñas.
- `src/main.jsx`: monta la aplicación.

## Tecnologías

React, JavaScript, JSX, CSS y Vite. El proyecto también incluye ESLint para revisar el código.

## Ejecutar en local

Necesitas Node.js y npm instalados. Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre la dirección que Vite muestre en la terminal.

## Otros comandos

```bash
npm run build    # Genera la versión de producción en dist
npm run preview  # Sirve localmente la versión generada
npm run lint     # Revisa el código con ESLint
```

Antes de usar `npm run preview`, ejecuta `npm run build`.
