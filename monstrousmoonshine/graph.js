/* The diagram is a directed acyclic proof map.  A branch may merge with another:
   that is the mathematical point of the picture, rather than a literal graph-theory tree. */
const GRAPH_WIDTH = 1010;
const GRAPH_HEIGHT = 2150;
const NODE_WIDTH = 194;
const NODE_HEIGHT = 88;
const gNode = (id,title,sub,x,y,kind,extra={}) => ({id,title,sub,x,y,kind,...extra});

const graphNodes = [
  gNode('golay','Golay 码 𝒞₂₄','24 位二元码',35,45,'construct',{ref:0,summary:'扩展二元 Golay 码的长度为 24、维数为 12、最小重量为 8。它是 Leech 格的一条具体构造入口。',formula:'𝒞₂₄ ⊂ 𝔽₂²⁴；dim 𝒞₂₄=12，d<sub>min</sub>=8'}),
  gNode('ii','Lorentz 格 II₁,₁','添上 2 个方向',515,45,'lie',{summary:'这个二维偶幺模 Lorentz 格有双曲型内积。与 V♮ 张量后，总中心荷从 24 变成 26。',formula:'(mb₁+nb₂)² = −2mn',why:'正是这两个方向，让无鬼定理可以把物理态认回月光模的分次。',source:'borcherds',location:'§6'}),
  gNode('candidates','Conway–Norton 猜想','待匹配的函数表',790,45,'modular',{summary:'Conway 与 Norton 为魔群共轭类列出候选的规范化 genus zero 主模函数。证明的目标是把所有 T_g 与这张表逐一对应。',formula:'g ↦ F<sub>g</sub>(q)（候选 Hauptmodul）',why:'候选函数是待证的另一侧；它们不能只凭 J 的系数自动得到。',source:'borcherds',location:'§1、§9'}),
  gNode('leech','Leech 格 Λ','24 维偶幺模无根格',35,155,'construct',{ref:0,summary:'由 Golay 码构造的 Leech 格是唯一的 24 维正定偶幺模无根格。无根意味着它没有范数为 2 的向量。',formula:'rank Λ=24，Λ=Λ*，min<sub>λ≠0</sub>(λ,λ)=4'}),
  gNode('haupt','genus zero 主模函数','候选函数的目标性质',790,155,'modular',{summary:'候选 F_g 是相应 genus zero 模曲线的坐标函数；规范化后以 q⁻¹ 开头，常数项为 0。',formula:'F<sub>g</sub>(q)=q<sup>−1</sup>+O(q)',why:'最后要证明 T_g 不只是形式级数，而与指定的主模函数完全相同。',source:'borcherds',location:'§1、§9'}),
  gNode('heisenberg','海森堡代数','24 个整数模振子',35,265,'construct',{summary:'将格复化为 𝔥=Λ⊗ℂ，并作整数模中心扩张。负频模 α(−n) 是产生算符，作用在真空上；正频模湮灭真空。',formula:'[α(m),β(n)]=m(α,β)δ<sub>m+n,0</sub>K；M(1)=S(𝔥⊗t<sup>−1</sup>ℂ[t<sup>−1</sup>])',why:'M(1) 是海森堡代数的 Fock 表示，承载格 VOA 的振子态。',source:'flm',location:'第 1.7、3.1、7.1 节'}),
  gNode('momentum','格动量态 ℂ{Λ}','带中心扩张的格态',255,265,'construct',{summary:'每个 λ∈Λ 提供动量态 e^λ。为使顶点算子具有正确的交换性质，要选取格的中心扩张及其 2-余循环。',formula:'ℂ{Λ}=span{e<sup>λ</sup>:λ∈Λ}',why:'这一因子把 Leech 格的离散动量加入态空间。',source:'flm',location:'第 5、7.1 节'}),
  gNode('vlambda','格 VOA VΛ','格态 × 振子态',145,265,'construct',{ref:1}),
  gNode('vplus','固定部分 VΛ⁺','未扭曲扇区',35,375,'construct',{summary:'将格反演 λ↦−λ 提升为 θ，取 VΛ 的 +1 特征空间。Leech 格无根使其权 1 分次消失。',formula:'V<sub>Λ</sub><sup>+</sup>={v:θv=v}',why:'这是 orbifold 的第一半；仅有它还构不成完整的月光模。',source:'flm',location:'第 8.9、10.3 节'}),
  gNode('vtwist','θ 扭曲模 VΛᵀ','半整数振子 + T',255,375,'construct',{summary:'扭曲模块把振子模数改为半整数，并加入来自 extraspecial 2 群的 4096 维地面态 T。',formula:'V<sub>Λ</sub><sup>T</sup>≈M(1)[θ]⊗T，dim T=2¹²',why:'这是与未扭曲扇区不同的全新态空间。',source:'flm',location:'第 9 章、第 10.3 节'}),
  gNode('vtwistplus','扭曲固定部分','(VΛᵀ)⁺',255,485,'construct',{summary:'在扭曲模上选择相容的提升对合，再取 +1 特征空间。跨扇区顶点算子的局部性需要精确处理。',formula:'(V<sub>Λ</sub><sup>T</sup>)<sup>+</sup>',why:'扭曲固定部分与 VΛ⁺ 拼接，形成月光模的底层向量空间。',source:'flm',location:'第 9、10.3、12 章'}),
  gNode('vnatural','月光模 V♮','两扇区拼成 VOA',145,605,'construct',{ref:2}),
  gNode('weight2','权 2 的两块','未扭曲 98580 + 扭曲 98304',35,725,'group',{source:'flm',location:'§10.3，式 (10.3.39)–(10.3.44)'}),
  gNode('centralizer','Leech 型对称','2¹⁺²⁴·Co₁',255,725,'group',{summary:'Leech 格及格代数的对称带来一个可见的大子群，后来识别为魔群 2B 对合的中心化子。',formula:'C<sub>𝕄</sub>(2B) ≅ 2<sup>1+24</sup>·Co<sub>1</sub>',why:'这个子群很大，但仍不是完整魔群。',source:'flm',location:'第 10.4–10.5 节'}),
  gNode('griess','Griess 代数','权 2 的乘法与不变型',35,835,'group',{summary:'在权 2 的两块空间上定义交换、非结合的乘法与不变型，得到带单位的 196884 维 Griess 代数。',formula:'B=V<sup>♮</sup><sub>2</sub>，u×v=u<sub>1</sub>v',why:'这个有限维结构让魔群对称可以被精确检验。',source:'flm',location:'§10.3，命题 10.3.6'}),
  gNode('w','总顶点代数 W','中心荷 24+2=26',515,725,'lie',{ref:5,summary:'把月光模与 II₁,₁ 的格顶点代数张量相乘。魔群作用在第一个因子上，Lorentz 动量给出 ℤ² 分次。',formula:'W=V<sup>♮</sup>⊗V<sub>II₁,₁</sub>，c(W)=26'}),
  gNode('j','分次维数 J','j−744 的系数',790,725,'modular',{summary:'月光模的 graded character 恰是 J=j−744。系数 c(n) 是后面每个非零根空间的维数。',formula:'J(q)=q<sup>−1</sup>+196884q+21493760q²+···',why:'这里看到的是维数；g≠1 的迹仍待确定。',source:'flm',location:'第 10.5、12 章'}),
  gNode('triality','triality 扩展','加入非显然对称',255,835,'group',{summary:'FLM 构造额外的 triality 变换，令原先只能看到的 Leech 型对称扩展为对整个月光模的作用。',formula:'⟨Leech 型对称，triality⟩ ↷ V<sup>♮</sup>',why:'它跨越两扇区，补齐单靠格等距群看不到的对称。',source:'flm',location:'第 11–12 章'}),
  gNode('weight2Generates','权 2 决定整体','从 B 到 VOA 自同构',35,945,'group',{source:'flm',location:'第 12 章导言、定理 12.3.4'}),
  gNode('physical','物理态商空间','P¹ / DP⁰ / rad',515,835,'lie',{ref:5,summary:'取 Virasoro 初级的权 1 态 P¹，先商去导数 DP⁰，再商去双线性型的根基，得到所需李代数。',formula:'𝔪=(P¹/DP⁰)/rad(·,·)'}),
  gNode('jprod','J 的无穷乘积','从模函数到根数据',790,835,'modular',{ref:8,summary:'J(p)−J(q) 具有以 c(mn) 为指数的无穷乘积展开。Borcherds 以此反推出候选单根，再识别为 𝔪 的分母公式。',formula:'p<sup>−1</sup>∏(1−p<sup>m</sup>q<sup>n</sup>)<sup>c(mn)</sup>=J(p)−J(q)'}),
  gNode('monster','魔群 𝕄','Aut(V♮)',145,1055,'group',{ref:3}),
  gNode('noghost','无鬼定理','根空间回到 V♮',515,945,'lie',{ref:6}),
  gNode('ferenbaugh','候选函数可复制','Ferenbaugh 定理 3.25',790,945,'modular',{summary:'Ferenbaugh 证明 n|h 型主模函数完全可复制，且复制函数遵循幂映射规则；这类函数包含 Conway–Norton 表中的月光候选函数。',formula:'候选 F<sub>g</sub> 的复制函数按 g↦g<sup>m</sup> 对应',why:'这给出主模函数侧的复制关系；再结合 Borcherds 的迹递推与低阶系数核对，即可逐项比较。',source:'ferenbaugh',location:'定理 3.25'}),
  gNode('thompson','Thompson 级数 T_g','逐级取迹',145,1165,'group',{ref:4}),
  gNode('lie','魔群李代数 𝔪','ℤ² 分次 GKM 代数',515,1055,'lie',{ref:7,summary:'物理态商空间由无鬼定理控制，并满足广义 Kac–Moody 代数的条件。魔群作用保留在全部根空间上。',formula:'𝔪<sub>(m,n)</sub>≅V<sup>♮</sup><sub>mn+1</sub>（(m,n)≠0）'}),
  gNode('roots','单根与重数','一实根 + 无限虚根',515,1165,'lie',{ref:7}),
  gNode('denom','𝔪 的分母公式','根的乘积恒等式',515,1275,'lie',{ref:8}),
  gNode('homology','𝔪 的同调','H₀、H₁、H₂ 与外幂',515,1385,'lie',{source:'borcherds',location:'§4、§8'}),
  gNode('seeds','低阶迹系数','n=1、2、3、5',145,1495,'group',{summary:'从月光模低阶表示及魔群特征标求出 c_g(1)、c_g(2)、c_g(3)、c_g(5)，并同时核对相关的 g 的幂。',formula:'c<sub>g</sub>(n)=Tr(g|V<sub>n</sub>)，n∈{1,2,3,5}',why:'递推关系不能只凭某个 g 自身的四项系数独立完成。',source:'borcherds',location:'§9'}),
  gNode('twisted','扭曲分母恒等式','取 g 的迹 → 递推',515,1495,'lie',{ref:9}),
  gNode('candidateSeeds','候选函数的种子','同样的低阶系数',790,1495,'modular',{summary:'候选 Hauptmodul 的前几个系数由 Conway–Norton 的表给出，并与月光模的相应表示数据核对。',formula:'[q<sup>n</sup>]F<sub>g</sub> = c<sub>g</sub>(n)，n∈{1,2,3,5}',why:'递推与初值两件事必须同时成立，才可推出两个级数相同。',source:'borcherds',location:'§9'}),
  gNode('compare','相同递推 + 相同种子','逐项相等',515,1605,'final',{ref:10,summary:'T_g 与候选 F_g 满足同一套包含幂映射的复制关系，且必要的低阶迹系数一致，因此全部系数一致。',formula:'∀n， [q<sup>n</sup>]T<sub>g</sub>=[q<sup>n</sup>]F<sub>g</sub>'}),
  gNode('theorem','魔群月光得证','每个 T_g 都是 Hauptmodul',515,1735,'final',{ref:10,summary:'对每个 g∈𝕄，月光模的 Thompson 级数等于 Conway–Norton 指定的规范化 genus zero 主模函数。',formula:'T<sub>g</sub>(q)=F<sub>g</sub>(q)，∀g∈𝕄',why:'所有构造与比较在此收束：魔群表示的分次迹，逐项成为指定的主模函数。'}),
  gNode('voaConcept','顶点算子代数 (VOA)','态 · 场 · 共形分次',790,335,'concept',{source:'borcherds',location:'§3'}),
  gNode('orbifoldConcept','ℤ₂ 轨道折叠','投影 · 扭曲边界',790,505,'concept',{source:'flm',location:'导论、第 9–12 章；物理图像见 Dixon 等 1985'}),
  gNode('virasoroConcept','Virasoro 代数','权重 · 初级态 · 中心荷',790,675,'concept',{source:'borcherds',location:'§3'}),
  gNode('cfsgConcept','有限单群分类','四类来源 · 26 个零星群',35,1400,'concept',{source:'solomon',location:'2018，分类定理综述'}),
  gNode('oddOrderConcept','奇数阶定理','非交换单群必有对合',255,1400,'concept',{source:'feitThompson',location:'1963，主定理'}),
  gNode('gkmConcept','广义 Kac–Moody 代数','实根 · 虚根 · 分母公式',790,1265,'concept',{source:'borcherds',location:'§4、§7'})
];

