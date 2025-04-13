```
Realizado por :Daniel Felipe Oliveros Rojas 
Curso :        Daw1A

Ejemplos documentados de manipulación del DOM en el archivo README.md.

```

### 1. **Selección de elementos del DOM**

-   **`document.getElementById()`**  
    Selecciona un elemento por su atributo `id`.
    
    javascript
    
    CopiarEditar
    
    `const titulo = document.getElementById('titulo');` 
    
-   **`document.getElementsByClassName()`**  
    Selecciona todos los elementos que tienen una clase concreta.
    
    javascript
    
    CopiarEditar
    
    `const elementos = document.getElementsByClassName('clase-ejemplo');` 
    
-   **`document.querySelector()`**  
    Selecciona el primer elemento que coincida con un selector CSS.
    
    javascript
    
    CopiarEditar
    
    `const parrafo = document.querySelector('p');` 
    
-   **`document.querySelectorAll()`**  
    Selecciona todos los elementos que coincidan con el selector CSS.
    
    javascript
    
    CopiarEditar
    
    `const botones = document.querySelectorAll('.boton');` 
    

----------

### 2. **Manipulación de contenido**

-   **`element.textContent`**  
    Cambia el texto de un elemento.
    
    javascript
    
    CopiarEditar
    
    `titulo.textContent = 'Nuevo título';` 
    
-   **`element.innerHTML`**  
    Cambia el contenido HTML de un elemento.
    
    javascript
    
    CopiarEditar
    
    `parrafo.innerHTML = '<strong>Texto en negrita</strong>';` 
    

----------

### 3. **Manipulación de atributos**

-   **`element.setAttribute()`**  
    Establece un atributo de un elemento.
    
    javascript
    
    CopiarEditar
    
    `parrafo.setAttribute('id', 'parrafo-id');` 
    
-   **`element.getAttribute()`**  
    Obtiene el valor de un atributo.
    
    javascript
    
    CopiarEditar
    
    `const idParrafo = parrafo.getAttribute('id');` 
    
-   **`element.removeAttribute()`**  
    Elimina un atributo.
    
    javascript
    
    CopiarEditar
    
    `parrafo.removeAttribute('id');` 
    

----------

### 4. **Manipulación de clases**

-   **`element.classList.add()`**  
    Añade una clase.
    
    javascript
    
    CopiarEditar
    
    `parrafo.classList.add('resaltado');` 
    
-   **`element.classList.remove()`**  
    Elimina una clase.
    
    javascript
    
    CopiarEditar
    
    `parrafo.classList.remove('resaltado');` 
    
-   **`element.classList.toggle()`**  
    Añade o elimina una clase dependiendo de si ya existe o no.
    
    javascript
    
    CopiarEditar
    
    `parrafo.classList.toggle('resaltado');` 
    

----------

### 5. **Eventos**

-   **`element.addEventListener()`**  
    Asocia un evento a un elemento.
    
    javascript
    
    CopiarEditar
    
    `boton.addEventListener('click', function() { alert('Has hecho clic');
    });` 
    

----------

### 6. **Creación y eliminación de elementos**

-   **`document.createElement()`**  
    Crea un nuevo elemento.
    
    javascript
    
    CopiarEditar
    
    `const nuevoDiv = document.createElement('div');` 
    
-   **`element.appendChild()`**  
    Añade un elemento hijo.
    
    javascript
    
    CopiarEditar
    
    `document.body.appendChild(nuevoDiv);` 
    
-   **`element.remove()`**  
    Elimina un elemento del DOM.
    
    javascript
    
    CopiarEditar
    
    `nuevoDiv.remove();`



### Ejemplo 
```
-- HTML (index.html) --



<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Ejemplo Manipulación del DOM</title>
</head>
<body>
  <!-- Título principal -->
  <h1 id="titulo">Título original</h1>

  <!-- Botón que disparará la acción -->
  <button id="boton">Haz clic aquí</button>

  <!-- Contenedor donde se añadirán nuevos elementos -->
  <div id="contenedor"></div>

  <!-- Enlace al archivo JavaScript -->
  <script src="script.js"></script>
</body>
</html>
```


-- JavaScript (script.js) --


```// ===============================
// Selección de elementos del DOM
// ===============================

// Seleccionamos el título por su ID
const titulo = document.getElementById('titulo');

// Seleccionamos el botón por su ID
const boton = document.getElementById('boton');

// Seleccionamos el contenedor donde añadiremos contenido dinámico
const contenedor = document.getElementById('contenedor');

// =========================================
// Añadimos un listener para el evento 'click'
// =========================================

boton.addEventListener('click', function() {
  // =========================
  // Manipulación de contenido
  // =========================

  // Cambiamos el texto del título principal
  titulo.textContent = 'Has pulsado el botón';

  // ======================================
  // Creación de un nuevo elemento del DOM
  // ======================================

  // Creamos un nuevo párrafo
  const nuevoParrafo = document.createElement('p');

  // Añadimos texto al párrafo
  nuevoParrafo.textContent = 'Este es un nuevo párrafo añadido dinámicamente.';

  // ===============================
  // Manipulación de clases y estilo
  // ===============================

  // Añadimos una clase CSS al párrafo (aunque no hemos definido CSS, serviría para estilos externos)
  nuevoParrafo.classList.add('parrafo-estilo');

  // Cambiamos el color del texto directamente desde JS
  nuevoParrafo.style.color = 'blue';

  // ================================
  // Inserción del nuevo elemento DOM
  // ================================

  // Añadimos el nuevo párrafo como hijo del contenedor
  contenedor.appendChild(nuevoParrafo);
});

```

