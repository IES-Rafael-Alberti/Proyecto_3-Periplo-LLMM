
/////CARRITO/////////////////////////////////////////////////////

// Seleccionamos todos los botones de compra en producto.html
const botonesCompra = document.querySelectorAll("button[data-id]");

// Añadir evento a cada botón
botonesCompra.forEach(boton => {
    boton.addEventListener('click', (event) => {
        // Extraemos los datos del producto desde los atributos data
        const producto = {
            id: event.target.getAttribute("data-id"),
            nombre: event.target.getAttribute("data-nombre"),
            precio: event.target.getAttribute("data-precio"),
            imagen: event.target.getAttribute("data-imagen"),
        };

        // Recuperamos el carrito desde SessionStorage (si ya existe)
        let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

        // Agregar el nuevo producto al carrito
        carrito.push(producto);

        // Guardamos el carrito actualizado en SessionStorage
        sessionStorage.setItem('carrito', JSON.stringify(carrito));

        // Confirmación visual
        alert(`${producto.nombre} ha sido añadido al carrito`);
    });
});

// Mostrar el contenido del carrito en carrito.html
if (window.location.pathname.includes("carrito.html")) {
    const carritoContenido = document.querySelector('.carrito-contenido');

    // Recuperamos el carrito desde SessionStorage
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

    // Si hay productos en el carrito, los mostramos
    if (carrito.length > 0) {
        carrito.forEach(producto => {
            const productoHTML = document.createElement('article');
            productoHTML.classList.add('producto-en-carrito');
            productoHTML.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto_carrito">
                <p>Nombre: ${producto.nombre}</p>
                <p>Precio: ${producto.precio}€</p>
            `;
            carritoContenido.appendChild(productoHTML);
        });
    } else {
        carritoContenido.innerHTML = "<p>Tu carrito está vacío.</p>";
    }

    // Función de compra (limpiar carrito)
    document.getElementById('comprar').addEventListener('click', () => {
        if (carrito.length > 0) {
            alert("¡Gracias por tu compra!");
            sessionStorage.removeItem('carrito'); // Limpiar carrito
            carritoContenido.innerHTML = "<p>¡Compra realizada! Tu carrito está vacío.</p>";
        } else {
            alert("Tu carrito está vacío.");
        }
    });
}


////////////////////////// FILTRO //////////////////////////////



    document.getElementById('aplicar_filtro').addEventListener('click', function () {
        const seleccion = Array.from(document.getElementById('precio_seleccion').selectedOptions).map(option => parseFloat(option.value));

        const productos = document.querySelectorAll('.producto article');

        productos.forEach(producto => {
            const precioTexto = producto.querySelector('.precio').textContent;
            const precioNumerico = parseFloat(precioTexto.replace(/\./g, '').replace('€', '').replace(',', '.'));

            if (seleccion.includes(precioNumerico)) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });

/////////////////////////////////Validacion formulario ///////////////////////////////////


function validar_nombre() {
    console.log('Validando nombre...');
    const nombre = document.getElementById('nombre');
    if (nombre.value.trim().length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        nombre.focus();
        return false;
    }
    return true;
}


function validar_email() {
    const email = document.getElementById('email');
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email_regex.test(email.value.trim())) {
        alert('Por favor ingrese un correo electrónico válido.');
        email.focus();
        return false;
    }
    return true;
}

function validar_telefono() {
    const telefono = document.getElementById('telefono');
    const telefono_regex = /^[0-9]{7,}$/;
    if (!telefono_regex.test(telefono.value.trim())) {
        alert('El teléfono debe tener al menos 7 números.');
        telefono.focus();
        return false;
    }
    return true;
}

function validar_comentarios() {
    const comentarios = document.getElementById('comentarios');
    const texto = comentarios.value.trim();
    if (texto.length > 0 && texto.length < 5) {
        alert('Los comentarios deben tener al menos 5 caracteres si los escribe.');
        comentarios.focus();
        return false;
    }
    return true;
}

// Evento blur para validar justo al salir del campo
document.getElementById('nombre').addEventListener('blur', validar_nombre);
document.getElementById('email').addEventListener('blur', validar_email);
document.getElementById('telefono').addEventListener('blur', validar_telefono);
document.getElementById('comentarios').addEventListener('blur', validar_comentarios);

// Validación final al enviar el formulario
document.querySelector('form').addEventListener('submit', function (e) {
    if (!validar_nombre() || !validar_email() || !validar_telefono() || !validar_comentarios()) {
        e.preventDefault();
        alert('Por favor, corrige los errores antes de enviar el formulario.');
    } else {
        alert('Formulario enviado correctamente!');
    }
});