const proofNodeCount=graphNodes.filter(n=>n.kind!=='concept').length;
const conceptNodes=graphNodes.filter(n=>n.kind==='concept');
const graphConceptTargets={
  voaConcept:['vlambda','vnatural','w'],
  orbifoldConcept:['vplus','vtwist','vtwistplus','vnatural'],
  virasoroConcept:['vlambda','w','physical','noghost'],
  cfsgConcept:['golay','leech','monster'],
  oddOrderConcept:['centralizer','monster'],
  gkmConcept:['lie','roots','denom','homology']
};
const graphConceptFor=new Map(graphNodes.map(n=>[n.id,[]]));
for(const [concept,targets] of Object.entries(graphConceptTargets))for(const target of targets)graphConceptFor.get(target).push(concept);

const graphCardDetails = {
  golay: {relation:'C<sub>24</sub>：[24, 12, 8]',role:'编码入口 → 构造无根格'},
  leech: {relation:'Λ*=Λ；min ‖λ‖²=4',role:'没有范数为 2 的格根'},
  heisenberg: {relation:'α(−n)，n&gt;0 → M(1)',role:'负模生成 24 个方向的振子态'},
  momentum: {relation:'λ∈Λ ↦ e<sup>λ</sup>',role:'中心扩张与 2-余循环控制局部性'},
  vlambda: {relation:'V<sub>Λ</sub>=M(1)⊗ℂ{Λ}',role:'振子 + 格动量；中心荷 c=24'},
  vplus: {relation:'V<sub>Λ</sub><sup>+</sup>=Fix(θ)',role:'保留未扭曲扇区的固定态'},
  vtwist: {relation:'V<sub>Λ</sub><sup>T</sup>≈M(1)[θ]⊗T',role:'半整数模；dim T=4096'},
  vtwistplus: {relation:'(V<sub>Λ</sub><sup>T</sup>)<sup>+</sup>',role:'补入扭曲扇区的固定态'},
  vnatural: {relation:'V<sup>♮</sup>=V<sub>Λ</sub><sup>+</sup>⊕(V<sub>Λ</sub><sup>T</sup>)<sup>+</sup>',role:'权 1 为 0；分次特征标为 J'},
  weight2: {role:'逐层数清两个扇区在权 2 的贡献'},
  griess: {role:'在两块空间上定义乘法与不变型'},
  centralizer: {relation:'C<sub>𝕄</sub>(2B) ≅ 2<sup>1+24</sup>·Co<sub>1</sub>',role:'Leech 格给出可见的大子群'},
  triality: {relation:'Leech 型对称 + triality',role:'将作用延伸到整个月光模'},
  weight2Generates: {role:'由权 2 的作用约束整个 VOA 对称'},
  monster: {relation:'Aut(V<sup>♮</sup>) ≅ 𝕄',role:'每个权分次成为魔群表示'},
  thompson: {relation:'T<sub>g</sub>=Σ Tr(g|V<sub>n</sub>)q<sup>n</sup>',role:'把群作用转换为分次迹级数'},
  ii: {relation:'II<sub>1,1</sub>：(m,n)²=−2mn',role:'加入两个 Lorentz 方向'},
  w: {relation:'W=V<sup>♮</sup>⊗V<sub>II₁,₁</sub>',role:'总中心荷 24+2=26'},
  physical: {relation:'𝔪=(P¹/DP⁰)/rad',role:'物理态商空间承接 Lie 括号'},
  noghost: {relation:'𝔪<sub>(m,n)</sub> ≅ V<sub>mn</sub>',role:'非零根空间回到月光模'},
  lie: {relation:'𝔪=⊕<sub>(m,n)</sub>𝔪<sub>(m,n)</sub>',role:'ℤ² 分次；保留魔群作用'},
  roots: {relation:'(1,−1) 与 (1,n)，n&gt;0',role:'一条实单根 + 无限虚单根'},
  denom: {relation:'∏(1−p<sup>m</sup>q<sup>n</sup>)<sup>c(mn)</sup>',role:'根重数进入二变量乘积'},
  homology: {relation:'Λ(E)=H(E)',role:'交错同调保留魔群表示数据'},
  j: {relation:'J=q<sup>−1</sup>+196884q+⋯',role:'系数 c(n) 给出根重数'},
  jprod: {relation:'J(p)−J(q)=根的乘积',role:'反向确定候选单根'},
  candidates: {relation:'g ↦ F<sub>g</sub>(q)',role:'Conway–Norton 的待证函数表'},
  haupt: {relation:'F<sub>g</sub>=q<sup>−1</sup>+O(q)',role:'规范化的 genus zero 坐标'},
  ferenbaugh: {relation:'F<sub>g</sub> 的复制 ↔ g<sup>m</sup>',role:'主模函数侧完全可复制'},
  seeds: {relation:'n∈{1,2,3,5}',role:'核对月光模的低阶魔群迹'},
  twisted: {relation:'Tr(g<sup>i</sup>|V<sub>mn</sub>)',role:'取迹后的分母公式产生递推'},
  candidateSeeds: {relation:'[q<sup>n</sup>]F<sub>g</sub>=c<sub>g</sub>(n)',role:'候选级数匹配相同初值'},
  compare: {relation:'同一递推 + 同一初值',role:'逐项确定全部 Fourier 系数'},
  theorem: {relation:'T<sub>g</sub>(q)=F<sub>g</sub>(q)',role:'∀g∈𝕄，genus zero 成立'},
  voaConcept:{role:'理解态–场对应与严格的 VOA 分次条件'},
  orbifoldConcept:{role:'理解离散对称的投影与扭曲边界条件'},
  virasoroConcept:{role:'理解共形权及物理态约束的来源'},
  cfsgConcept:{role:'说明 Mathieu、Conway 与魔群在分类中的位置'},
  oddOrderConcept:{role:'说明对合为何成为有限单群研究的入口'},
  gkmConcept:{role:'理解虚单根与分母修正项'}
};
const graphNodeMethods = {
  ii:'选取双曲基 b₁、b₂，满足 b₁²=b₂²=0、(b₁,b₂)=−1；对应格顶点代数提供中心荷 2 和 ℤ² 动量分次。',
  candidates:'Conway–Norton 按魔群共轭类列出规范化主模函数。它们先作为待比较的候选项，随后要分别验证复制关系和低阶系数。',
  haupt:'对相应 genus zero 模曲线取函数域生成元，并固定 q⁻¹ 首项和零常数项；这使与 Thompson 级数的比较具有唯一目标。',
  heisenberg:'将 𝔥=Λ⊗ℂ 的整数模作中心扩张，让正模湮灭真空、负模自由产生激发。所得 Fock 空间就是 M(1)。',
  momentum:'把 λ∈Λ 的动量态 e<sup>λ</sup> 加入 Fock 空间。格的中心扩张和 2-余循环给顶点算子正确的交换符号，保证局部性。',
  vplus:'把格反演提升为 θ，再取其 +1 特征空间。Leech 格没有范数 2 向量，权 1 的振子态又在 θ 下变号，因此固定部分的权 1 为零。',
  vtwist:'在 θ 扭曲表示中把振子指标改为半整数；再张量上来自 Λ/2Λ 相关 extraspecial 2 群的 4096 维地面态 T。',
  vtwistplus:'在扭曲模上选择相容的提升对合并取固定态。它必须与 V<sub>Λ</sub><sup>+</sup> 通过跨扇区顶点算子拼合，不能仅把两个向量空间并列。',
  griess:'在权 2 空间定义乘法 u·v=u₁v。共形向量占一维，其余 196883 维构成非平凡表示；这给出识别自同构群的有限维窗口。',
  centralizer:'先让 Leech 格的等距与中心扩张作用于构造数据，得到可见的 2B 对合中心化子。它还不是整个月光模的全部自同构群。',
  j:'计算 V<sup>♮</sup> 的分次维数：权 0 是真空、权 1 为零、权 2 为 196884。按中心荷 24 位移后得到 J=j−744。',
  triality:'FLM 构造额外的 triality 变换，使原先只在 Leech 型数据中显然的对称穿过扭曲扇区，延伸到完整月光模。',
  ferenbaugh:'Ferenbaugh 对 n|h 型主模函数证明完全可复制性，并确定复制函数遵循幂映射规则。月光候选主模函数属于这一类。',
  seeds:'将月光模的低阶分次按魔群不可约特征标分解，核对 n=1、2、3、5 的迹；递推涉及 g 的幂，因此相关幂也必须一致。',
  candidateSeeds:'从候选主模函数表读取同样的四组低阶系数，并逐类与魔群迹比较。复制关系只有配上这些初值，才能推出整条级数相同。'
};
for(const n of graphNodes){
  if(n.kind!=='concept'&&n.y>=265&&!['heisenberg','momentum'].includes(n.id))n.y+=110;
  n.card=graphCardDetails[n.id];
  n.method=graphNodeMethods[n.id];
  if(!n.card)throw new Error(`节点 ${n.id} 缺少卡片说明`);
  if(!graphDeepDetails[n.id] || graphDeepDetails[n.id].sections.length<3)throw new Error(`节点 ${n.id} 缺少深度说明`);
}

