// O(n) stack-based bracket validator.
// Ignores any char that is not one of ()[]{}.
function isValidBrackets(input) {
  const onlyBrackets = (input.match(/[()[\]{}]/g) || []).join('');
  const openers = new Set(['(', '[', '{']);
  const match = { ')': '(', ']': '[', '}': '{' };
  const stack = [];

  for (let i = 0; i < onlyBrackets.length; i++) {
    const ch = onlyBrackets[i];
    if (openers.has(ch)) {
      stack.push(ch);
    } else {
      const top = stack.pop();
      if (top !== match[ch]) {
        // Mismatch or closing with empty stack
        const expected = top ? ({'(' : ')', '[' : ']', '{' : '}'}[top]) : 'an opener';
        return {
          ok: false,
          onlyBrackets,
          message: `❌ Mismatch at position ${i}: found "${ch}" but expected "${expected}".`
        };
      }
    }
  }

  if (stack.length > 0) {
    return {
      ok: false,
      onlyBrackets,
      message: `❌ There are ${stack.length} unclosed opener(s): "${stack.join('')}".`
    };
  }

  return { ok: true, onlyBrackets, message: '✅ Properly opened and closed.' };
}

// Make available to the page (and for copy in the UI)
window.isValidBrackets = isValidBrackets;
