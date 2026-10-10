(() => {
  const data=window.HAUPT_CATALOG;
  const root=document.querySelector('.haupt-atlas');
  if(!root||!data?.entries||data.entries.length!==328)return;
  const list=document.getElementById('haupt-atlas-list');
  const detail=document.getElementById('haupt-atlas-detail');
  const search=document.getElementById('haupt-atlas-search');
  const count=document.getElementById('haupt-atlas-count');
  const pageLabel=document.getElementById('haupt-atlas-page');
  const prev=document.getElementById('haupt-atlas-prev');
  const next=document.getElementById('haupt-atlas-next');
  const sort=document.getElementById('haupt-atlas-sort');
  const filters=[...root.querySelectorAll('[data-haupt-filter]')];
  const byKey=new Map(data.entries.map(row=>[`${row.kind}:${row.id}`,row]));
  const collator=new Intl.Collator('en',{numeric:true,sensitivity:'case'});
  const pageSize=24;
  let active='all',page=0,selected=byKey.get('monster:1A')||data.entries[0];
  const escapeHTML=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const formatInt=value=>BigInt(value).toLocaleString('en-US');
  const groupName=row=>row.cumminsGroup?`${row.cumminsGroup.slice(0,-1)}⁰`:'—';
  const groupNote=row=>row.kind==='monster'
    ? `Conway–Norton：${escapeHTML(row.moonshineGroup)}`
    : row.translatedPartner
      ? `由 ${escapeHTML(row.translatedFrom)} 的周期平移得到；群在同一等价类中。`
      : '本条就是表中选定的代表函数。';
  const levelNote=row=>row.kind==='monster'
    ? '由 Conway–Norton 的 n|h 记法取 nh；这里不声称它是最小级数。'
    : row.translatedPartner
      ? '从代表元的周期平移推出的确定子群；级数可能不是最小值。'
      : 'Cummins 表 3 为此代表函数给出的最小 Γ₀ 级数。';
  const category=row=>row.kind==='monster'?'魔群月光':row.kind==='nonmonster'?'非魔群主模函数':'退化级数';
  const asKey=row=>`${row.kind}:${row.id}`;
  const searchText=row=>[row.id,row.kind,row.cumminsGroup||'',groupName(row),row.gamma0Level||'',row.gamma0Level?`γ0(${row.gamma0Level})`:'',row.moonshineGroup||'',row.oeis||'',...(row.classes||[])].join(' ').toLowerCase();
  const normalizeQuery=s=>s.trim().toLowerCase().replace(/γ|Γ/g,'γ').replace(/₀|_0/g,'0').replace(/⁰/g,'0').replace(/\s+/g,'');

  function visibleRows(){
    const q=normalizeQuery(search.value);
    const raw=search.value.trim();
    const allowed=row=>active==='all'||row.kind===active;
    const exact=raw?data.entries.filter(row=>allowed(row)&&(row.id===raw||(row.classes||[]).includes(raw))):[];
    const results=exact.length?exact:data.entries.filter(row=>allowed(row)&&(!q||normalizeQuery(searchText(row)).includes(q)));
    results.sort((a,b)=>{
      if(raw){
        const priority=row=>row.id===raw?0:row.id.toLowerCase()===raw.toLowerCase()?1:(row.classes||[]).includes(raw)?2:3;
        const p=priority(a)-priority(b);
        if(p)return p;
      }
      if(sort.value==='level'){
        const d=(a.gamma0Level??Infinity)-(b.gamma0Level??Infinity);
        if(d)return d;
      }
      const na=parseInt(a.id,10),nb=parseInt(b.id,10);
      if(na!==nb)return na-nb;
      if(a.kind!==b.kind)return a.kind==='monster'?-1:b.kind==='monster'?1:0;
      return collator.compare(a.id,b.id);
    });
    return results;
  }

  function renderList(){
    const rows=visibleRows();
    const pages=Math.max(1,Math.ceil(rows.length/pageSize));
    page=Math.min(page,pages-1);
    const slice=rows.slice(page*pageSize,(page+1)*pageSize);
    if(slice.length&&!slice.includes(selected))selected=slice[0];
    count.textContent=`${rows.length} / 328 条`;
    pageLabel.textContent=`${page+1} / ${pages}`;
    prev.disabled=page===0;
    next.disabled=page>=pages-1;
    list.innerHTML=slice.length?slice.map(row=>{
      const subtitle=row.kind==='fiction'?'无主模函数群':`Γ₀(${row.gamma0Level}) · ${groupName(row)}`;
      const members=row.kind==='monster'?`${row.classes.length} 个魔群类`:`a₁=${row.seeds[0]}`;
      return `<button type="button" role="option" class="haupt-atlas-item" data-haupt-key="${asKey(row)}" aria-selected="${row===selected}"><strong>${escapeHTML(row.id)}</strong><span>${escapeHTML(subtitle)}</span><small>${escapeHTML(members)}</small></button>`;
    }).join(''):'<div class="haupt-atlas-empty">没有匹配项。可以搜索函数标签、魔群共轭类、Cummins 群标签或 Γ₀ 级数。</div>';
    renderDetail();
  }

  function signedTerm(value,n){
    const v=BigInt(value);
    if(v===0n)return '';
    const sign=v<0n?'-':'+';
    const magnitude=v<0n?-v:v;
    return `${sign}${magnitude===1n?'':magnitude.toString()}q${n===1?'':`^{${n}}`}`;
  }
  function formula(row){
    if(row.kind==='fiction')return `\\[f(q)=q^{-1}${signedTerm(row.seeds[0],1)}\\]`;
    if(row.kind==='monster'){
      const terms=row.coeffs.slice(0,5).map((v,i)=>signedTerm(v,i+1)).filter(Boolean).join('\\,');
      return `\\[T_{\\mathrm{${row.id}}}(q)=q^{-1}\\,${terms}\\,+\\cdots\\]`;
    }
    const a=row.seeds;
    const first=[1,2,3].map((n,i)=>signedTerm(a[i],n)).filter(Boolean).join('\\,');
    const fifth=signedTerm(a[3],5);
    return fifth
      ? `\\[f(q)=q^{-1}\\,${first}\\,+\\cdots\\,${fifth}\\,+\\cdots\\]`
      : `\\[f(q)=q^{-1}\\,${first}\\,+\\cdots\\]`;
  }

  function renderDetail(){
    const row=selected;
    if(!row){detail.innerHTML='<p>选择一条函数查看详细信息。</p>';return;}
    clearTypesetMath(detail);
    const groupGrid=row.kind==='fiction'
      ? `<div class="haupt-atlas-group-grid"><div><span>固定群</span><strong>无</strong><small>这条退化形式不对应 genus-zero Hauptmodul。</small></div><div><span>全级数</span><strong>q⁻¹${row.seeds[0]==='0'?'':row.seeds[0]==='1'?'+q':'−q'}</strong><small>只有显示的非零项。</small></div></div>`
      : `<div class="haupt-atlas-group-grid"><div><span>Cummins 等价类代表群</span><strong>${escapeHTML(groupName(row))}</strong><small>${groupNote(row)}</small></div><div><span>本函数包含的同余子群</span><strong>Γ₀(${row.gamma0Level})</strong><small>${levelNote(row)}</small></div></div>`;
    const seedGrid=[1,2,3,5].map((n,i)=>`<div><span>a<sub>${n}</sub></span><strong>${escapeHTML(formatInt(row.seeds[i]))}</strong></div>`).join('');
    const members=row.kind==='monster'?`<div class="haupt-atlas-detail-block haupt-atlas-classes"><span>对应的魔群共轭类 · ${row.classes.length} 个</span><div class="haupt-atlas-class-tags">${row.classes.map(cls=>`<button type="button" data-haupt-monster-class="${cls}" title="在魔群探索中查看 ${cls}">${cls} ↗</button>`).join('')}</div></div>`:'';
    const source=row.kind==='monster'
      ? `<a href="https://ftp.gwdg.de/pub/EMIS/journals/EM/expmath/volumes/13/13.3/cummins/cumminstables.pdf" target="_blank" rel="noopener">Cummins 附表 3</a>，PDF 第 ${row.groupSourcePage} 页${row.oeis?` · <a href="https://oeis.org/${row.oeis}" target="_blank" rel="noopener">OEIS ${row.oeis}</a>`:''}`
      : `<a href="https://oeis.org/A007242/a007242_1.pdf" target="_blank" rel="noopener">ACMS 表</a>，论文第 ${row.acmsPage} 页${row.kind==='fiction'?'':` · <a href="https://ftp.gwdg.de/pub/EMIS/journals/EM/expmath/volumes/13/13.3/cummins/cumminstables.pdf" target="_blank" rel="noopener">Cummins 附表 3</a>，PDF 第 ${row.groupSourcePage} 页`}`;
    const relation=row.translatedPartner
      ? String.raw`<div class="haupt-atlas-detail-block haupt-atlas-relation"><span>与代表函数的关系</span><p>${escapeHTML(row.id)} 是 ${escapeHTML(row.translatedFrom)} 的平移伙伴。表中周期 \(p=${row.period}\)；将 \(\tau\) 平移 \(1/(2p)\) 并重新归一化首项，可得到两者的系数符号关系。</p></div>`
      : '';
    detail.innerHTML=`<div class="haupt-atlas-detail-top"><div><span class="haupt-atlas-detail-kicker">${row.kind==='monster'?'MCKAY–THOMPSON SERIES':row.kind==='fiction'?'MODULAR FICTION':'ACMS NON-MONSTROUS SERIES'}</span><h3>${escapeHTML(row.id)}</h3></div><span class="haupt-atlas-detail-badge ${row.kind==='fiction'?'is-fiction':''}">${category(row)}</span></div><p class="haupt-atlas-detail-summary">${row.kind==='monster'?'同一函数可由多个魔群元素类给出；下方列出全部对应类。':row.kind==='fiction'?'ACMS 分类中的形式解；它不生成模曲线的函数域。':'ACMS 分类中的非魔群函数。四个种子与群标签分别取自两份原始表。'}</p>${groupGrid}${relation}<div class="haupt-atlas-detail-block haupt-atlas-seeds"><span>四个决定位置 · 级数系数</span><div class="haupt-atlas-seed-grid">${seedGrid}</div></div><div class="haupt-atlas-detail-block haupt-atlas-series"><span>${row.kind==='monster'?'级数前五项':'已列出的级数位置'}</span><div class="haupt-atlas-series-formula">${formula(row)}</div>${row.kind==='nonmonster'?String.raw`<p>这里只展示 ACMS 给出的 \(a_1,a_2,a_3,a_5\)；省略号中的 \(a_4\) 等系数需要复制关系计算，不能按零读取。</p>`:''}</div>${members}<p class="haupt-atlas-detail-source">来源：${source}</p>`;
    typesetMath(detail);
  }

  list.addEventListener('click',event=>{
    const button=event.target.closest('[data-haupt-key]');
    if(!button)return;
    selected=byKey.get(button.dataset.hauptKey)||selected;
    renderList();
    if(matchMedia('(max-width:760px)').matches)detail.scrollIntoView({behavior:'smooth',block:'start'});
  });
  detail.addEventListener('click',event=>{
    const button=event.target.closest('[data-haupt-monster-class]');
    if(!button)return;
    document.querySelector('[data-tab="monster"]')?.click();
    window.dispatchEvent(new CustomEvent('monster-select-class',{detail:{cls:button.dataset.hauptMonsterClass}}));
  });
  list.addEventListener('keydown',event=>{
    if(!['ArrowDown','ArrowUp'].includes(event.key))return;
    const options=[...list.querySelectorAll('[data-haupt-key]')];
    const i=options.indexOf(document.activeElement);
    const target=options[i+(event.key==='ArrowDown'?1:-1)];
    if(target){target.focus();event.preventDefault();}
  });
  filters.forEach(button=>button.addEventListener('click',()=>{
    active=button.dataset.hauptFilter;page=0;
    filters.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    renderList();
  }));
  search.addEventListener('input',()=>{page=0;renderList();});
  sort.addEventListener('change',()=>{page=0;renderList();});
  prev.addEventListener('click',()=>{if(page>0){page--;renderList();}});
  next.addEventListener('click',()=>{page++;renderList();});
  window.addEventListener('mathjax-ready',()=>typesetMath(detail));
  renderList();
})();
