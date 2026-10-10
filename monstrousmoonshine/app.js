const sources = {
  flm: {role:'核心 · 构造侧', short:'FLM', label:'Frenkel、Lepowsky、Meurman，《Vertex Operator Algebras and the Monster》', detail:'第 1、5、7 章：海森堡代数、格态与格 VOA；第 9–12 章：扭曲模、月光模及魔群作用。'},
  borcherds: {role:'核心 · 证明侧', short:'Borcherds', label:'Borcherds，《Monstrous Moonshine and Monstrous Lie Superalgebras》', detail:'§6–9：魔群李代数、单根、正根同调、扭曲分母恒等式及最终系数检验。'},
  ferenbaugh: {role:'补充 · 主模函数侧', short:'Ferenbaugh', label:'Charles R. Ferenbaugh，《Replication Formulae for n|h-Type Hauptmoduls》', detail:'Journal of Algebra 179 (1996), 808–837，定理 3.25：证明包含月光候选函数在内的 n|h 型主模函数完全可复制，且复制函数遵循幂映射规则。'},
  solomon: {role:'补充 · 群论背景', short:'Solomon 2018', label:'Ronald Solomon，《The Classification of the Finite Simple Groups: A Progress Report》', detail:'Notices of the AMS 65 (2018)：有限单群分类定理的结构与研究背景。'},
  feitThompson: {role:'补充 · 群论背景', short:'Feit–Thompson', label:'Walter Feit、John G. Thompson，《Solvability of Groups of Odd Order》', detail:'Pacific Journal of Mathematics 13 (1963)：奇数阶定理。'},
  dhvw: {role:'补充 · 共形场论背景', short:'Dixon 等 1985', label:'L. Dixon、J. A. Harvey、C. Vafa、E. Witten，《Strings on Orbifolds》', detail:'Nuclear Physics B 261 (1985), 678–686：从闭弦扭曲边界条件解释轨道折叠扇区与投影。'}
};
const sourceCitation = key => sources[key].short;

