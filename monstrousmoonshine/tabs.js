const pageTabs=[...document.querySelectorAll('.app-tabs [data-tab]')];
const pagePanels=[...document.querySelectorAll('.app-main [data-panel]')];
const tabNames=pageTabs.map(tab=>tab.dataset.tab);
const legacyTabs={proof:'tree','root-lab':'roots',workshop:'module'};
let currentTab='tree';

function activatePageTab(name,{focus=false,updateHash=false}={}){
  if(!tabNames.includes(name))return;
  currentTab=name;
  for(const tab of pageTabs){
    const active=tab.dataset.tab===name;
    tab.setAttribute('aria-selected',String(active));
    tab.tabIndex=active?0:-1;
    if(active){
      if(focus)tab.focus();
      tab.scrollIntoView({block:'nearest',inline:'nearest'});
    }
  }
  for(const panel of pagePanels){
    const active=panel.dataset.panel===name;
    panel.hidden=!active;
    panel.classList.toggle('is-active',active);
  }
  if(updateHash&&location.hash!==`#${name}`)history.pushState(null,'',`#${name}`);
  if(name==='tree')requestAnimationFrame(()=>window.dispatchEvent(new Event('resize')));
}

function tabFromHash(){
  const value=decodeURIComponent(location.hash.slice(1));
  if(legacyTabs[value])history.replaceState(null,'',`#${legacyTabs[value]}`);
  return legacyTabs[value]||value;
}

document.querySelector('.app-tabs').addEventListener('click',event=>{
  const tab=event.target.closest('[data-tab]');
  if(tab)activatePageTab(tab.dataset.tab,{updateHash:true});
});
document.querySelector('.app-tabs').addEventListener('keydown',event=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  const index=tabNames.indexOf(currentTab);
  const next=event.key==='Home'?0:event.key==='End'?tabNames.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabNames.length)%tabNames.length;
  activatePageTab(tabNames[next],{focus:true,updateHash:true});
  event.preventDefault();
});
window.addEventListener('hashchange',()=>activatePageTab(tabFromHash()));
window.addEventListener('popstate',()=>activatePageTab(tabFromHash()));
activatePageTab(tabNames.includes(tabFromHash())?tabFromHash():'tree');
document.querySelector('.app-main').addEventListener('click',event=>{
  const link=event.target.closest('[data-go-tab]');
  if(!link)return;
  activatePageTab(link.dataset.goTab,{updateHash:true});
  if(link.dataset.goNode&&link.dataset.goTab==='tree'){
    requestAnimationFrame(()=>focusGraph(link.dataset.goNode));
  }
});
