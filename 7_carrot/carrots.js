function getMaxValue(carrotTypes, capacity) {
  const n = carrotTypes.length;
  const dp = Array(capacity + 1).fill(0);
  const choice = Array(capacity + 1).fill(-1);

  for (let w = 1; w <= capacity; w++) {
    let best = 0, bestIdx = -1;
    for (let i = 0; i < n; i++) {
      const { kg, price } = carrotTypes[i];
      if (kg <= w) {
        const cand = dp[w - kg] + price;
        if (cand > best) {
          best = cand;
          bestIdx = i;
        }
      }
    }
    dp[w] = best;
    choice[w] = bestIdx;
  }

  const counts = Array(n).fill(0);
  let w = capacity;
  while (w > 0 && choice[w] !== -1) {
    const i = choice[w];
    counts[i]++;
    w -= carrotTypes[i].kg;
  }

  return { maxValue: dp[capacity], counts };
}

window.getMaxValue = getMaxValue;