const proof = [
  {phase:'I · 构造舞台', title:'Golay 码 → Leech 格', short:'做出无根的 24 维格', summary:'从二元 Golay 码得到 Leech 格 Λ。其偶、幺模、无根三项性质，是后续月光模权 1 消失的几何起点。', formula:'dim Λ = 24，Λ = Λ*，{λ ∈ Λ : (λ,λ) = 2} = ∅', caption:'无根指没有范数为 2 的格向量。', input:'扩展二元 Golay 码 C₂₄：长度 24、维数 12、最小重量 8。', method:'按 Construction A 的适当变体构造并缩放，再验证偶性、幺模性与最小范数 4。', output:'得到唯一的 24 维正定偶幺模无根格 Λ。', note:'Golay 码帮助构造 Λ，但从“码的最小重量是 8”到“格无根”还要检查不同坐标类型和缩放条件。', source:'flm', location:'第 10.1–10.2 节'},
  {phase:'I · 构造舞台', title:'Leech 格 → 格 VOA VΛ', short:'振子态与格动量态汇合', summary:'先把 Λ 复化为 24 维空间 𝔥，构造整数模海森堡代数。负模作用在真空上，形成 Fock 空间 M(1)；每个 λ∈Λ 再给出格动量态 e<sup>λ</sup>。两条支路合成中心荷 24 的格 VOA。', formula:'M(1)=S(𝔥⊗t<sup>−1</sup>ℂ[t<sup>−1</sup>])；V<sub>Λ</sub>=M(1)⊗ℂ{Λ}', caption:'𝔥=Λ⊗ℂ；ℂ{Λ} 使用格的中心扩张与 2-余循环。', input:'偶幺模无根格 Λ 及其双线性型 (·,·)。', method:'定义 [α(m),β(n)]=m(α,β)δ<sub>m+n,0</sub>K；用负模生成 M(1)，加入格动量态，并定义顶点算子 Y(v,z)。', output:'得到带共形向量、权分次和格反演 θ 的 VOA V<sub>Λ</sub>，其中心荷为 24。', note:'这一步有共形场论的自由玻色子解释：振子激发由 M(1) 记录，紧致化动量由 Λ 记录。V<sub>Λ</sub> 的权 1 仍有 24 个振子态。', source:'flm', location:'第 1.7、5、7.1、10.3 节'},
  {phase:'I · 构造舞台', title:'ℤ₂ orbifold → V♮', short:'固定扇区与扭曲扇区拼合', summary:'将 λ↦−λ 提升为 V<sub>Λ</sub> 的对合 θ。未扭曲部分取固定态 V<sub>Λ</sub><sup>+</sup>；扭曲部分改用半整数模振子，再取相容的固定态。FLM 拼合两扇区，构造出月光 VOA。', formula:'V<sup>♮</sup> = V<sub>Λ</sub><sup>+</sup> ⊕ (V<sub>Λ</sub><sup>T</sup>)<sup>+</sup>', caption:'在共形场论中，这叫 ℤ₂ orbifold；可把它想作弦论中的轨道折叠，但扭曲扇区必须补入。', input:'V<sub>Λ</sub>、θ、半整数模 Fock 空间 M(1)[θ] 与 4096 维地面态 T。', method:'构造 V<sub>Λ</sub><sup>T</sup>≈M(1)[θ]⊗T，选取相容的 +1 特征空间，定义并验证跨扇区顶点算子。', output:'V<sup>♮</sup><sub>1</sub> = 0，graded character 为 J = j − 744。', note:'只取 V<sub>Λ</sub><sup>+</sup> 并不足够；扭曲扇区和跨扇区的局部性验证，都是 orbifold 构造的关键。', source:'flm', location:'第 9–12 章'},
  {phase:'II · 对称性成为系数', title:'魔群作用在 V♮ 上', short:'有限群作用于每一分次', summary:'FLM 从 Leech 格自同构与 triality 等额外对称出发，得到魔群 𝕄 对 V<sup>♮</sup> 的作用；其完整自同构群就是 𝕄。', formula:'Aut(V<sup>♮</sup>) ≅ 𝕄', caption:'魔群是有限单群；不要与后面的无限维李代数 𝔪 混同。', input:'月光模，特别是权 2 的 Griess 代数。', method:'建立自然对合的中心化子，再利用 triality 扩展对称群并识别为魔群。', output:'每个 V<sup>♮</sup><sub>k</sub> 都成为 𝕄 的有限维表示。', note:'196884 = 1 + 196883 是权 2 的维数分解，解释了最初的数字巧合；它本身不证明 genus zero。', source:'flm', location:'第 10.3、11–12 章'},
  {phase:'II · 对称性成为系数', title:'Thompson 级数', short:'把表示论问题写成 q 级数', summary:'对于 g∈𝕄，在每个分次上取迹。猜想说这些级数等于 Conway–Norton 指定的规范化 genus zero 主模函数。', formula:'T<sub>g</sub>(q) = Σ<sub>n∈ℤ</sub> Tr(g | V<sub>n</sub>)q<sup>n</sup>，T<sub>1</sub> = J', caption:'本页 Vₙ = V♮ₙ₊₁；所以 V₋₁ 是真空，V₀ = 0。', input:'𝕄 对 V<sup>♮</sup> 的分次作用。', method:'把各权空间的群特征标收集为函数 T<sub>g</sub>。', output:'目标变成确定所有 g 的全部迹系数 c<sub>g</sub>(n)。', note:'仅凭 T<sub>1</sub>=J 无法推出其他 g 的级数；需要把不同 g 的迹耦合起来。', source:'borcherds', location:'§1 与定理 1.1'},
  {phase:'III · 李代数发动机', title:'Lorentz 格与物理态', short:'把中心荷补到 26', summary:'用二维偶 Lorentz 格 II<sub>1,1</sub> 的顶点代数与 V<sup>♮</sup> 张量相乘，再从权 1 的 Virasoro 初级态中构造李代数。', formula:'W = V<sup>♮</sup> ⊗ V<sub>II₁,₁</sub>，c(W) = 24 + 2 = 26', caption:'II₁,₁ 的双线性型可取矩阵 [[0,−1],[−1,0]]。', input:'中心荷 24 的 V<sup>♮</sup> 与中心荷 2 的 Lorentz 格顶点代数。', method:'取 P¹ = {v : L₀v=v，L<sub>i</sub>v=0 (i&gt;0)}，商去 DP⁰，再商去双线性型的根基。', output:'得到 ℤ² 分次李代数 𝔪，且 𝕄 的作用仍保留。', note:'P¹/DP⁰ 上的型还可能退化；漏掉“再商根基”会把构造写得不完整。', source:'borcherds', location:'§6，定理 6.1'},
  {phase:'III · 李代数发动机', title:'无鬼定理', short:'识别每一个非零根空间', summary:'无鬼定理消去 Lorentz 方向产生的无效物理态，把 𝔪 的非零 (m,n) 分次精确识别为月光模的分次。', formula:'𝔪<sub>(m,n)</sub> ≅ V<sub>mn</sub> = V<sup>♮</sup><sub>mn+1</sub>　((m,n)≠(0,0))', caption:'原点的 Cartan 部分是 ℝ²；根的范数为 −2mn。', input:'物理态商空间与总中心荷 26。', method:'利用 c=24 的无鬼定理及非退化型，得到分次同构和所需正定性。', output:'根重数 mult(m,n)=c(mn)，且与 𝕄 的表示相容。', note:'公式中的下标 mn 是 Borcherds 的位移记号，不是通常的共形权 mn。', source:'borcherds', location:'§5–6，定理 5.1、6.1'},
  {phase:'III · 李代数发动机', title:'广义 Kac–Moody 与单根', short:'找到分母恒等式的骨架', summary:'正定性等条件使 𝔪 成为广义 Kac–Moody 代数。其单根有一条实根 (1,−1) 和一族虚根 (1,n)。', formula:'mult(1,n)=c(n)，n=−1 或 n&gt;0', caption:'c(0)=0，所以没有 (1,0) 单根。', input:'已知的根重数 c(mn)，以及 J 的无穷乘积恒等式。', method:'比较候选广义 Kac–Moody 代数的分母公式和 J(p)−J(q)。', output:'确定单根、Weyl 群（阶 2）和所有根重数。', note:'Borcherds 实际上先用 J 的乘积恒等式反推出单根，再将它识别为 𝔪 的分母公式；不能把这一步说成只靠已知单根直接证明乘积式。', source:'borcherds', location:'§6–7，定理 6.2、7.2'},
  {phase:'IV · 恒等式到主模函数', title:'无扭曲分母恒等式', short:'J 的系数成为根重数', summary:'把所有正根的重数相乘，得到 J 的二变量乘积公式。它展示了模函数与李代数结构之间的精确匹配。', formula:'p<sup>−1</sup> ∏<sub>m&gt;0, n∈ℤ</sub>(1−p<sup>m</sup>q<sup>n</sup>)<sup>c(mn)</sup> = J(p)−J(q)', caption:'J=j−744，两边之差与 j(p)−j(q) 相同。', input:'𝔪 的单根及重数 c(mn)。', method:'广义 Kac–Moody 分母公式；虚单根带来额外修正项。', output:'一个以 J 的系数为指数的乘积恒等式。', note:'此式只看到维数，即 g=1；要控制任意 T<sub>g</sub>，还需在表示环中取迹。', source:'borcherds', location:'§7，式 (7.1)'},
  {phase:'IV · 恒等式到主模函数', title:'扭曲分母恒等式', short:'把 g 与 g 的幂连进同一递推', summary:'对李代数正根部分的外代数恒等式取 𝕄 特征标；指数展开自然出现 g<sup>i</sup> 的迹。由此得到完全可复制性与系数递推。', formula:'p<sup>−1</sup> exp(−Σ<sub>i,m&gt;0;n∈ℤ</sub> Tr(g<sup>i</sup>|V<sub>mn</sub>) p<sup>mi</sup>q<sup>ni</sup>/i) = T<sub>g</sub>(p)−T<sub>g</sub>(q)', caption:'式中 m&gt;0；这是原文 (8.3) 的紧凑写法。', input:'𝔪 的分次表示、单根及正根部分 E 的同调。', method:'用 Λ(E)=H(E)，再取 g 的迹；外幂的 Adams 运算产生 g<sup>i</sup>。', output:'T<sub>g</sub> 及 T<sub>gⁱ</sub> 的系数满足递推关系。', note:'“扭曲”指对 g 取迹后的恒等式；它不是前面 orbifold 中的扭曲扇区。', source:'borcherds', location:'§8，式 (8.1)–(8.3)'},
  {phase:'IV · 恒等式到主模函数', title:'有限核对 → genus zero', short:'同一递推 + 同一种子', summary:'Ferenbaugh 证明包含月光候选函数在内的 n|h 型主模函数完全可复制，且复制函数遵循幂映射规则。它们与扭曲分母恒等式得到的 Thompson 级数满足对应递推；再核对低阶迹数据，两套级数便逐项相等。', formula:'T<sub>g</sub>(q) = 指定的规范化 Hauptmodul，∀ g∈𝕄', caption:'这就是魔群月光猜想的 genus zero 结论。', input:'扭曲分母递推；候选主模函数及其幂映射关系。', method:'Ferenbaugh 的完全可复制性定理，加上 Borcherds 对低阶表示分解的逐类检验。', output:'所有魔群元素的 Thompson 级数都是指定的 genus zero 主模函数。', note:'原证明的收尾包含有限的分情况检验。递推所需种子为 n=1、2、3、5，并须对 g 的相关幂一致核对。', source:'ferenbaugh', location:'定理 3.25；另见 Borcherds §9，式 (9.1) 与定理 1.1'}
];

