(() => {
  const root=document.getElementById('haupt-panel');
  const rows=new Map((window.MONSTER_DATA?.classes||[]).map(row=>[row.cls,row]));
  if(!root||!['1A','2A','2B'].every(name=>rows.has(name)))return;

  const supported=['1A','2A','2B'];
  const seedIndices=[1,2,3,5];
  const shownIndices=[1,2,3,4,5,6,8];
  const selectRoot=root.querySelector('.haupt-class-switch');
  const seriesTitle=document.getElementById('haupt-series-title');
  const replicateLabel=document.getElementById('haupt-replicate-label');
  const strip=document.getElementById('haupt-series-strip');
  const seriesLine=document.getElementById('haupt-series-line');
  const faberDisplay=document.getElementById('haupt-faber-display');
  const cancelGrid=document.getElementById('haupt-cancel-grid');
  const seedForm=document.getElementById('haupt-seed-form');
  const derived=document.getElementById('haupt-derived');
  const fixedReplicate=document.getElementById('haupt-replicate-fixed');
  const faberSwitch=root.querySelector('.haupt-order-switch');
  let selected='1A';
  let faberOrder=2;
  let seed={};
  const at=(row,n)=>BigInt(row.coeffs[n-1]);
  const format=value=>value.toLocaleString('en-US');
  const safe=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const numberTeX=value=>value.toString();
  const signedTeX=(value,tail='')=>value===0n?'':`${value<0n?' - ':' + '}${numberTeX(value<0n?-value:value)}${tail}`;
  const square=()=>rows.get('1A');
  const current=()=>rows.get(selected);
  const halfLabel=numerator=>numerator%2n===0n?format(numerator/2n):`${format(numerator)}/2`;
  const seedValues=()=>{
    const values={};
    for(const n of seedIndices){
      const raw=seed[n].trim();
      const input=seedForm.querySelector(`[data-seed="${n}"]`);
      const valid=/^[+-]?\d{1,24}$/.test(raw);
      if(input)input.setAttribute('aria-invalid',String(!valid));
      if(!valid)return null;
      values[n]=BigInt(raw);
    }
    return values;
  };

  function renderSeries(){
    const row=current();
    seriesTitle.innerHTML=`T<sub>${selected}</sub>`;
    replicateLabel.textContent=`${selected} 的二次 replicate → 1A`;
    strip.innerHTML=shownIndices.map(n=>{
      const seedTerm=seedIndices.includes(n);
      return `<div class="haupt-coeff ${seedTerm?'seed':'derived'}"><small>q<sup>${n}</sup> · a<sub>${n}</sub></small><strong>${safe(format(at(row,n)))}</strong><em>${seedTerm?'输入种子':'复制约束'}</em></div>`;
    }).join('');
    clearTypesetMath(seriesLine);
    seriesLine.innerHTML=String.raw`\(T_{\mathrm{${selected}}}(q)=q^{-1}+a_1q+a_2q^2+a_3q^3+\cdots\)`;
    typesetMath(seriesLine);
  }

  function renderSeedForm(){
    seedForm.innerHTML=seedIndices.map(n=>`<label class="haupt-seed-field"><span>a<sub>${n}</sub></span><input type="text" inputmode="numeric" autocomplete="off" spellcheck="false" maxlength="25" data-seed="${n}" aria-label="修改 a${n} 种子" value="${safe(seed[n])}"><small>${n===5?'此项不能由前面三项推出':'可调整的实验输入'}</small></label>`).join('');
  }

  function renderFaber(){
    const a=seedValues();
    if(!a)return;
    clearTypesetMath(faberDisplay);
    if(faberOrder===2){
      const constant=-2n*a[1];
      faberDisplay.innerHTML=`<small>对当前输入种子构造</small>\\[P_2(X)=X^2${signedTeX(constant)}\\]\\[P_2(f(q))=q^{-2}+O(q)\\]`;
      cancelGrid.innerHTML=`<div><small>消去前 · q⁰</small><strong>${safe(format(2n*a[1]))}</strong><em>来自 f²</em></div><div><small>消去后 · q⁰</small><strong>0</strong><em>减去 2a₁</em></div>`;
    }else{
      const linear=-3n*a[1],constant=-3n*a[2];
      faberDisplay.innerHTML=`<small>对当前输入种子构造</small>\\[P_3(X)=X^3${signedTeX(linear,'X')}${signedTeX(constant)}\\]\\[P_3(f(q))=q^{-3}+O(q)\\]`;
      cancelGrid.innerHTML=`<div><small>q⁻¹ 主部</small><strong>${safe(format(3n*a[1]))} → 0</strong><em>减去 3a₁X</em></div><div><small>q⁰ 常数项</small><strong>${safe(format(3n*a[2]))} → 0</strong><em>减去 3a₂</em></div>`;
    }
    typesetMath(faberDisplay);
  }

  function renderDerived(){
    const a=seedValues();
    if(!a){derived.innerHTML='<div class="haupt-derived-error">请输入最多 24 位的整数；负数请用键盘减号 -。计算不会使用浮点数近似。</div>';return;}
    const b1=at(square(),1),b2=at(square(),2);
    const a4Num=a[1]*a[1]+2n*a[3]-b1;
    const a6Num=a4Num+2n*a[1]*a[2];
    const a8Num=2n*a[5]+2n*a[1]*a[3]+a[2]*a[2]-b2;
    const values=[{n:4,num:a4Num,from:'q² · 用 b₁'},{n:6,num:a6Num,from:'q³ · 接着用 a₄'},{n:8,num:a8Num,from:'q⁴ · 用 b₂ 与 a₅'}];
    derived.innerHTML=values.map(({n,num,from})=>{
      const integral=num%2n===0n;
      const same=integral&&num/2n===at(current(),n);
      const state=!integral?'非整数 · 条件失败':same?'与目录吻合':'与目录不同';
      return `<article class="haupt-derived-card"><span>a<sub>${n}</sub> / ${from}</span><strong>${safe(halfLabel(num))}</strong><small>目录值 ${safe(format(at(current(),n)))}</small><em class="${!integral?'fraction':same?'':'off'}">${state}</em></article>`;
    }).join('');
  }

  function renderReplicate(){
    const b=square();
    fixedReplicate.innerHTML=`已知二次 replicate：<strong>f<sup>(2)</sup> = T<sub>1A</sub> = J</strong>。固定参照系数 <strong>b<sub>1</sub> = ${safe(format(at(b,1)))}</strong>、<strong>b<sub>2</sub> = ${safe(format(at(b,2)))}</strong>；调整上方种子时，这两个数保持不变。`;
  }

  function selectClass(name){
    if(!supported.includes(name))return;
    selected=name;
    seed=Object.fromEntries(seedIndices.map(n=>[n,at(current(),n).toString()]));
    for(const button of selectRoot.querySelectorAll('[data-haupt-class]'))button.setAttribute('aria-pressed',String(button.dataset.hauptClass===name));
    renderSeries();renderSeedForm();renderFaber();renderDerived();renderReplicate();
  }

  selectRoot.addEventListener('click',event=>{
    const button=event.target.closest('[data-haupt-class]');
    if(button)selectClass(button.dataset.hauptClass);
  });
  faberSwitch.addEventListener('click',event=>{
    const button=event.target.closest('[data-faber-order]');
    if(!button)return;
    faberOrder=Number(button.dataset.faberOrder);
    for(const item of faberSwitch.querySelectorAll('[data-faber-order]'))item.setAttribute('aria-pressed',String(item===button));
    renderFaber();
  });
  seedForm.addEventListener('input',event=>{
    const input=event.target.closest('[data-seed]');
    if(!input)return;
    seed[Number(input.dataset.seed)]=input.value;
    renderFaber();renderDerived();
  });
  document.getElementById('haupt-reset').addEventListener('click',()=>selectClass(selected));
  selectClass('1A');
  typesetMath(root);
})();
