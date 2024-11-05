// Definicion los elementos de HTML
const numeroTurno = document.getElementById("numero-turno") as HTMLElement;
const prevButton = document.getElementById("prev-turno") as HTMLButtonElement;
const nextButton = document.getElementById("next-turno") as HTMLButtonElement;
const resetButton = document.getElementById("reset-turno") as HTMLButtonElement;
const inputManualTurno = document.getElementById("input-manual-turno") as HTMLInputElement;
const newManualTurnoButton = document.getElementById("new-manual-turno") as HTMLButtonElement;


// Inicializamos el turno en 0
let turnoActual = 0;

// Función para actualizar el contenido del elemento 'numero-turno'
function actualizarTurno() {
    numeroTurno.textContent = formatNumber(turnoActual);      
  }
  
// Formatear número dos digitos
function formatNumber(number: string | number): string {
    const numericValue = typeof number === 'string' ? parseInt(number) : number;
      if (isNaN(numericValue)) {
      console.log("El valor proporcionado no es un número válido.");
    }
    return numericValue < 10 ? '0' + numericValue : String(numericValue);
  }
  
// Asignamos el valor inicial
  actualizarTurno();

// Si se clicka al boton next-turno: ++ 
nextButton.addEventListener("click", () => {
  turnoActual++;
  actualizarTurno();
});

// Si se clicka al boton prev-turno: --
prevButton.addEventListener("click", () => {
  if (turnoActual > 0) {
    turnoActual--;
  }
  actualizarTurno();
});

// Si se clicka al boton reset-turno: 0
resetButton.addEventListener("click", () => {
  turnoActual = 0;
  actualizarTurno();
});

// Event listener para el cambio manual de turno
newManualTurnoButton.addEventListener("click", () => {
    const nuevoTurno = parseInt(inputManualTurno.value, 10);
    turnoActual = nuevoTurno;
    actualizarTurno();
    inputManualTurno.value = '';
});