const structures = [
  {id:'moonshine', title:'月光模 V♮', subtitle:'从格、振子和动量态走到 ℤ₂ orbifold', intro:'沿两次汇合读这条构造链：先让海森堡振子态 M(1) 与格动量态 ℂ{Λ} 汇成 VΛ；再让固定扇区与扭曲扇区拼成月光模。', steps:[
    {title:'Leech 格 Λ', text:'从 Golay 码得到 24 维偶幺模格。其最小非零范数为 4，因此没有范数为 2 的“根”。', formula:'Λ：rank 24，Λ=Λ*，min{(λ,λ):λ≠0}=4', why:'没有格根，使后续权 1 态只剩 24 个振子态，能被反演对合消去。', source:'flm', location:'第 10.1–10.2 节'},
    {title:'复化与海森堡振子', text:'先取 𝔥=Λ⊗ℂ。给每个 α∈𝔥 和整数 n 一个模 α(n)，再加入中心元 K；交换子由格的内积决定。n<0 的模产生激发，n>0 的模湮灭真空。', formula:'[α(m),β(n)]=m(α,β)δ<sub>m+n,0</sub>K', why:'24 个自由玻色子的振子代数由此进入构造，中心荷的 24 个方向也在这里出现。', source:'flm', location:'第 1.7、3.1、7.1 节'},
    {title:'Fock 空间 M(1)', text:'让所有正模湮灭真空，反复施加负模 α(−1)、α(−2)…；所得状态可以看成负模空间的对称代数。', formula:'M(1)=S(𝔥⊗t<sup>−1</sup>ℂ[t<sup>−1</sup>])', why:'M(1) 收纳振子激发，但尚未区分格中的离散动量 λ；因此它还不是完整的格 VOA。', source:'flm', location:'第 1.7、7.1 节'},
    {title:'格动量态与顶点算子', text:'为每个 λ∈Λ 加入态 e<sup>λ</sup>。格的中心扩张与 2-余循环使这些态的顶点算子具有所需的交换关系；顶点算子把动量与振子两套数据连接起来。', formula:'ℂ{Λ}=span{e<sup>λ</sup>:λ∈Λ}', why:'自由玻色子的 Fock 激发与 Leech 格的紧致化动量在此首次汇合。', source:'flm', location:'第 5、7.1 节'},
    {title:'格顶点算子代数 VΛ', text:'把振子空间与格态空间张量相乘，并赋予顶点算子 Y(v,z) 和共形向量。物理语言里，这是 24 个紧致化自由玻色子的手征共形场论。', formula:'V<sub>Λ</sub> = M(1) ⊗ ℂ{Λ}，c=24', why:'VΛ 把 Leech 格几何、振子激发与 Virasoro 权分次放在同一代数中。', source:'flm', location:'第 7.1、10.3 节'},
    {title:'ℤ₂ 轨道折叠', text:'格反演 λ↦−λ 提升为对合 θ。物理上，这是把反演当作离散规范对称：普通态投影到 θ 不变部分；弦还可在绕空间圈一周后只回到自己的反演像，对应新的 θ 扭曲扇区。', formula:'θ:λ↦−λ；未扭曲扇区 V<sub>Λ</sub><sup>+</sup>，扭曲扇区 V<sub>Λ</sub><sup>T</sup>', why:'只保留 θ 不变的旧态会遗漏扭曲边界条件。后面的半整数振子与地面态 T 正是新扇区的代数实现。', source:'flm', location:'导论、第 8.9–10.3 节；物理图像见 Dixon 等 1985'},
    {title:'未扭曲固定部分 VΛ⁺', text:'把格反演 λ↦−λ 提升为 θ，并取 +1 特征空间。由于权 1 的格态不存在，振子态被 θ 变号，固定部分的权 1 为 0。', formula:'V<sub>Λ</sub><sup>+</sup> = {v∈V<sub>Λ</sub>: θv=v}', why:'只取固定部分还不足以得到所需的自对偶结构与完整月光模。', source:'flm', location:'第 8.9、10.3 节'},
    {title:'扭曲模与 4096 维 T', text:'反演扭曲把振子指标改成半整数；有限维“地面态”T 来自与 Λ/2Λ 相关的 extraspecial 2 群，其不可约表示维数为 2¹²=4096。', formula:'V<sub>Λ</sub><sup>T</sup> ≈ M(1)[θ] ⊗ T，dim T=2¹²', why:'扭曲扇区并非形式上的复制；半整数模和 T 都是必要的新数据。', source:'flm', location:'第 9 章、第 10.3 节'},
    {title:'选择扭曲固定部分并拼合', text:'对扭曲模选取相容的提升对合，取其 +1 特征空间；FLM 构造跨扇区的顶点算子，验证整套 VOA 公理。', formula:'V<sup>♮</sup> = V<sub>Λ</sub><sup>+</sup> ⊕ (V<sub>Λ</sub><sup>T</sup>)<sup>+</sup>', why:'正是跨扇区的乘法，使直和成为一个代数，而不是两块彼此独立的表示空间。', source:'flm', location:'第 10.3、12 章'},
    {title:'读取权分次与 J', text:'新 VOA 的权 0 是一维真空，权 1 为 0，权 2 维数为 196884。减去中心荷带来的 q⁻¹ 位移，graded character 正是 J。', formula:'Tr<sub>V♮</sub> q<sup>L₀−1</sup> = q<sup>−1</sup> + 196884q + ··· = j−744', why:'这一刻，模函数系数与具体的有限维向量空间相遇；后续要理解魔群如何作用于它们。', source:'flm', location:'第 10.3、10.5、12 章'}
  ]},
  {id:'monster', title:'魔群 𝕄', subtitle:'月光模的全部自同构', intro:'“造出月光模”与“识别它的自同构群”是两项不同的工作。FLM 先找到可见的 Leech 格对称，再加入 triality，把它们组织成魔群。', steps:[
    {title:'权 2：Griess 代数', text:'在 V♮ 的权 2 部分定义交换但通常不结合的乘法 u·v=u₁v；共形向量给出一维平凡成分。', formula:'B = V<sup>♮</sup><sub>2</sub>，dim B = 196884 = 1 + 196883', why:'这是有限维的对称性窗口，也是“196884 = 196883 + 1”真正对应的结构。', source:'flm', location:'第 10.3、12 章'},
    {title:'Leech 格带来的可见对称', text:'Leech 格的等距群 Co₀ 及格代数的中心扩张自然作用于有关扇区。它们组织出一个 2B 对合的中心化子，形状为 2¹⁺²⁴·Co₁。', formula:'C<sub>𝕄</sub>(2B) ≅ 2<sup>1+24</sup>·Co<sub>1</sub>', why:'这个子群能直接追溯到构造数据，但还没有给出整个魔群。', source:'flm', location:'第 10.4–10.5 节'},
    {title:'triality 扩展对称', text:'FLM 在相关码、格与扭曲模之间建立额外变换。它使原本只在一个扇区中明显的对称延伸到整个月光模。', formula:'⟨Leech 型对称, triality 变换⟩ ↷ V<sup>♮</sup>', why:'这是越过“只会作用在可见子群上”的关键；一般 g 会复杂地混合两个扇区。', source:'flm', location:'第 11–12 章'},
    {title:'识别完整自同构群', text:'检验所得群对 VOA 结构的保持、作用的忠实性和有限群性质，再通过有限群论识别为 Fischer–Griess Monster。', formula:'Aut(V<sup>♮</sup>) ≅ 𝕄', why:'此时每一个权分次都自动成为魔群表示；证明链才能谈任意 g 的迹。', source:'flm', location:'第 12 章'},
    {title:'从群作用到迹', text:'用 Borcherds 的移位记号 Vₙ=V♮ₙ₊₁。对所有 g∈𝕄 定义 c_g(n)=Tr(g|Vₙ)，并把它们排成 T_g。', formula:'T<sub>g</sub>(q)=q<sup>−1</sup>+Σ<sub>n≥1</sub>c<sub>g</sub>(n)q<sup>n</sup>', why:'问题从“有没有魔群”变成“能否算出所有分次上的特征标”。', source:'borcherds', location:'§1、§9'}
  ]},
  {id:'lie', title:'魔群李代数 𝔪', subtitle:'无鬼定理如何变成递推机器', intro:'Borcherds 将月光模接到二维 Lorentz 格，使总中心荷达到 26。物理态商空间得到一座带魔群作用的无限维李代数。', steps:[
    {title:'加入 II₁,₁', text:'取基 b₁、b₂，满足 (b₁,b₁)=(b₂,b₂)=0、(b₁,b₂)=−1。它的格顶点代数提供 ℤ² 分次与中心荷 2。', formula:'(mb₁+nb₂)² = −2mn', why:'新增两个 Lorentz 方向，使 24+2=26；这正是无鬼定理发挥作用的维数。', source:'borcherds', location:'§6'},
    {title:'形成总顶点代数', text:'令 W=V♮⊗V_{II₁,₁}。魔群只作用在 V♮ 因子，因此与 II₁,₁ 的分次兼容。', formula:'W=V<sup>♮</sup>⊗V<sub>II₁,₁</sub>，c(W)=26', why:'同一载体里同时放入魔群表示、Lorentz 动量及顶点算子。', source:'borcherds', location:'§6'},
    {title:'取物理态', text:'在 W 中选 Virasoro 初级的权 1 态 P¹；导数 DP⁰ 在李括号中应被视为平凡。', formula:'P¹={v:L₀v=v，Lᵢv=0 (i&gt;0)}；P¹/DP⁰', why:'顶点代数的零模括号由此下降为李括号。', source:'borcherds', location:'§3、§6'},
    {title:'再商去退化根基', text:'P¹/DP⁰ 的不变双线性型可能仍有核。把这个核商去，才得到 Borcherds 使用的魔群李代数 𝔪。', formula:'𝔪 = (P¹/DP⁰) / rad(·,·)', why:'避免保留无效态，并为广义 Kac–Moody 结构所需的型做好准备。', source:'borcherds', location:'§6，定理 6.1'},
    {title:'无鬼定理识别根空间', text:'对 (m,n)≠(0,0)，无鬼定理给出与魔群作用相容的同构；原点保留二维 Cartan 部分。', formula:'𝔪<sub>(m,n)</sub> ≅ V<sub>mn</sub>；𝔪<sub>(0,0)</sub>≅ℝ²', why:'所有根重数现在由 J 的系数 c(mn) 给出，而且各根空间仍保留完整的魔群表示。', source:'borcherds', location:'§5–6'},
    {title:'单根与分母公式', text:'𝔪 是广义 Kac–Moody 代数。单根包括一条实根 (1,−1) 与虚根 (1,n)，n&gt;0，后者以 c(n) 为重数。', formula:'p<sup>−1</sup>∏(1−p<sup>m</sup>q<sup>n</sup>)<sup>c(mn)</sup>=J(p)−J(q)', why:'乘积式把根重数转成函数恒等式；取 g 的迹后才得到整个证明所需的递推。', source:'borcherds', location:'§6–8'},
    {title:'正根同调与取迹', text:'正根子代数 E 的外幂链复形给出同调 Hᵢ(E)。单根构成 H₁，实单根与另一根空间配对产生 H₂，i≥3 的同调消失。', formula:'Λ(E)=H(E)', why:'交错和先在分次魔群表示环中成立；对 g 取迹时，g 的各次幂一同进入扭曲分母公式。四层结果的推导见“魔群李代数探索”。', source:'borcherds', location:'§4、§8，式 (8.1)–(8.3)'}
  ]}
];