const gEdge = (from,to,kind,extra={}) => ({from,to,kind,...extra});
const graphEdges = [
  gEdge('golay','leech','construct'),gEdge('leech','heisenberg','construct'),gEdge('leech','momentum','construct'),gEdge('heisenberg','vlambda','construct'),gEdge('momentum','vlambda','construct'),gEdge('vlambda','vplus','construct'),gEdge('vlambda','vtwist','construct'),gEdge('vtwist','vtwistplus','construct'),gEdge('vplus','vnatural','construct'),gEdge('vtwistplus','vnatural','construct'),
  gEdge('vnatural','weight2','group'),gEdge('weight2','griess','group'),gEdge('vnatural','centralizer','group'),gEdge('centralizer','triality','group'),gEdge('griess','weight2Generates','group'),gEdge('weight2Generates','monster','group'),gEdge('triality','monster','group'),gEdge('monster','thompson','group'),gEdge('thompson','seeds','group'),
  gEdge('ii','w','lie'),gEdge('vnatural','w','lie'),gEdge('w','physical','lie'),gEdge('physical','noghost','lie'),gEdge('noghost','lie','lie'),gEdge('lie','roots','lie'),gEdge('roots','denom','lie'),gEdge('denom','homology','lie'),gEdge('homology','twisted','lie'),gEdge('thompson','twisted','group'),
  gEdge('vnatural','j','modular'),gEdge('j','jprod','modular'),gEdge('jprod','roots','modular'),gEdge('candidates','haupt','modular'),gEdge('haupt','ferenbaugh','modular',{route:'right',routeX:991}),gEdge('haupt','candidateSeeds','modular',{route:'right',routeX:1002}),
  gEdge('seeds','compare','final'),gEdge('twisted','compare','final'),gEdge('ferenbaugh','compare','modular',{dashed:true}),gEdge('candidateSeeds','compare','final',{dashed:true}),gEdge('compare','theorem','final'),
  gEdge('voaConcept','vlambda','concept',{context:true,route:'side'}),
  gEdge('orbifoldConcept','vtwist','concept',{context:true,route:'side'}),
  gEdge('virasoroConcept','physical','concept',{context:true,route:'side'}),
  gEdge('cfsgConcept','monster','concept',{context:true,route:'group-left'}),
  gEdge('oddOrderConcept','centralizer','concept',{context:true,route:'group-right'}),
  gEdge('gkmConcept','lie','concept',{context:true,route:'side'})
];

