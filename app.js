// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let listaElement = document.getElementById("listaAmigos");
let resultadoElement = document.getElementById("resultado");

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    listaElement.innerHTML = "";
    listaAmigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos 2 personas para sortear.");
        return;
    }

    // Sorteamos un solo nombre de la lista
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    mostrarResultado(amigoSorteado);

    // Borrar la lista de amigos después de hacer el sorteo
    listaAmigos = [];
    actualizarLista();  // Actualizar la lista en la interfaz
}

function mostrarResultado(amigoSorteado) {
    resultadoElement.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${amigoSorteado}`;
    resultadoElement.appendChild(li);
}