let activeRoot={m:1,n:1};
const constructionPanels=[...document.querySelectorAll('[data-construction]')];
const constructionSelection=Object.fromEntries(structures.map(s=>[s.id,0]));

function renderConstruction(panel,{build=false}={}){
  const s=structures.find(item=>item.id===panel.dataset.construction);
  if(!s)return;
  if(build){
    panel.innerHTML=`<div class="construction-heading"><div><span class="eyebrow">CONSTRUCTION PATH / ${String(s.steps.length).padStart(2,'0')} STEPS</span><h2>${s.title}怎样构造</h2></div><p>${s.intro}</p></div><div class="construction-layout"><div class="construction-steps" role="group" aria-label="${s.title}的构造步骤"></div><article class="construction-detail" aria-live="polite"></article></div>`;
  }
  const active=constructionSelection[s.id];
  const steps=panel.querySelector('.construction-steps');
  const detail=panel.querySelector('.construction-detail');
  steps.innerHTML=s.steps.map((item,i)=>`<button type="button" class="construction-step" data-construction-step="${i}" aria-pressed="${i===active}"><span>${String(i+1).padStart(2,'0')}</span><strong>${item.title}</strong><i aria-hidden="true">↗</i></button>`).join('');
  const item=s.steps[active];
  clearTypesetMath(detail);
  detail.innerHTML=`<div class="construction-detail-index"><span>${s.subtitle}</span><span>STEP ${String(active+1).padStart(2,'0')} / ${String(s.steps.length).padStart(2,'0')}</span></div><h3>${item.title}</h3><p class="construction-explanation">${item.text}</p><div class="construction-formula"><span>构造关系 / CONSTRUCTION</span>${displayMath(workshopMath[s.id][active])}</div><div class="construction-why"><strong>这一步的作用</strong><p>${item.why}</p></div><p class="construction-citation">依据：${sourceCitation(item.source)}，${item.location}</p>`;
  typesetMath(detail);
}
constructionPanels.forEach(panel=>{
  renderConstruction(panel,{build:true});
  panel.addEventListener('click',event=>{
    const button=event.target.closest('[data-construction-step]');
    if(!button)return;
    constructionSelection[panel.dataset.construction]=Number(button.dataset.constructionStep);
    renderConstruction(panel);
  });
  panel.addEventListener('keydown',event=>{
    if(!['ArrowUp','ArrowDown','Home','End'].includes(event.key))return;
    if(!event.target.matches('[data-construction-step]'))return;
    const s=structures.find(item=>item.id===panel.dataset.construction);
    const current=constructionSelection[s.id];
    constructionSelection[s.id]=event.key==='Home'?0:event.key==='End'?s.steps.length-1:(current+(event.key==='ArrowDown'?1:-1)+s.steps.length)%s.steps.length;
    renderConstruction(panel);
    panel.querySelector(`[data-construction-step="${constructionSelection[s.id]}"]`).focus();
    event.preventDefault();
  });
});
document.querySelectorAll('[data-construction-jump]').forEach(button=>button.addEventListener('click',()=>{
  const target=document.querySelector(`[data-construction="${button.dataset.constructionJump}"]`);
  target?.scrollIntoView({block:'start',behavior:'smooth'});
}));

