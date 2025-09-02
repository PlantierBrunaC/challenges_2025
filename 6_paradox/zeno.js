(function () {
  const $ = (s) => document.querySelector(s);

  const achillesEl = $('#achilles');
  const tortoiseEl = $('#tortoise');
  const trackEl = $('#track');
  const finishEl = $('#finish');
  const logEl = $('#log');

  const startBtn = $('#startBtn');
  const stopBtn = $('#stopBtn');
  const resetBtn = $('#resetBtn');

  const vAInput = $('#vA');
  const vTInput = $('#vT');
  const leadInput = $('#lead');
  const trackLenInput = $('#trackLen');

  let animId = null;
  let running = false;
  let state = null;

  function pxPerMeter(trackMeters) {
    const pad = 16; // inner padding
    const width = trackEl.clientWidth - pad * 2;
    return width / trackMeters;
  }

  function setRunningUI(isRunning) {
    running = isRunning;
    startBtn.disabled = isRunning;
    stopBtn.disabled = !isRunning;
  }

  function resetPositions() {
    const L = Number(trackLenInput.value);
    const scale = pxPerMeter(L);

    const A0 = 0;
    const T0 = Math.max(0, Math.min(L - 1, Number(leadInput.value)));

    achillesEl.style.left = (A0 * scale) + 'px';
    tortoiseEl.style.left = (T0 * scale) + 'px';
    finishEl.style.left = (L * scale) + 'px';
  }

  function initState() {
    const L = Number(trackLenInput.value);
    const vA = Number(vAInput.value);
    const vT = Number(vTInput.value);
    const lead = Number(leadInput.value);

    const A0 = 0;
    const T0 = Math.max(0, Math.min(L - 1, lead));

    return {
      L, vA, vT,
      Apos: A0,
      Tpos: T0,
      segTarget: T0,  // Achilles aims where tortoise currently is
      step: 0,
      t0: null,
      segDuration: null,
      segA0: A0,
      segT0: T0,
      epsilon: 0.001,
      maxSteps: 50
    };
  }

  function linearly(from, to, u) {
    return from + (to - from) * u;
  }

  function startSegment(now) {
    const { vA, vT, Apos, Tpos } = state;
    const gap = Math.max(0, Tpos - Apos);
    const timeToOldTortoise = gap / Math.max(vA, 1e-9);

    state.segA0 = Apos;
    state.segT0 = Tpos;
    state.segTarget = Tpos;
    state.t0 = now;
    state.segDuration = timeToOldTortoise;
  }

  function update(now) {
    const { L, vA, vT } = state;
    const scale = pxPerMeter(L);

    if (state.t0 === null) startSegment(now);

    const elapsed = (now - state.t0) / 1000;

    let u = Math.min(1, elapsed / Math.max(state.segDuration, 1e-9));

    const A = linearly(state.segA0, state.segTarget, u);
    const T = state.segT0 + vT * elapsed;

    const Apx = Math.min(L, A) * scale;
    const Tpx = Math.min(L, T) * scale;

    achillesEl.style.left = Apx + 'px';
    tortoiseEl.style.left = Tpx + 'px';

    if (u >= 1 - state.epsilon) {
      state.Apos = state.segTarget;
      state.Tpos = Math.min(T, L);

      state.step += 1;
      logEl.textContent += `Step ${state.step}: Achilles to ${state.Apos.toFixed(3)} m; Tortoise at ${state.Tpos.toFixed(3)} m\n`;

      if (state.Apos + state.epsilon >= state.Tpos || state.step >= state.maxSteps || state.Tpos >= L) {
        setRunningUI(false);
        animId = null;
        return;
      }

      state.t0 = null;
      startSegment(now);
    }

    if (running) {
      animId = requestAnimationFrame(update);
    }
  }

  function start() {
    if (running) return;

    const vA = Number(vAInput.value);
    const vT = Number(vTInput.value);
    const L = Number(trackLenInput.value);
    const lead = Number(leadInput.value);

    if (!(vA > 0 && vT >= 0 && vA > vT && L > 0 && lead >= 0)) {
      logEl.textContent = 'Please use: vA > vT ≥ 0, length > 0, head start ≥ 0.';
      return;
    }

    logEl.textContent = '';
    state = initState();
    setRunningUI(true);
    animId = requestAnimationFrame(update);
  }

  function stop() {
    if (!running) return;
    setRunningUI(false);
    if (animId) cancelAnimationFrame(animId);
    animId = null;
  }

  function reset() {
    stop();
    resetPositions();
    logEl.textContent = '';
  }

  startBtn.addEventListener('click', start);
  stopBtn.addEventListener('click', stop);
  resetBtn.addEventListener('click', reset);

  window.addEventListener('resize', resetPositions);
  window.addEventListener('DOMContentLoaded', resetPositions);
})();