const graphById = new Map(graphNodes.map(n=>[n.id,n]));
const graphIncoming = new Map(graphNodes.map(n=>[n.id,[]]));
const graphOutgoing = new Map(graphNodes.map(n=>[n.id,[]]));
for(const edge of graphEdges){
  if(edge.context)continue;
  graphIncoming.get(edge.to).push(edge.from);
  graphOutgoing.get(edge.from).push(edge.to);
}

const graphView=document.getElementById('graph-view');
const graphStage=document.getElementById('graph-stage');
const graphNodesRoot=document.getElementById('graph-nodes');
const graphEdgesRoot=document.getElementById('graph-edges');
const graphInspector=document.getElementById('graph-inspector');
const graphShell=graphInspector.parentElement;
const inspectorResizeHandle=document.getElementById('inspector-resize-handle');
const graphZoomOutput=document.getElementById('graph-zoom');
const graphWorkspace=document.getElementById('graph-workspace');
let activeGraphId=null;
let graphScale=1;
let graphPanX=0;
let graphPanY=0;
let graphScaleMode='auto';
let graphLastWidth=0;
let graphLastHeight=0;

const inspectorPrefs={desktop:null,mobile:null,math:85};
try{
  const saved=JSON.parse(localStorage.getItem('moonshine-inspector-preferences')||'null');
  if(saved&&typeof saved==='object'){
    if(Number.isFinite(saved.desktop))inspectorPrefs.desktop=saved.desktop;
    if(Number.isFinite(saved.mobile))inspectorPrefs.mobile=saved.mobile;
    if(Number.isFinite(saved.math))inspectorPrefs.math=Math.max(70,Math.min(110,saved.math));
  }
}catch(_error){}
const inspectorIsMobile=()=>window.matchMedia('(max-width:850px)').matches;
const clampInspector=(value,min,max)=>Math.max(min,Math.min(max,value));
function saveInspectorPrefs(){try{localStorage.setItem('moonshine-inspector-preferences',JSON.stringify(inspectorPrefs));}catch(_error){}}
function inspectorSizeLimits(mobile){
  const bounds=graphShell.getBoundingClientRect(),available=mobile?bounds.height:bounds.width;
  const treeMin=mobile?Math.min(170,Math.max(100,available*.3)):Math.min(220,Math.max(150,available*.24));
  const panelMin=mobile?Math.min(210,Math.max(110,available*.25)):Math.min(320,Math.max(240,available*.28));
  return {min:panelMin,max:Math.max(panelMin,available-treeMin-10)};
}
function applyInspectorSettings(){
  const mobile=inspectorIsMobile(),{min,max}=inspectorSizeLimits(mobile);
  const stored=inspectorPrefs[mobile?'mobile':'desktop'];
  if(Number.isFinite(stored))graphShell.style.setProperty(mobile?'--inspector-height':'--inspector-width',`${clampInspector(stored,min,max)}px`);
  else graphShell.style.removeProperty(mobile?'--inspector-height':'--inspector-width');
  graphShell.style.removeProperty(mobile?'--inspector-width':'--inspector-height');
  graphInspector.style.setProperty('--formula-scale',String(inspectorPrefs.math/100));
  const slider=graphInspector.querySelector('#inspector-formula-size');
  if(slider)slider.value=String(inspectorPrefs.math);
  const output=graphInspector.querySelector('#inspector-formula-size-value');
  if(output)output.value=`${inspectorPrefs.math}%`;
  inspectorResizeHandle.setAttribute('aria-orientation',mobile?'horizontal':'vertical');
  inspectorResizeHandle.setAttribute('aria-label',mobile?'拖动分隔条调整卡片高度；双击恢复默认':'拖动分隔条调整卡片宽度；双击恢复默认');
}

