// ============================
// CRONÓMETRO SIMPLE
// ============================

let cronoSegundos = 0;
let cronoIntervalo = null;

function formatearTiempo(seg) {
  const min = String(Math.floor(seg / 60)).padStart(2, "0");
  const sec = String(seg % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function iniciarCronometro() {
  if (cronoIntervalo) return;

  cronoIntervalo = setInterval(() => {
    cronoSegundos++;
    const el = document.getElementById("cronometro");
    if (el) el.textContent = formatearTiempo(cronoSegundos);
  }, 1000);
}

function resetearCronometro() {
  clearInterval(cronoIntervalo);
  cronoIntervalo = null;
  cronoSegundos = 0;

  const el = document.getElementById("cronometro");
  if (el) el.textContent = "00:00";

  iniciarCronometro();
}

// ============================
// INICIALIZACIÓN
// ============================

document.addEventListener("DOMContentLoaded", () => {
  iniciarCronometro();

  const btnReset = document.getElementById("resetCrono");
  if (btnReset) {
    btnReset.addEventListener("click", resetearCronometro);
  }
});
