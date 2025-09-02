
function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(resolve, ms);
    if (signal) {
      if (signal.aborted) {
        clearTimeout(id);
        return reject(new DOMException('Aborted', 'AbortError'));
      }
      signal.addEventListener('abort', () => {
        clearTimeout(id);
        reject(new DOMException('Aborted', 'AbortError'));
      }, { once: true });
    }
  });
}


async function writeItemsWithExponentialDelay(items, outputEl, signal) {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array');
  }

  if (items.length === 0) {
    outputEl.textContent = 'Nothing to display.';
    return;
  }

  let delay = 1000; 
  let elapsed = 0;

  for (let i = 0; i < items.length; i++) {
    await sleep(delay, signal);
    elapsed += delay;

    outputEl.textContent += `${String(items[i])}  —  +${(delay/1000)}s (total: ${(elapsed/1000)}s)\n`;
    delay *= 2;
  }
}

window.writeItemsWithExponentialDelay = writeItemsWithExponentialDelay;
