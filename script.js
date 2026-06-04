const claveCorrecta = "2023"; // ¡Cambia aquí tu clave de 4 dígitos!

document.addEventListener("DOMContentLoaded", () => {
    // === REFERENCIAS A ELEMENTOS ===
    const btnAcceder = document.getElementById("btn-acceder");
    const btnToca = document.getElementById("btn-toca");
    const btnSorpresa = document.getElementById("btn-sorpresa");
    
    const pantallaClave = document.getElementById("pantalla-clave");
    const pantalla1 = document.getElementById("pantalla-1");
    const pantalla2 = document.getElementById("pantalla-2");
    const modalSorpresa = document.getElementById("modal-sorpresa");
    const cerrarModal = document.getElementById("cerrar-modal");
    
    const audio = document.getElementById("musica");
    const inputClave = document.getElementById("input-clave");
    const errorClave = document.getElementById("error-clave");

    // === 1. LÓGICA DE LA CONTRASEÑA ===
    btnAcceder.addEventListener("click", () => {
        if (inputClave.value === claveCorrecta) {
            pantallaClave.classList.remove("active");
            pantalla1.classList.add("active");
            // Arranca el audio al acertar
            audio.play().catch(e => console.log("Audio bloqueado por navegador."));
        } else {
            errorClave.style.display = "block";
            inputClave.value = ""; 
        }
    });

    // === 2. TRANSICIÓN AL RAMO (LA MAGIA) ===
    btnToca.addEventListener("click", () => {
        // Oscurece el fondo
        document.body.classList.remove("not-loaded");
        pantalla1.classList.remove("active");
        
        setTimeout(() => {
            pantalla2.classList.add("active");
            iniciarMagia(); 
        }, 1000); 
    });

    // === 3. LÓGICA DEL BOTÓN EXTRA Y MODAL ===
    btnToca.addEventListener("click", () => {
        // Muestra el botón 8 segundos después de haber tocado para ver el ramo
        setTimeout(() => {
            if(btnSorpresa) btnSorpresa.classList.add("mostrar-btn");
        }, 8000); 
    });

    if(btnSorpresa) {
        btnSorpresa.addEventListener("click", () => {
            modalSorpresa.classList.add("mostrar-modal");
        });
    }

    if(cerrarModal) {
        cerrarModal.addEventListener("click", () => {
            modalSorpresa.classList.remove("mostrar-modal");
        });
    }
});

// ==========================================
// FUNCIONES DE ANIMACIÓN Y DIBUJO
// ==========================================

function iniciarMagia() {
    crearLuciernagas();
    escribirTexto("Feliz cumpleaños señorita Lessli,\nEste ramo de tulipanes son eternos y son Para Ti.", () => {
        florecerRamo();
    });
}

function crearLuciernagas() {
    const contenedor = document.getElementById("luciernagas");
    const cantidad = 40; 

    for (let i = 0; i < cantidad; i++) {
        let luciernaga = document.createElement("div");
        luciernaga.classList.add("luciernaga");
        
        luciernaga.style.left = Math.random() * 100 + "vw";
        luciernaga.style.top = Math.random() * 100 + "vh";
        
        let delayParpadeo = Math.random() * 5 + "s";
        let duracionFlote = Math.random() * 5 + 1 + "s";
        
        luciernaga.style.animationDelay = `${delayParpadeo}, ${delayParpadeo}`;
        luciernaga.style.animationDuration = `3s, ${duracionFlote}`;
        
        contenedor.appendChild(luciernaga);
    }
}

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

function florecerRamo() {
    const contenedorRamo = document.querySelector(".contenedor-ramo");
    const imagenEnvoltura = document.querySelector(".imagen-envoltura");
    const tallos = document.querySelectorAll(".tallo");
    const flores = document.querySelectorAll(".flor");
    const hojas = document.querySelectorAll(".hoja");

    contenedorRamo.classList.add("subir");

    setTimeout(() => {
        imagenEnvoltura.classList.add("mostrar-envoltura");
        tallos.forEach(t => t.classList.add("crecer-tallo"));
    }, 500);

    setTimeout(() => {
        flores.forEach(f => f.classList.add("crecer-flor"));
        hojas.forEach(h => h.classList.add("crecer-hoja"));
    }, 2200);
}