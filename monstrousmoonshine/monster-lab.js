(() => {
  const data = window.MONSTER_DATA;
  if (!data?.classes?.length) return;

  const classes = data.classes;
  const byClass = new Map(classes.map(row => [row.cls, row]));
  const list = document.getElementById('monster-class-list');
  const detail = document.getElementById('monster-detail');
  const search = document.getElementById('monster-search');
  const matchCount = document.getElementById('monster-match-count');
  const filters = [...document.querySelectorAll('[data-monster-filter]')];
  const compareSelect = document.getElementById('monster-compare-select');
  const compareBody = document.getElementById('monster-compare-body');
  const groupMembers = new Map();
  for (const row of classes) {
    if (!groupMembers.has(row.group)) groupMembers.set(row.group, []);
    groupMembers.get(row.group).push(row.cls);
  }

  let selected = byClass.get('1A') || classes[0];
  let activeFilter = 'all';
  let formulaTerms = 5;
  const defaultTermCount = row => {
    const first = row.coeffs.findIndex(value => value !== '0') + 1;
    return first > 8 ? 12 : first > 5 ? 8 : 5;
  };

  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const formatInteger = value => BigInt(value).toLocaleString('en-US');
  const cleanClassTex = name => name.replace(/^(\d+)([A-Z]+)$/, (_, number, letters) => `${number}\\mathrm{${letters}}`);
  const typeset = element => {
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([element]).catch(() => {});
  };

  function matches(row) {
    if (activeFilter === 'positive' && BigInt(row.coeffs[0]) <= 0n) return false;
    if (activeFilter === 'nonpositive' && BigInt(row.coeffs[0]) > 0n) return false;
    const q = search.value.trim().toLowerCase();
    if (!q) return true;
    return row.cls.toLowerCase().includes(q) || String(row.order) === q || row.group.toLowerCase().includes(q);
  }

  function renderList() {
    const visible = classes.filter(matches);
    matchCount.textContent = `${visible.length} / ${classes.length}`;
    list.innerHTML = visible.length ? visible.map(row => `<button type="button" class="monster-class-row" role="option" data-class="${row.cls}" aria-selected="${row.cls === selected.cls}"><strong>${row.cls}</strong><span>${escapeHTML(row.group)}</span><small>${row.order} 阶</small></button>`).join('') : '<div class="monster-empty">没有匹配的共轭类。试试类名或元素阶数。</div>';
    for (const button of list.querySelectorAll('[data-class]')) {
      button.addEventListener('click', () => selectClass(button.dataset.class));
    }
  }

  function termTex(value, n) {
    const integer = BigInt(value);
    if (!integer) return '';
    const sign = integer < 0n ? '-' : '+';
    const magnitude = integer < 0n ? -integer : integer;
    const coefficient = magnitude === 1n ? '' : String(magnitude);
    return `${sign}${coefficient}q${n === 1 ? '' : `^{${n}}`}`;
  }

  function formulaTex(row) {
    const pieces = [];
    for (let n = 1; n <= Math.min(formulaTerms, row.coeffs.length); n++) {
      const item = termTex(row.coeffs[n - 1], n);
      if (item) pieces.push(item);
    }
    const head = pieces.slice(0, 3).join('\\,');
    const tail = pieces.slice(3).join('\\,');
    return `\\[\\begin{aligned}T_{${cleanClassTex(row.cls)}}(\\tau)&=q^{-1}\\,${head}${tail ? `\\\\&\\quad ${tail}` : ''}\\,+\\cdots\\end{aligned}\\]`;
  }

  function magnitudeLog(value) {
    const digits = String(value).replace('-', '');
    if (digits === '0') return 0;
    if (digits.length <= 12) return Math.log10(Number(digits) + 1);
    return digits.length - 12 + Math.log10(Number(digits.slice(0, 12)));
  }

  function spectrum(row) {
    const values = row.coeffs.slice(0, 12);
    const max = Math.max(1, ...values.map(magnitudeLog));
    return `<div class="monster-spectrum" role="img" aria-label="${row.cls} 的前 ${values.length} 个系数：绿色为正，金色为负；高度表示绝对值的对数">${values.map((value, index) => {
      const negative = String(value).startsWith('-');
      const zero = String(value) === '0';
      const height = zero ? 2 : Math.max(4, Math.round(66 * magnitudeLog(value) / max));
      return `<div class="monster-bar-cell" title="q^${index + 1}: ${escapeHTML(formatInteger(value))}"><span class="monster-bar${negative ? ' is-negative' : ''}${zero ? ' is-zero' : ''}" style="height:${height}px"></span><small>${index + 1}</small></div>`;
    }).join('')}</div><p class="monster-spectrum-legend">横轴为 q 的幂次；柱高采用 |系数| 的对数刻度，颜色区分正负。悬停可看精确值。</p>`;
  }

  function renderDetail() {
    const row = selected;
    const same = groupMembers.get(row.group).filter(name => name !== row.cls);
    const source = row.oeis ? `<a href="https://oeis.org/${row.oeis}" target="_blank" rel="noopener">OEIS ${row.oeis} ↗</a>${row.dilation > 1 ? `（按 q<sup>${row.dilation}</sup> 展开幂次）` : ''}` : 'OEIS 索引';
    const firstNonzero = row.coeffs.findIndex(value => value !== '0');
    const traceNote = firstNonzero > 0
      ? `<strong>q¹ 系数为 0。</strong>本窗口首次非零迹在 q<sup>${firstNonzero + 1}</sup>：${formatInteger(row.coeffs[firstNonzero])}，对应 <i>V</i><sup>♮</sup><sub>${firstNonzero + 2}</sub>。`
      : row.cls === '1A'
        ? `<strong>q¹ 系数 ${formatInteger(row.coeffs[0])}</strong>，即 Griess 代数 <i>V</i><sup>♮</sup><sub>2</sub> 的维数。`
        : `<strong>q¹ 系数 ${formatInteger(row.coeffs[0])}</strong>，即 ${row.cls} 在 Griess 代数 <i>V</i><sup>♮</sup><sub>2</sub> 上的迹。`;
    detail.innerHTML = `
      <div class="monster-detail-top"><div><span class="monster-detail-kicker">CONJUGACY CLASS</span><h2>${row.cls} <span aria-hidden="true">·</span> ${escapeHTML(row.group)}</h2></div><div class="monster-detail-tagset"><span class="monster-tag">${row.order} 阶</span></div></div>
      <section class="monster-detail-section"><h3>归一化 McKay–Thompson 级数</h3><div class="monster-formula" id="monster-formula">${formulaTex(row)}</div><div class="monster-formula-settings"><label>展示至 <select id="monster-term-count"><option value="5">q⁵</option><option value="8">q⁸</option><option value="12">q¹²</option></select></label></div><p class="monster-trace-note">${traceNote}</p></section>
      <section class="monster-detail-section"><h3>前 12 层的迹 · 对数光谱</h3>${spectrum(row)}</section>
      <section class="monster-detail-section"><h3>精确系数</h3><div class="monster-coeff-grid">${row.coeffs.slice(0, 12).map((value, index) => `<div class="monster-coeff${String(value).startsWith('-') ? ' is-negative' : ''}"><span>q^${index + 1}</span><strong>${formatInteger(value)}</strong></div>`).join('')}</div></section>
      <div class="monster-detail-footer"><p>系数记录：${source}<br>同级数的类：${same.length ? same.map(name => name).join('、') : '没有其他类'}</p>${same.length ? `<div class="monster-related">${same.map(name => `<button type="button" data-related-class="${name}" aria-label="查看 ${name} 类">${name} ↗</button>`).join('')}</div>` : ''}</div>`;
    const termSelect = document.getElementById('monster-term-count');
    termSelect.value = String(formulaTerms);
    termSelect.addEventListener('change', () => {
      formulaTerms = Number(termSelect.value);
      const formula = document.getElementById('monster-formula');
      formula.innerHTML = formulaTex(selected);
      typeset(formula);
    });
    for (const button of detail.querySelectorAll('[data-related-class]')) button.addEventListener('click', () => selectClass(button.dataset.relatedClass));
    typeset(detail);
  }

  function renderCompare() {
    const other = byClass.get(compareSelect.value) || byClass.get('2A') || classes[1];
    const first = selected;
    const same = first.group === other.group;
    compareBody.innerHTML = `<p class="monster-compare-intro">${first.cls} 与 ${other.cls}${same ? ' 属于同一条 McKay–Thompson 级数；逐项迹相同。' : ' 的前几层迹并排展示；同阶也不一定同级数。'}</p><table class="monster-compare-table"><thead><tr><th>幂次</th><th>${first.cls}</th><th>${other.cls}</th></tr></thead><tbody>${first.coeffs.slice(0, 8).map((value, index) => `<tr><td>q<sup>${index + 1}</sup></td><td>${formatInteger(value)}</td><td class="${value === other.coeffs[index] ? '' : 'monster-compare-different'}">${formatInteger(other.coeffs[index])}</td></tr>`).join('')}</tbody></table>`;
  }

  function selectClass(name) {
    const next = byClass.get(name);
    if (!next) return;
    selected = next;
    formulaTerms = defaultTermCount(next);
    renderList();
    renderDetail();
    renderCompare();
  }

  compareSelect.innerHTML = classes.map(row => `<option value="${row.cls}">${row.cls} · ${escapeHTML(row.group)}</option>`).join('');
  compareSelect.value = '2A';
  compareSelect.addEventListener('change', renderCompare);
  search.addEventListener('input', renderList);
  for (const button of filters) button.addEventListener('click', () => {
    activeFilter = button.dataset.monsterFilter;
    for (const item of filters) item.setAttribute('aria-pressed', String(item === button));
    renderList();
  });
  list.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    const options = [...list.querySelectorAll('[data-class]')];
    const index = options.indexOf(document.activeElement);
    const next = options[index + (event.key === 'ArrowDown' ? 1 : -1)];
    if (next) { next.focus(); event.preventDefault(); }
  });
  window.addEventListener('mathjax-ready', () => typeset(detail));
  window.addEventListener('monster-select-class', event => {
    const name=event.detail?.cls;
    if(byClass.has(name))selectClass(name);
  });
  renderList();
  renderDetail();
  renderCompare();
})();
