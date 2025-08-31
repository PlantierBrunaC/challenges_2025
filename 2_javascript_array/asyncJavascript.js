
async function writeItemsWithDelay(maxDelayMs = 10000) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const output = document.getElementById("output");

  let delay = 1000; 
  let elapsed = 0;  
  let index = 0;    

  while (elapsed + delay <= maxDelayMs) {
    const thisDelay = delay;

    await new Promise(resolve => setTimeout(resolve, thisDelay));
    elapsed += thisDelay;

    const letter = alphabet[index % alphabet.length];
    output.textContent += `${letter} - ${thisDelay / 1000}s\n`;

    delay *= 2;
    index++;
  }
}

window.writeItemsWithDelay = writeItemsWithDelay;
