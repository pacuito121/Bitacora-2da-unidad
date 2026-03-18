let cont = 0
function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Añadir cero a la izquierda si es menor a 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    const horaFormateada = `${horas}:${minutos}:${segundos}`;
    
    // Mostrar en el DOM
    return horaFormateada
}

function add(){
    let nombre= document.getElementById("Nombre")
    let edad = document.getElementById("Edad")
    if(nombre.value == ""){
        alert("Inserte un nombre!")
    }else{
        let table = document.getElementById("boxs")
        let row = document.createElement("tr")
        for(let i=0;i<4;i++){
            row.insertCell(i)
        }
        row.cells.item(0).innerHTML = ++cont
        row.cells.item(1).innerHTML = nombre.value
        row.cells.item(2).innerHTML = edad.value
        row.cells.item(3).innerHTML = actualizarReloj()
        table.appendChild(row)
    }
}