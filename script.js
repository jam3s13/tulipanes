const claveCorrecta = "2023"; // ¡Cambia aquí tu clave de 4 dígitos!

document.addEventListener("DOMContentLoaded", () => {
    // Referencias
    const btnAcceder = document.getElementById("btn-acceder");
    const btnToca = document.getElementById("btn-toca");
    
    const pantallaClave = document.getElementById("pantalla-clave");
    const pantalla1 = document.getElementById("pantalla-1");
    const pantalla2 = document.getElementById("pantalla-2");
    
    const audio = document.getElementById("musica");
    const inputClave = document.getElementById("input-clave");
    const errorClave = document.getElementById("error-clave");

    // LÓGICA DE LA CONTRASEÑA
    btnAcceder.addEventListener("click", () => {
        if (inputClave.value === claveCorrecta) {
            // Ocultar pantalla de bloqueo (con imagen) y mostrar pantalla 1 (básica)
            pantallaClave.classList.remove("active");
            pantalla1.classList.add("active");
            
            // COMENZAR MÚSICA DESPUÉS DE LA CLAVE
            audio.play().catch(e => console.log("Audio bloqueado por navegador."));
        } else {
            // Mostrar error y limpiar input
            errorClave.style.display = "block";
            inputClave.value = ""; 
        }
    });

    // LÓGICA DE LA TARJETA AL RAMO (La animación del ramo y oscurecimiento)
    btnToca.addEventListener("click", () => {
        // OSCURECEMOS EL FONDO (Transición de pantalla 1 a pantalla 2)
        document.body.classList.remove("not-loaded");

        // Transición de pantallas
        pantalla1.classList.remove("active");
        setTimeout(() => {
            pantalla2.classList.add("active");
            iniciarMagia(); // ¡Aquí inicia la dedicatoria y el ramo florece!
        }, 1000); 
    });
});

// A partir de aquí deja tus funciones iniciarMagia(), crearLuciernagas(), escribirTexto(), florecerRamo()...
// A partir de aquí deja tus funciones iniciarMagia(), crearLuciernagas(), escribirTexto(), florecerRamo()...

function iniciarMagia() {
    crearLuciernagas();
    escribirTexto("Feliz cumpleaños señorita Lessli,\nEste ramo de tulipanes son eternos y son Para Ti.", () => {
        florecerRamo();
    });
}

// Creador de Luciérnagas Mágicas
function crearLuciernagas() {
    const contenedor = document.getElementById("luciernagas");
    const cantidad = 40; // Número de luciérnagas

    for (let i = 0; i < cantidad; i++) {
        let luciernaga = document.createElement("div");
        luciernaga.classList.add("luciernaga");
        
        // Posiciones aleatorias en toda la pantalla
        luciernaga.style.left = Math.random() * 100 + "vw";
        luciernaga.style.top = Math.random() * 100 + "vh";
        
        // Desfases para que parpadeen y floten a distinto ritmo
        let delayParpadeo = Math.random() * 5 + "s";
        let duracionFlote = Math.random() * 5 + 1 + "s";
        
        luciernaga.style.animationDelay = `${delayParpadeo}, ${delayParpadeo}`;
        luciernaga.style.animationDuration = `3s, ${duracionFlote}`;
        
        contenedor.appendChild(luciernaga);
    }
}

// Efecto máquina de escribir
function escribirTexto(texto, callback) {
    const elemento = document.getElementById("texto-dedicatoria");
    let index = 0;
    elemento.innerHTML = ""; 

    function escribir() {
        if (index < texto.length) {
            if (texto.charAt(index) === '\n') {
                elemento.innerHTML += "<br>";
            } else {
                elemento.innerHTML += texto.charAt(index);
            }
            index++;
            setTimeout(escribir, 100); 
        } else {
            setTimeout(callback, 800); 
        }
    }
    escribir();
}

// Secuencia exacta del florecimiento
function florecerRamo() {
    const contenedorRamo = document.querySelector(".contenedor-ramo");
    const imagenEnvoltura = document.querySelector(".imagen-envoltura");
    const tallos = document.querySelectorAll(".tallo");
    const flores = document.querySelectorAll(".flor");
    const hojas = document.querySelectorAll(".hoja");

    // 1. Sube el contenedor principal
    contenedorRamo.classList.add("subir");

    // 2. Aparece tu imagen PNG de la envoltura y crecen los tallos
    setTimeout(() => {
        imagenEnvoltura.classList.add("mostrar-envoltura");
        tallos.forEach(t => t.classList.add("crecer-tallo"));
    }, 500);

    // 3. Las flores se abren y las hojas se despliegan
    setTimeout(() => {
        flores.forEach(f => f.classList.add("crecer-flor"));
        hojas.forEach(h => h.classList.add("crecer-hoja"));
    }, 2200);
}