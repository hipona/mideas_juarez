## Desafío 02 - "Crear un componente NavBar"

En esta oportunidad he creado un componente NavBar.jsx dentro de una carpeta
a la que he llamado "components"

Existen muchas formas de organizar nuestro código, y es que en React JS no hay nada definido.
Si hay algo que caracteriza mucho a esta librería es que tenemos mucha libertad, es por
eso que también debemos ser cautelosos con cómo organizamos nuestros archivos.

A continuación les mostraré la distribución que he pensado en primera instancia para este proyecto que es relativamente pequeño:

|--src/
|--|--components/
|--|--|--styles/
|--|--|--|--NavBar.css
|--|--|--|--NavBar.jsx

Existen muchas maneras pero esta me sirve mucho cuando tengo 4 o 6 components como máximo. Para el proyecto de ecommerce puende usar el siguiente:

|--src/
|--|--components/
|--|--|--NavBar/
|--|--|--|--NavBar.css
|--|--|--|--NavBar.jsx

## Creando un CartWidget

En mi caso, he creado un componente llamado CartWidget.jsx con su respectiva hoja de estilos en la carpeta /styles

### CartWidget

Este CartWidget tiene un ícono de fontawesome (un baso de cerveza 😜) y tiene un pequeño elemento html que muestra un número. En el futuro este número cambiará en base a los productos que tenga en mi carrito.

Posteriormente, monté el CartWidget dentro de mi component NavBar ✨

### Hero

Bueno, como verán he agregado un hero a mi página, obviamente cree un componente llamado hero, el cual por la propiedad de CSS ( background-image ), muestra una imagen de fondo. Este hero está recibiendo por props una prop llamada title con el título que ven "El Rey de la Cerveza". Más adelante haré un slide con esto, y cada vez que cambie de slide, ingresaré un title diferente.

Bueno, es todo por hoy 😉




MDB 5 React

Version: FREE 4.1.0

Documentation:
https://mdbootstrap.com/docs/b5/react/

Installation:
https://mdbootstrap.com/docs/b5/react/getting-started/installation/

CLI & hosting:
https://mdbootstrap.com/docs/standard/cli/

Support:
https://mdbootstrap.com/support/cat/react/
