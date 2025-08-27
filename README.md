# challenge_amigo_secreto
El objetivo de éste reto es concatenar lo aprendido en el curso de "aprende programación con JavaScript" de Alura
- Uso de **variables**
- Manejo de **condicionales** (if & else).
- creacion de **funciones** y llamar a la función.
- uso de **arrays**
- verificar valores para evitar repetir un valor
  
 ## Como Funciona ##
 - escribe el nombre de un amigo y presiona la tecla Agregar si se encuentra vacia la casilla se desplegara un alerta pidiendote que escribas  "un nombre"
 - Al ir escribiendo y agregando los nombres aparecera un **boton** para eliminar al amigo en caso de que se dese cambiar el valor
 - antes de pulsar el boton Sortear amigo asegurate que por lo menos haya dos valores en la lista y si el juego no detecta ningun nombre o valor aparecera un alert con la leyenda 'AGREGA UN NOMBRE ANTES DE SORTEAR'
 - preciona el botón sortear Amigo y enseguida en la parte superior aparecera tu amigo secreto
## Funciones Utilizadas ##

# Listado de Variables, Comandos y Listas en `app.js`

## Variables

- `amigos`:  
  Array que almacena los nombres de los amigos.

- `input`:  
  Elemento HTML `<input>` para ingresar el nombre del amigo.

- `nombre`:  
  Valor ingresado en el input, procesado con `.trim()`.

- `lista`:  
  Elemento HTML `<ul>` donde se muestra la lista de amigos.

- `li`:  
  Elemento HTML `<li>` para cada amigo en la lista.

- `btnEliminar`:  
  Botón HTML para eliminar un amigo de la lista.

- `indiceAleatorio`:  
  Índice generado aleatoriamente para seleccionar el amigo secreto.

- `amigoSecreto`:  
  Nombre del amigo secreto seleccionado.

- `resultado`:  
  Elemento HTML donde se muestra el resultado del sorteo.

## Comandos y Métodos

- `document.getElementById()`  
  Obtiene elementos HTML por su ID.

- `.trim()`  
  Elimina espacios en blanco al inicio y final de un string.

- `.includes()`  
  Verifica si un elemento existe en el array.

- `.push()`  
  Agrega un elemento al array.

- `.forEach()`  
  Itera sobre los elementos del array.

- `.createElement()`  
  Crea un nuevo elemento HTML.

- `.appendChild()`  
  Agrega un elemento hijo a otro elemento HTML.

- `.setAttribute()`  
  Establece atributos en elementos HTML.

- `.splice()`  
  Elimina elementos del array.

- `.innerHTML`  
  Modifica el contenido HTML de un elemento.

- `.focus()`  
  Da foco al elemento input.

- `alert()`  
  Muestra una alerta en pantalla.

- `Math.floor()`  
  Redondea un número hacia abajo.

- `Math.random()`  
  Genera un número aleatorio entre 0 y 1.

## Listas

- `amigos`  
  Array principal que contiene los nombres de los amigos.
## Pruebalo ##
Ingresa al github en la siguiente [liga: ](https://github.com/MOEblvGDL/challenge_amigo_secreto.git/)

## Autor ## 
Moises Ramos

Realizado con conocimientos adquiridos en **Alura Latam**, y con investigación para mejorar la limpieza del codigo con uso de **ChatGPT** y foro de *discord Alura* a travez de trabajos de mis compañeros para adaptar ideas al codigo.
Éste poco a poco conforme vaya avanzando mi conocimiento se ira actualizando para poder medir mi progreso de aprendizaje. Espero que así como tuve varios aportes de varias personas en el foro, tambien tenga algo para aportar a vuestro conocimiento.
saludos.