const coefficients=window.MONSTER_ROOT_COEFFICIENTS;
const publishedRootCoefficients=window.MONSTER_DATA?.classes.find(item=>item.cls==='1A')?.coeffs||[];
const rootSeriesVerified=publishedRootCoefficients.every((value,index)=>coefficients[String(index+1)]===value);
if(!rootSeriesVerified)console.error('根空间系数与 1A 数据不符');
function coefficient(k){return k< -1?'0':(coefficients[String(k)]||`c(${k})`);}
function pretty(v){return /^\d+$/.test(v)?BigInt(v).toLocaleString('en-US'):v;}
function compactRootValue(v){return /^\d{13,}$/.test(v)?`${v[0]}.${v.slice(1,4)}e${v.length-1}`:pretty(v);}
const rootGrid=document.getElementById('root-grid');
const rootReadout=document.getElementById('root-readout');
let rootRange=8;
function renderRoot({focus=false}={}){
  const columns=Array.from({length:rootRange},(_,index)=>index+1);
  const rows=Array.from({length:rootRange+2},(_,index)=>rootRange-index);
  rootGrid.style.gridTemplateColumns=`42px repeat(${rootRange},minmax(100px,1fr))`;
  rootGrid.style.minWidth=`${42+rootRange*100+(rootRange*7)}px`;
  document.getElementById('root-window-label').textContent=`1 ≤ m ≤ ${rootRange} · −1 ≤ n ≤ ${rootRange}`;
  document.querySelectorAll('[data-root-range]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.rootRange)===rootRange)));
  rootGrid.innerHTML=`<div class="root-head">n╲m</div>${columns.map(m=>`<div class="root-head">${m}</div>`).join('')}`+rows.map(n=>`<div class="root-row-head">${n}</div>${columns.map(m=>{const k=m*n,v=coefficient(k),simple=m===1&&(n===-1||n>0),selected=activeRoot.m===m&&activeRoot.n===n;return `<button type="button" role="gridcell" tabindex="${selected?0:-1}" aria-selected="${selected}" aria-label="m 为 ${m}，n 为 ${n}，重数 ${v}" title="${pretty(v)}" class="root-cell ${simple?'simple':''} ${v==='0'?'zero':''} ${selected?'selected':''}" data-m="${m}" data-n="${n}"><span class="cell-coord">(${m}, ${n})</span><span class="cell-count">${compactRootValue(v)}</span></button>`;}).join('')}`).join('');
  const {m,n}=activeRoot,k=m*n,v=coefficient(k),simple=m===1&&(n===-1||n>0),isZero=v==='0';
  const summary=document.getElementById('root-selection-summary');
  summary.textContent=`已选 (${m}, ${n}) · ${isZero?'零空间':compactRootValue(v)}`;
  summary.title=isZero?'0':pretty(v);
  clearTypesetMath(rootReadout);
  rootReadout.innerHTML=`<span class="small-index">SELECTED DEGREE / 已选分次</span><h3>\\(\\mathfrak m_{(${m},${n})}\\)</h3><div class="readout-value">${isZero?'零空间':`重数 ${pretty(v)}`}</div><dl class="readout-list"><div><dt>坐标乘积 mn</dt><dd>${k}</dd></div><div><dt>月光模对应</dt><dd>\\(V_{${k}}=V^\\natural_{${k+1}}\\)</dd></div><div><dt>根的范数</dt><dd>\\(-2mn=${-2*k}\\)</dd></div><div><dt>单根？</dt><dd>${simple?(n===-1?'实单根':'虚单根'):'否'}</dd></div></dl>`;
  typesetMath(rootReadout);
  if(focus)rootGrid.querySelector(`[data-m="${m}"][data-n="${n}"]`)?.focus();
}
rootGrid.addEventListener('click',e=>{const b=e.target.closest('[data-m]');if(!b)return;activeRoot={m:Number(b.dataset.m),n:Number(b.dataset.n)};renderRoot();});
rootGrid.addEventListener('keydown',e=>{
  if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;
  const {m,n}=activeRoot;
  activeRoot=e.key==='Home'?{m:1,n}:e.key==='End'?{m:rootRange,n}:{m:Math.max(1,Math.min(rootRange,m+(e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0))),n:Math.max(-1,Math.min(rootRange,n+(e.key==='ArrowUp'?1:e.key==='ArrowDown'?-1:0)))};
  renderRoot({focus:true});
  e.preventDefault();
});
document.querySelector('.root-range-buttons').addEventListener('click',e=>{
  const button=e.target.closest('[data-root-range]');
  if(!button)return;
  rootRange=Number(button.dataset.rootRange);
  activeRoot={m:Math.min(activeRoot.m,rootRange),n:Math.min(activeRoot.n,rootRange)};
  renderRoot();
});
document.getElementById('root-detail-jump').addEventListener('click',()=>{
  rootReadout.focus({preventScroll:true});
  rootReadout.scrollIntoView({block:'start',behavior:'auto'});
});
document.getElementById('source-list').innerHTML=`<div class="source-list-heading"><div><span>02 / READING MAP</span><h3>文献地图</h3></div><p>核心构造、证明收束与三条背景线索</p></div><div class="source-grid">`+Object.values(sources).map((s,i)=>`<article class="source-entry ${i<3?'is-primary':''}"><div class="source-entry-top"><span>${String(i+1).padStart(2,'0')}</span><small>${s.role}</small></div><h4>${s.label}</h4><p>${s.detail}</p></article>`).join('')+`</div>`;
renderRoot();
