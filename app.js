

// Array para guardar los amigos
let amigos = [];
// Función para añadir amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    } // Validar que el nombre no este repetido en la lista
    else {amigos.includes(nombre) ? alert("Este nombre ya está en la lista.") 
        : amigos.push(nombre);}

    // Actualizar lista en pantalla
    mostrarLista();

    // Limpiar input
    input.value = "";
    input.focus(); 
}

// Mostrar la lista de amigos en el <ul>
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li"); 
        li.textContent = amigo; 

        // Opcional: botón para borrar un nombre
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "eliminar";
        btnEliminar.setAttribute("aria-label", `Eliminar ${amigo}`);
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarLista();
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];


    // Mostrar resultado en pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
