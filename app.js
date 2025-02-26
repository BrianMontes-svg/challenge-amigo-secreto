let amigos=[];


function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    if (elementoHTML){elementoHTML.innerHTML= texto;}
}

function agregarAmigo(){
    let input = document.getElementById("amigo").value.trim();

    if (input === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    console.log("valor ingresado:", input);

    amigos.push(input);
    document.getElementById("amigo").value = "";

    actualizarLista();
}
    function actualizarLista(){
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML ="";

        
            for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li"); 
            li.textContent = amigos[i];
            lista.appendChild(li);
    } 
        
} 

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para seleccionar.");
        return;
    }
                    // Índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 

                    // Obtener el amigo aleatorio
    let amigoSeleccionado = amigos[indiceAleatorio]; 

    let amigoSorteado = document.getElementById("resultado");
    amigoSorteado.innerHTML = ("#amigoSeleccionado", `El amigo sorteado es: ${amigoSeleccionado}`);
    asignarTextoElemento("#amigoSeleccionado", `Amigo seleccionado: ${amigoSeleccionado}`);
    console.log(amigoSeleccionado);
}

