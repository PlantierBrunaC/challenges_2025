// asyncJavascript.js

async function writeItemsWithDelay(arr) {
  let delay = 1000; // começa com 1 segundo
  const output = document.getElementById("output");

  for (const item of arr) {
    await new Promise(resolve => setTimeout(resolve, delay));
    output.textContent += `${item}\n`;

    // dobra o tempo, mas limita a no máximo 10 segundos
    delay = Math.min(delay * 2, 10000);
  }
}

// Tornar acessível globalmente
window.writeItemsWithDelay = writeItemsWithDelay;