const edgeColors={construct:'#65c0b5',group:'#e5bd76',lie:'#8db1df',modular:'#bda6dc',final:'#a6d69f',concept:'#85afb5'};
function edgePath(edge){
  const a=graphById.get(edge.from),b=graphById.get(edge.to);
  if(edge.route==='group-left'){
    const x1=a.x+NODE_WIDTH/2,y1=a.y,x2=b.x,y2=b.y+NODE_HEIGHT/2;
    return `M ${x1} ${y1} C 18 ${y1}, 18 ${y2+90}, 18 ${y2} L ${x2} ${y2}`;
  }
  if(edge.route==='group-right'){
    const x1=a.x+NODE_WIDTH/2,y1=a.y,x2=b.x+NODE_WIDTH,y2=b.y+NODE_HEIGHT/2;
    return `M ${x1} ${y1} L 476 ${y1} L 476 ${y2} L ${x2} ${y2}`;
  }
  if(edge.route==='side'){
    const x1=a.x,y1=a.y+NODE_HEIGHT/2,x2=b.x+NODE_WIDTH,y2=b.y+NODE_HEIGHT/2;
    const bend=Math.max(50,Math.min(150,(x1-x2)/3));
    return `M ${x1} ${y1} C ${x1-bend} ${y1}, ${x2+bend} ${y2}, ${x2} ${y2}`;
  }
  if(edge.route==='right'){
    const x=a.x+NODE_WIDTH, y1=a.y+NODE_HEIGHT/2, y2=b.y+NODE_HEIGHT/2;
    const routeX=edge.routeX||995;
    return `M ${x} ${y1} L ${routeX} ${y1} L ${routeX} ${y2} L ${b.x+NODE_WIDTH} ${y2}`;
  }
  const x1=a.x+NODE_WIDTH/2,y1=a.y+NODE_HEIGHT,x2=b.x+NODE_WIDTH/2,y2=b.y;
  const bend=Math.max(12,Math.min(70,(y2-y1)/2));
  return `M ${x1} ${y1} C ${x1} ${y1+bend}, ${x2} ${y2-bend}, ${x2} ${y2}`;
}
function renderGraph(){
  graphEdgesRoot.setAttribute('viewBox',`0 0 ${GRAPH_WIDTH} ${GRAPH_HEIGHT}`);
  const markers=Object.entries(edgeColors).map(([kind,color])=>`<marker id="arrow-${kind}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L8 4 L0 8 Z" fill="${color}"/></marker>`).join('');
  const labels=`<text x="30" y="34" class="graph-stage-label">A / 构造基础</text><text x="30" y="815" class="graph-stage-label">B / 对称与物理态</text><text x="515" y="1475" class="graph-stage-label">C / 递推与核对</text><text x="790" y="313" class="graph-stage-label concept-stage-label">虚线 / 概念旁注</text><text x="35" y="1384" class="graph-stage-label concept-stage-label">群论旁注</text>`;
  graphEdgesRoot.innerHTML=`<defs>${markers}</defs>${labels}`+graphEdges.map((e,i)=>`<path class="graph-edge edge-${e.kind} ${e.dashed||e.context?'edge-dashed':''}" data-edge="${i}" data-from="${e.from}" data-to="${e.to}" d="${edgePath(e)}" ${e.context?'':`marker-end="url(#arrow-${e.kind})"`}/>`).join('');
  graphNodesRoot.innerHTML=graphNodes.map((n,i)=>{
    const label=n.kind==='concept'?'概念 / 辅助阅读':`${String(i+1).padStart(2,'0')} / ${n.kind==='construct'?'构造':n.kind==='group'?'群作用':n.kind==='lie'?'李代数':n.kind==='modular'?'模函数':'结论'}`;
    return `<button class="graph-node node-${n.kind}" type="button" data-graph-id="${n.id}" aria-pressed="false" style="left:${n.x}px;top:${n.y}px;width:${NODE_WIDTH}px;height:${NODE_HEIGHT}px"><span class="graph-node-number">${label}</span><strong>${n.title}</strong><small class="graph-node-sub">${n.sub}</small></button>`;
  }).join('');
  updateGraphFocus();
}
function reachable(start,map){
  const seen=new Set([start]),queue=[start];
  while(queue.length){for(const id of map.get(queue.shift())) if(!seen.has(id)){seen.add(id);queue.push(id);}}
  return seen;
}
function updateGraphFocus(){
  let active=null;
  if(activeGraphId){
    if(graphById.get(activeGraphId).kind==='concept')active=new Set([activeGraphId,...graphConceptTargets[activeGraphId]]);
    else{
      active=new Set([...reachable(activeGraphId,graphIncoming),...reachable(activeGraphId,graphOutgoing)]);
      for(const concept of graphConceptFor.get(activeGraphId))active.add(concept);
    }
  }
  for(const button of graphNodesRoot.querySelectorAll('.graph-node')){
    const id=button.dataset.graphId;
    button.classList.toggle('is-muted',active&&!active.has(id));
    button.classList.toggle('is-linked',active&&active.has(id));
    button.classList.toggle('is-selected',id===activeGraphId);
    button.setAttribute('aria-pressed',String(id===activeGraphId));
  }
  for(const path of graphEdgesRoot.querySelectorAll('.graph-edge')){
    const edge=graphEdges[Number(path.dataset.edge)],linked=active&&active.has(edge.from)&&active.has(edge.to);
    path.classList.toggle('is-muted',active&&!linked);
    path.classList.toggle('is-linked',Boolean(linked));
  }
  for(const b of document.querySelectorAll('[data-graph-focus]'))b.setAttribute('aria-pressed',String(b.dataset.graphFocus===(activeGraphId||'all')));
  renderGraphInspector();
}
function graphNeighborLinks(ids,emptyText){return ids.length?ids.map(id=>`<button type="button" data-graph-target="${id}">${graphTitleMath[id]||graphById.get(id).title} <span>↗</span></button>`).join(''):`<span class="neighbor-none">${emptyText}</span>`;}
function graphDetailSection(id,section,i){
  const formula=section.tex?displayMath(section.tex):section.f?(graphMath[id]?.sections?.[i]?displayMath(graphMath[id].sections[i]):section.f):'';
  return `<section class="inspector-section" id="inspector-section-${i}"><div class="inspector-section-heading"><span>${String(i+1).padStart(2,'0')}</span><h4>${section.h}</h4></div>${section.p?`<p>${section.p}</p>`:''}${formula?`<div class="inspector-equation${section.feature?' is-featured':''}">${formula}${section.caption?`<div class="inspector-equation-caption">${section.caption}</div>`:''}</div>`:''}${section.items?`<ul>${section.items.map(item=>`<li>${item}</li>`).join('')}</ul>`:''}</section>`;
}
function renderGraphInspector(){
  clearTypesetMath(graphInspector);
  if(!activeGraphId){
    graphInspector.innerHTML='';
    delete graphInspector.dataset.node;
    graphInspector.classList.remove('is-open');
    graphShell.classList.remove('has-inspector');
    inspectorResizeHandle.hidden=true;
    return;
  }
  const n=graphById.get(activeGraphId),p=n.ref==null?null:proof[n.ref],detail=graphDeepDetails[n.id];
  const source=n.source||p?.source,location=n.location||p?.location;
  const index=graphNodes.findIndex(x=>x.id===n.id)+1;
  const type=n.kind==='construct'?'构造':n.kind==='group'?'群作用':n.kind==='lie'?'李代数':n.kind==='modular'?'模函数':n.kind==='concept'?'概念旁注':'证明收束';
  const headerLabel=n.kind==='concept'?`CONCEPT ${String(conceptNodes.findIndex(x=>x.id===n.id)+1).padStart(2,'0')} / ${conceptNodes.length} · ${type}`:`NODE ${String(index).padStart(2,'0')} / ${proofNodeCount} · ${type}`;
  const relationLabel=n.kind==='concept'?'结构速览':'核心关系';
  const contextLinks=n.kind==='concept'
    ?`<div class="inspector-neighbors inspector-concept-links"><strong>在证明链中使用</strong><div>${graphNeighborLinks(graphConceptTargets[n.id],'')}</div></div>`
    :`<div class="inspector-neighbors"><strong>从哪里来</strong><div>${graphNeighborLinks(graphIncoming.get(n.id),'这条路径从这里开始')}</div><strong>接下来</strong><div>${graphNeighborLinks(graphOutgoing.get(n.id),'已到证明终点')}</div>${graphConceptFor.get(n.id).length?`<strong>相关概念 · 虚线旁注</strong><div>${graphNeighborLinks(graphConceptFor.get(n.id),'')}</div>`:''}</div>`;
  graphInspector.dataset.node=n.id;
  graphInspector.innerHTML=`<div class="inspector-header"><span class="small-index">${headerLabel}</span><div class="inspector-header-actions"><label class="formula-size-control" for="inspector-formula-size"><span>公式</span><input id="inspector-formula-size" type="range" min="70" max="110" step="5" value="${inspectorPrefs.math}" aria-label="调整卡片公式字号"><output id="inspector-formula-size-value" for="inspector-formula-size">${inspectorPrefs.math}%</output></label><button type="button" id="graph-close" aria-label="关闭节点详情">×</button></div></div><div class="inspector-intro"><h3>${graphTitleMath[n.id]||n.title}</h3>${detail.path?`<div class="inspector-path">${detail.path}</div>`:''}<p class="inspector-lead">${detail.lead}</p><div class="inspector-relation"><span>${relationLabel}</span><div>${displayMath(graphMath[n.id].relation)}</div><small>${graphRoleMath[n.id]||graphMathifyProse(n.card.role)}</small></div></div><nav class="inspector-toc" aria-label="本卡片目录">${detail.sections.map((s,i)=>`<button type="button" data-graph-section="${i}">${s.h}</button>`).join('')}</nav><div class="inspector-sections">${detail.sections.map((s,i)=>graphDetailSection(n.id,s,i)).join('')}</div>${contextLinks}${source?`<p class="inspector-source">文献：${sourceCitation(source)} · ${location}</p>`:''}`;
  graphInspector.classList.add('is-open');
  graphShell.classList.add('has-inspector');
  inspectorResizeHandle.hidden=false;
  applyInspectorSettings();
  graphInspector.scrollTop=0;
  typesetMath(graphInspector);
}
function focusGraph(id,center=true){
  activeGraphId=id;updateGraphFocus();
  if(!id){requestAnimationFrame(syncGraphViewport);return;}
  if(center&&id){
    const n=graphById.get(id);
    const mobile=window.matchMedia('(max-width:850px)').matches;
    const readableScale=mobile?.72:.85;
    if(graphScale<readableScale){graphScale=readableScale;graphScaleMode='manual';}
    graphPanX=graphView.clientWidth/2-(n.x+NODE_WIDTH/2)*graphScale;
    graphPanY=graphView.clientHeight/2-(n.y+NODE_HEIGHT/2)*graphScale;
    applyGraphTransform();
  }
}
function applyGraphTransform(){
  graphStage.style.transform=`translate3d(${graphPanX}px,${graphPanY}px,0) scale(${graphScale})`;
  graphView.scrollLeft=0;
  graphView.scrollTop=0;
  graphZoomOutput.textContent=`${Math.round(graphScale*100)}%`;
  graphLastWidth=graphView.clientWidth;
  graphLastHeight=graphView.clientHeight;
}
function setGraphScale(value,mode='manual',anchorX=graphView.clientWidth/2,anchorY=graphView.clientHeight/2){
  graphScaleMode=mode;
  const next=Math.max(.28,Math.min(2.3,value));
  const worldX=(anchorX-graphPanX)/graphScale,worldY=(anchorY-graphPanY)/graphScale;
  graphScale=next;
  graphPanX=anchorX-worldX*next;
  graphPanY=anchorY-worldY*next;
  applyGraphTransform();
}
function initialGraphScale(){return Math.min(1.08,Math.max(.7,(graphView.clientWidth-96)/GRAPH_WIDTH));}
function resetGraphView(){
  graphScaleMode='auto';graphScale=initialGraphScale();
  graphPanX=GRAPH_WIDTH*graphScale>graphView.clientWidth?12:(graphView.clientWidth-GRAPH_WIDTH*graphScale)/2;
  graphPanY=28;
  applyGraphTransform();
}
function fitGraph(){
  graphScaleMode='fit';
  graphScale=Math.max(.18,Math.min(2.3,(graphView.clientWidth-80)/GRAPH_WIDTH,(graphView.clientHeight-80)/GRAPH_HEIGHT));
  graphPanX=(graphView.clientWidth-GRAPH_WIDTH*graphScale)/2;
  graphPanY=(graphView.clientHeight-GRAPH_HEIGHT*graphScale)/2;
  applyGraphTransform();
}
function syncGraphViewport(){
  if(graphScaleMode==='fit'){fitGraph();return;}
  if(graphScaleMode==='auto'){resetGraphView();return;}
  if(!graphLastWidth||!graphLastHeight)return;
  const worldX=(graphLastWidth/2-graphPanX)/graphScale;
  const worldY=(graphLastHeight/2-graphPanY)/graphScale;
  graphPanX=graphView.clientWidth/2-worldX*graphScale;
  graphPanY=graphView.clientHeight/2-worldY*graphScale;
  applyGraphTransform();
}
graphNodesRoot.addEventListener('click',e=>{const b=e.target.closest('[data-graph-id]');if(b)focusGraph(b.dataset.graphId);});
graphInspector.addEventListener('click',e=>{const target=e.target.closest('[data-graph-target]');if(target){focusGraph(target.dataset.graphTarget);return;}const section=e.target.closest('[data-graph-section]');if(section){graphInspector.querySelector(`#inspector-section-${section.dataset.graphSection}`)?.scrollIntoView({block:'start',behavior:'smooth'});return;}if(e.target.closest('#graph-close'))focusGraph(null,false);});
graphInspector.addEventListener('input',e=>{
  if(e.target.id!=='inspector-formula-size')return;
  inspectorPrefs.math=Number(e.target.value);
  graphInspector.style.setProperty('--formula-scale',String(inspectorPrefs.math/100));
  graphInspector.querySelector('#inspector-formula-size-value').value=`${inspectorPrefs.math}%`;
  saveInspectorPrefs();
});
let inspectorResize=null;
inspectorResizeHandle.addEventListener('pointerdown',e=>{
  if(e.button!==0)return;
  const mobile=inspectorIsMobile();
  inspectorResize={id:e.pointerId,mobile,x:e.clientX,y:e.clientY,size:mobile?graphInspector.getBoundingClientRect().height:graphInspector.getBoundingClientRect().width};
  inspectorResizeHandle.setPointerCapture(e.pointerId);
  inspectorResizeHandle.classList.add('is-dragging');
  e.preventDefault();
});
inspectorResizeHandle.addEventListener('pointermove',e=>{
  if(!inspectorResize||e.pointerId!==inspectorResize.id)return;
  const mobile=inspectorResize.mobile,{min,max}=inspectorSizeLimits(mobile);
  const delta=mobile?inspectorResize.y-e.clientY:inspectorResize.x-e.clientX;
  inspectorPrefs[mobile?'mobile':'desktop']=clampInspector(inspectorResize.size+delta,min,max);
  applyInspectorSettings();syncGraphViewport();
});
function finishInspectorResize(e){
  if(!inspectorResize||e.pointerId!==inspectorResize.id)return;
  if(inspectorResizeHandle.hasPointerCapture(e.pointerId))inspectorResizeHandle.releasePointerCapture(e.pointerId);
  inspectorResize=null;inspectorResizeHandle.classList.remove('is-dragging');saveInspectorPrefs();
}
inspectorResizeHandle.addEventListener('pointerup',finishInspectorResize);
inspectorResizeHandle.addEventListener('pointercancel',finishInspectorResize);
inspectorResizeHandle.addEventListener('dblclick',()=>{
  inspectorPrefs[inspectorIsMobile()?'mobile':'desktop']=null;
  applyInspectorSettings();syncGraphViewport();saveInspectorPrefs();
});
inspectorResizeHandle.addEventListener('keydown',e=>{
  const mobile=inspectorIsMobile(),delta=mobile?{ArrowUp:24,ArrowDown:-24}:{ArrowLeft:24,ArrowRight:-24};
  if(e.key==='Enter'){inspectorPrefs[mobile?'mobile':'desktop']=null;}
  else if(e.key in delta)inspectorPrefs[mobile?'mobile':'desktop']=(mobile?graphInspector.offsetHeight:graphInspector.offsetWidth)+delta[e.key];
  else return;
  e.preventDefault();applyInspectorSettings();syncGraphViewport();saveInspectorPrefs();
});
document.querySelector('.graph-focus').addEventListener('click',e=>{const b=e.target.closest('[data-graph-focus]');if(!b)return;if(b.dataset.graphFocus==='all'){focusGraph(null);resetGraphView();}else focusGraph(b.dataset.graphFocus);});
document.getElementById('graph-jump').addEventListener('click',()=>focusGraph('theorem'));
document.getElementById('graph-zoom-out').addEventListener('click',()=>setGraphScale(graphScale-.15,'manual'));
document.getElementById('graph-zoom-in').addEventListener('click',()=>setGraphScale(graphScale+.15,'manual'));
document.getElementById('graph-fit').addEventListener('click',fitGraph);

