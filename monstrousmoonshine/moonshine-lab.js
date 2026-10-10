/* The two orbifold sectors are expanded independently and checked against
   the 1A and 2B series shipped with the conjugacy-class atlas. */
(() => {
  const host = document.getElementById('module-layers');
  if (!host) return;
  const table = document.querySelector('#module-table tbody');
  const readout = document.getElementById('module-readout');
  const representations = document.getElementById('module-representation-list');
  const data = window.MONSTER_DATA?.classes || [];
  const identity = data.find(item => item.cls === '1A');
  const involution = data.find(item => item.cls === '2B');
  if (!identity || !involution) {
    readout.textContent = '分次数据未加载。';
    return;
  }

  const N = Math.min(12, identity.coeffs.length, involution.coeffs.length);
  const choose = (top, bottom) => {
    let answer = 1n;
    for (let j = 1; j <= bottom; j++) answer = answer * BigInt(top - j + 1) / BigInt(j);
    return answer;
  };
  // [x^r](1+x)^(-24) = (-1)^r binomial(23+r, r).
  function oscillatorProduct(limit, halfModes) {
    const values = Array(limit + 1).fill(0n);
    values[0] = 1n;
    for (let mode = 1; mode <= limit; mode += halfModes ? 2 : 1) {
      const next = Array(limit + 1).fill(0n);
      for (let power = 0; power * mode <= limit; power++) {
        const factor = choose(23 + power, power) * (halfModes || power % 2 === 0 ? 1n : -1n);
        for (let degree = 0; degree + power * mode <= limit; degree++) {
          next[degree + power * mode] += values[degree] * factor;
        }
      }
      for (let degree = 0; degree <= limit; degree++) values[degree] = next[degree];
    }
    return values;
  }
  const signed = oscillatorProduct(N + 1, false);
  const twistedModes = oscillatorProduct(2 * N - 1, true);
  const fmt = value => BigInt(value).toLocaleString('en-US');
  const entries = [];
  for (let k = 0; k <= N + 1; k++) {
    const n = k - 1;
    const lattice = n === -1 ? 1n : n === 0 ? 24n : BigInt(identity.coeffs[n - 1]);
    const theta = signed[k];
    const untwisted = (lattice + theta) / 2n;
    const twisted = n < 1 ? 0n : 4096n * twistedModes[2 * n - 1];
    const total = untwisted + twisted;
    const trace = untwisted - twisted;
    const expectedTotal = n === -1 ? 1n : n === 0 ? 0n : BigInt(identity.coeffs[n - 1]);
    const expectedTrace = n === -1 ? 1n : n === 0 ? 0n : BigInt(involution.coeffs[n - 1]);
    entries.push({ k, n, untwisted, twisted, total, trace,
      verified: total === expectedTotal && trace === expectedTrace });
  }

  const decomposition = {
    0: { label: 'χ₀', parts: [[1, 0]] },
    1: { label: '零空间', parts: [] },
    2: { label: 'χ₀ + χ₁', parts: [[1, 0], [1, 1]] },
    3: { label: 'χ₀ + χ₁ + χ₂', parts: [[1, 0], [1, 1], [1, 2]] },
    4: { label: '2χ₀ + 2χ₁ + χ₂ + χ₃', parts: [[2, 0], [2, 1], [1, 2], [1, 3]] },
    5: { label: '2χ₀ + 3χ₁ + 2χ₂ + χ₃ + χ₅', parts: [[2, 0], [3, 1], [2, 2], [1, 3], [1, 5]], dimensionOnly: true },
    6: { label: '4χ₀ + 5χ₁ + 3χ₂ + 2χ₃ + χ₄ + χ₅ + χ₆', parts: [[4, 0], [5, 1], [3, 2], [2, 3], [1, 4], [1, 5], [1, 6]] }
  };
  const irrepDimensions = [1n, 196883n, 21296876n, 842609326n, 18538750076n, 19360062527n, 293553734298n];
  const note = {
    0: '真空向量属于未扭曲不变扇区，给出 q⁻¹ 的首项。',
    1: 'Leech 格没有范数 2 的根；24 个权 1 振子在格反演下为奇。两个扇区都没有权 1 态，因此 J 的常数项是 0。',
    2: '未扭曲部分的 98,580 = 98,280 + 300：前者来自 196,560 个最短格向量成对取不变组合，后者是 24 个振子的二次态。扭曲部分的 98,304 = 24 × 4,096，来自 24 个半整数振子作用于 4,096 维扭曲基态。'
  };

  function renderLayers() {
    const maxDigits = entries.at(-1).total.toString().length;
    host.innerHTML = entries.map(entry => {
      const magnitude = entry.total === 0n ? 0 : Math.max(4, Math.round(entry.total.toString().length / maxDigits * 100));
      return `<button type="button" class="module-layer" role="option" aria-selected="false" data-weight="${entry.k}" style="--layer-fill:${magnitude}%"><span class="module-layer-index">${String(entry.k).padStart(2, '0')}</span><span class="module-layer-middle"><strong>V<sup>♮</sup><sub>${entry.k}</sub></strong><i></i></span><span class="module-layer-total">${fmt(entry.total)}</span><span class="module-layer-arrow">↗</span></button>`;
    }).join('');
  }
  function renderTable() {
    table.innerHTML = entries.map(entry => `<tr data-row-weight="${entry.k}"><th scope="row">${entry.k} <small>q<sup>${entry.n}</sup></small></th><td>${fmt(entry.untwisted)}</td><td>${fmt(entry.twisted)}</td><td>${fmt(entry.total)}</td><td>${fmt(entry.trace)}</td></tr>`).join('');
  }
  function renderRepresentations() {
    representations.innerHTML = [0, 1, 2, 3, 4, 5, 6].map(k => {
      const item = decomposition[k];
      const sum = item.parts.reduce((acc, [multiplicity, irrep]) => acc + BigInt(multiplicity) * irrepDimensions[irrep], 0n);
      return `<button type="button" data-rep-weight="${k}" aria-label="查看权重 ${k} 的分解"><span>V<sup>♮</sup><sub>${k}</sub></span><strong>${item.label}</strong><small>${fmt(sum)} 维 ${item.dimensionOnly ? '· 仅维数' : sum === entries[k].total ? '✓' : '≠'}</small></button>`;
    }).join('') + `<div class="module-irrep-key"><span>本页 χ<sub>i</sub> 的维数：</span>${irrepDimensions.map((dimension, i) => `<span>χ<sub>${i}</sub> = ${fmt(dimension)}</span>`).join('')}</div>`;
  }
  function select(k, scroll = false) {
    const entry = entries[k];
    if (!entry) return;
    for (const button of host.querySelectorAll('[data-weight]')) button.setAttribute('aria-selected', String(Number(button.dataset.weight) === k));
    for (const row of table.querySelectorAll('[data-row-weight]')) row.classList.toggle('is-selected', Number(row.dataset.rowWeight) === k);
    for (const button of representations.querySelectorAll('[data-rep-weight]')) button.classList.toggle('is-selected', Number(button.dataset.repWeight) === k);
    if (scroll) host.querySelector(`[data-weight="${k}"]`)?.scrollIntoView({block:'nearest'});
    const a = entry.untwisted, b = entry.twisted;
    const aPct = entry.total ? Number(a * 10000n / entry.total) / 100 : 0;
    const bPct = entry.total ? 100 - aPct : 0;
    const special = note[k];
    const rep = decomposition[k];
    if (window.clearTypesetMath) clearTypesetMath(readout);
    readout.innerHTML = `<div class="module-readout-top"><span class="eyebrow">SELECTED GRADED PIECE</span>${entry.verified ? '' : '<span class="module-verified">⚠ 与级数不一致</span>'}</div><div class="module-weight"><div><small>共形权重</small><strong>${k}</strong></div><div class="module-weight-formula">\\(V^\\natural_{${k}}\\)<span>对应 \\(q^{${entry.n}}\\)</span></div></div><div class="module-total"><small>DIMENSION</small><strong>${fmt(entry.total)}</strong></div><div class="module-sector-diagram"><div class="module-sector-head"><span>两个扇区</span><span>相加 → J</span></div><div class="module-sector-track">${entry.total ? `<span style="width:${aPct}%"></span><span style="width:${bPct}%"></span>` : `<em>这一层为空</em>`}</div><div class="module-sector-values"><div><i class="module-dot-a"></i><span>未扭曲不变部分 χ<sup>+</sup></span><strong>${fmt(a)}</strong></div><div><i class="module-dot-b"></i><span>扭曲不变部分 χ<sup>T,+</sup></span><strong>${fmt(b)}</strong></div></div></div><div class="module-operations"><div><span>1A · 求和</span><strong>${fmt(a)} + ${fmt(b)} = ${fmt(entry.total)}</strong></div><div><span>2B · 求差</span><strong>${fmt(a)} − ${fmt(b)} = ${fmt(entry.trace)}</strong></div></div>${special ? `<p class="module-explain">${special}</p>` : ''}${rep ? `<div class="module-rep-readout"><small>${rep.dimensionOnly ? '不可约维数的一个等式，非表示断言' : '魔群表示的低权分解'}</small><span>${rep.label}</span></div>` : ''}`;
    if (window.typesetMath) typesetMath(readout);
  }
  renderLayers();
  renderTable();
  renderRepresentations();
  host.addEventListener('click', event => {
    const button = event.target.closest('[data-weight]');
    if (button) select(Number(button.dataset.weight));
  });
  host.addEventListener('keydown', event => {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    const current = Number(event.target.closest('[data-weight]')?.dataset.weight ?? 2);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? N + 1 : Math.max(0, Math.min(N + 1, current + (event.key === 'ArrowDown' ? 1 : -1)));
    select(next, true);
    host.querySelector(`[data-weight="${next}"]`)?.focus();
    event.preventDefault();
  });
  table.addEventListener('click', event => {
    const row = event.target.closest('[data-row-weight]');
    if (row) select(Number(row.dataset.rowWeight), true);
  });
  representations.addEventListener('click', event => {
    const button = event.target.closest('[data-rep-weight]');
    if (button) select(Number(button.dataset.repWeight), true);
  });
  select(2);
  window.MOONSHINE_LAB_CHECK = { checked: entries.length, failures: entries.filter(entry => !entry.verified).map(entry => entry.k) };
})();
