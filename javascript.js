'use script';

var jugador = "X"; // el primer jugador siempre es X

function comprobarGanador() {
  var celdas = [];
  // obtener todas las celdas del tablero
  for (var i = 1; i <= 9; i++) {
    celdas.push(document.getElementById("celda" + i).innerHTML);
  }
  
  // comprobar todas las posibles combinaciones ganadoras
  if (celdas[0] == celdas[1] && celdas[1] == celdas[2] && celdas[0] != "") {
    alert("Has ganado!");
  } else if (celdas[3] == celdas[4] && celdas[4] == celdas[5] && celdas[3] != "") {
    alert("Has ganado!");
  } else if (celdas[6] == celdas[7] && celdas[7] == celdas[8] && celdas[6] != "") {
    alert("Has ganado!");
  } else if (celdas[0] == celdas[3] && celdas[3] == celdas[6] && celdas[0] != "") {
    alert("Has ganado!");
  } else if (celdas[1] == celdas[4] && celdas[4] == celdas[7] && celdas[1] != "") {
    alert("Has ganado!");
  } else if (celdas[2] == celdas[5] && celdas[5] == celdas[8] && celdas[2] != "") {
    alert("Has ganado!");
  } else if (celdas[0] == celdas[4] && celdas[4] == celdas[8] && celdas[0] != "") {
    alert("Has ganado!");
  } else if (celdas[2] == celdas[4] && celdas[4] == celdas[6] && celdas[2] != "") {
    alert("Has ganado!");
  }
}

function jugar(celda) {
  var celdaSeleccionada = document.getElementById("celda" + celda);
  if (celdaSeleccionada.innerHTML == "") { // solo se permite marcar celdas vacías
    celdaSeleccionada.innerHTML = jugador; // marca la celda con la letra del jugador actual
    if (jugador == "X") {
      jugador = "O"; // cambia al siguiente jugador
    } else {
      jugador = "X";
    }
    comprobarGanador(); // comprueba si hay un ganador después de cada jugada
  }
}