let graphDrag=null;
graphView.addEventListener('pointerdown',e=>{
  if(e.button!==0&&e.button!==1)return;
  if(e.target.closest('button, a, .graph-canvas-hint, .graph-legend'))return;
  graphDrag={id:e.pointerId,x:e.clientX,y:e.clientY,panX:graphPanX,panY:graphPanY};
  graphView.setPointerCapture(e.pointerId);
  graphView.classList.add('is-dragging');
  e.preventDefault();
});
graphView.addEventListener('pointermove',e=>{
  if(!graphDrag||e.pointerId!==graphDrag.id)return;
  graphPanX=graphDrag.panX+e.clientX-graphDrag.x;
  graphPanY=graphDrag.panY+e.clientY-graphDrag.y;
  graphScaleMode='manual';
  applyGraphTransform();
});
function endGraphDrag(e){
  if(!graphDrag||e.pointerId!==graphDrag.id)return;
  if(graphView.hasPointerCapture(e.pointerId))graphView.releasePointerCapture(e.pointerId);
  graphDrag=null;graphView.classList.remove('is-dragging');
}
graphView.addEventListener('pointerup',endGraphDrag);
graphView.addEventListener('pointercancel',endGraphDrag);
graphView.addEventListener('wheel',e=>{
  e.preventDefault();
  const rect=graphView.getBoundingClientRect();
  const factor=Math.exp(-Math.max(-100,Math.min(100,e.deltaY))*.0025);
  setGraphScale(graphScale*factor,'manual',e.clientX-rect.left,e.clientY-rect.top);
},{passive:false});
graphView.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&activeGraphId){focusGraph(null,false);return;}
  if(e.key==='+'||e.key==='='){setGraphScale(graphScale+.15,'manual');e.preventDefault();return;}
  if(e.key==='-'){setGraphScale(graphScale-.15,'manual');e.preventDefault();return;}
  if(e.key==='0'){fitGraph();e.preventDefault();return;}
  const moves={ArrowUp:[0,80],ArrowDown:[0,-80],ArrowLeft:[80,0],ArrowRight:[-80,0]};
  if(moves[e.key]){graphPanX+=moves[e.key][0];graphPanY+=moves[e.key][1];graphScaleMode='manual';applyGraphTransform();e.preventDefault();}
});

const fullscreenButton=document.getElementById('graph-fullscreen');
fullscreenButton.addEventListener('click',async()=>{
  try{
    if(document.fullscreenElement===graphWorkspace)await document.exitFullscreen();
    else await graphWorkspace.requestFullscreen();
  }catch(error){fullscreenButton.title='浏览器未允许全屏：'+error.message;}
});
document.addEventListener('fullscreenchange',()=>{
  const active=document.fullscreenElement===graphWorkspace;
  fullscreenButton.setAttribute('aria-pressed',String(active));
  fullscreenButton.textContent=active?'退出全屏':'⛶ 全屏';
  requestAnimationFrame(syncGraphViewport);
});
window.addEventListener('resize',()=>{applyInspectorSettings();syncGraphViewport();});
renderGraph();resetGraphView();
