/* Additional construction and proof details for the v3 inspector.
   Indexing and involution conventions follow FLM and Borcherds. */
const detailSection=(h,p,tex,items)=>({h,p,tex,items});
const moreDetails={
  leech:[
    detailSection('从码到格：两种路线','Golay 码的坐标条件经 Construction A 型修正、平移和缩放后得到 Leech 格；普通的码格中仍可能有短向量，因此还须逐类验证新格的最小范数。FLM 也给出三份缩放 E₈ 格的构造：在 E₈/2E₈ 中取由 Hamming 码给出的互补 4 维全奇异子空间 Φ、Ψ，再以其适当逆像施加如下粘合条件。两种描述指向同一个 24 维偶幺模无根格。',String.raw`\begin{aligned}\Lambda=\langle&(\varphi,\varphi,0),\\[-2pt]&(\varphi,0,\varphi),\\[-2pt]&(\psi,\psi,\psi)\rangle\end{aligned}`),
    detailSection('Conway 群与反演','格的全部等距构成 Co₀；其中心含取负变换 −1。商群 Co₁=Co₀/⟨−1⟩ 随后出现在魔群的 2B 对合中心化子中。格反演 θ:λ↦−λ 会提升到 V<sub>Λ</sub>，并决定轨道折叠的未扭曲与扭曲扇区。',String.raw`\begin{aligned}\mathrm{Co}_0&=\operatorname{Aut}(\Lambda)\\[-2pt]\mathrm{Co}_1&=\mathrm{Co}_0/\{\pm1\}\end{aligned}`)
  ],
  heisenberg:[
    detailSection('完整的海森堡代数','先复化 𝔥=Λ⊗<sub>ℤ</sub>ℂ，再给每个整数 n 一份 𝔥(n)=𝔥⊗tⁿ，并加入中心元 K。𝔥 本身交换；中心扩张使正、负频率的模式产生非平凡对易，这才是自由玻色子振子的代数。',String.raw`\widehat{\mathfrak h}=\bigoplus_{n\in\mathbb Z}\mathfrak h(n)\oplus\mathbb CK`),
    detailSection('创造、湮灭与零模','在 level 1 真空表示中 K=1，n&gt;0 的模式湮灭真空，−n 模创造态；PBW 定理给出 M(1) 的对称代数结构。零模 α(0) 在纯 Fock 真空上为 0，加入格动量后则以 (α,λ) 作用于 e<sup>λ</sup>。这解释了振子与格态如何耦合。')
  ],
  momentum:[
    detailSection('为什么要 2-余循环','若仅把 e<sup>λ</sup> 当作普通格群代数基元，相邻顶点场的交换符号无法自动与内积产生的幂相抵。取归一化符号 ε(λ,μ) 后，结合律给出 2-余循环条件；交换子由格内积的奇偶性控制。',String.raw`\begin{aligned}&\varepsilon(\lambda,\mu)\varepsilon(\lambda+\mu,\nu)\\[-2pt]&=\varepsilon(\lambda,\mu+\nu)\varepsilon(\mu,\nu)\\[-2pt]&\varepsilon(\lambda,\mu)/\varepsilon(\mu,\lambda)=(-1)^{(\lambda,\mu)}\end{aligned}`),
    detailSection('中心扩张与偶格','等价地，取 1→⟨κ⟩→Λ̂→Λ→1，使提升元的交换子为 κ<sup>(λ,μ)</sup>，再令 κ 作用为 −1。代入 λ=μ 可见要有 (λ,λ) 为偶数；因此这里需要偶格。它保证格态的权 (λ,λ)/2 为整数，也让顶点场有正确的局部性。',String.raw`1\longrightarrow\{\pm1\}\longrightarrow\widehat\Lambda\longrightarrow\Lambda\longrightarrow1`)
  ],
  vlambda:[
    detailSection('VOA 到底包含什么','顶点算子代数由分次空间 V、态–场对应 Y、真空 𝟙 与共形向量 ω 组成。Y(a,z)=Σa<sub>n</sub>z<sup>−n−1</sup> 把一个态送到全部模式；真空、平移、局部性/Jacobi 恒等式使这些场可以一致地相乘。共形向量给出 L<sub>n</sub>=ω<sub>n+1</sub>。',String.raw`\begin{aligned}[L_m,L_n]&=(m-n)L_{m+n}\\[-2pt]&\quad+\frac{c}{12}(m^3-m)\delta_{m+n,0}\end{aligned}`),
    detailSection('真空、平移与局部性','真空场是恒等算符，Y(a,z)𝟙 的 z⁰ 项为 a；平移算符 D=L₋₁ 满足微分性质。对任意两态 a、b，存在 N，使 (z₁−z₂)ᴺ[Y(a,z₁),Y(b,z₂)]=0。这些关系与 Jacobi 恒等式一道控制场的算符乘积。',String.raw`\begin{aligned}Y(\mathbf1,z)&=\mathrm{id}\\[-2pt]Y(L_{-1}a,z)&=\partial_zY(a,z)\\[-2pt]&(z_1-z_2)^N\\[-2pt]&\quad\cdot[Y(a,z_1),\\[-2pt]&\qquad Y(b,z_2)]=0\end{aligned}`),
    detailSection('格态场作用的首项','将顶点场作用在动量态 e<sup>μ</sup> 上，可直接读出余循环符号、动量平移与幂次；振子激发贡献更高阶项。这个首项也是检查局部性与态–场归一化的入口。',String.raw`\begin{aligned}Y(e^\lambda,z)e^\mu&=\varepsilon(\lambda,\mu)z^{(\lambda,\mu)}\\[-2pt]&\quad\cdot e^{\lambda+\mu}+\cdots\end{aligned}`),
    detailSection('局部性为何成立','交换 Y(e<sup>λ</sup>,z₁) 与 Y(e<sup>μ</sup>,z₂) 时，坐标差幂带来 (−1)<sup>(λ,μ)</sup>。中心扩张的交换子正好给出同一个符号，二者相消；乘上足够高次的 (z₁−z₂) 后，两种展开一致。这是从偶格得到顶点代数的关键检验。'),
    detailSection('不定格情形的边界','格顶点算子的场与算符关系也可用于 II₁,₁ 这样的偶不定格，但其共形权不再下有界。后面的物理态约束与无鬼定理专门处理这两个 Lorentz 方向。',String.raw`\operatorname{wt}(e^{(m,n)})=-mn`),
    detailSection('Leech θ 级数的开头','Leech 格没有范数 2 向量，范数 4 的 196560 个向量贡献 q² 项；下一层范数 6 的向量贡献 16773120q³。把这一格动量级数与 η⁻²⁴ 的振子因子相乘，才得到未折叠格 VOA 的整个特征标。',String.raw`\begin{aligned}\Theta_\Lambda(q)&=1+196560q^2\\[-2pt]&\quad+16773120q^3+\cdots\end{aligned}`)
  ],
  vplus:[
    detailSection('2B 对合的扇区视角','在最终的 V♮ 中，区分两扇区的中心对合 z 对未扭曲固定部分取 +1、对扭曲固定部分取 −1；它是魔群的 2B 类对合，其中心化子为 2<sup>1+24</sup>·Co₁。这一 z 与构造初始格反演 θ 的作用位置相关，但不能把“θ 在 V<sub>Λ</sub> 上的提升”直接等同于整个 V♮ 上的同一个算符。')
  ],
  vtwist:[
    detailSection('扭曲地面态的有限群','将 Λ 的中心扩张按反演关系取商，得到阶 2²⁵ 的 extraspecial 2 群。令其中心元 κ 在不可约模 T 上取 −1，可得 dim T=2¹²=4096。半整数振子的 Fock 空间与 T 张量，才是完整的 θ 扭曲模。',String.raw`\widehat\Lambda/K\cong 2^{1+24},\qquad \dim T=2^{12}`),
    detailSection('扭曲场与修正算子','扭曲场不只是把普通整数模式中的 n 换成半整数；格态作用还需要相应的扭曲顶点算子与 Δ<sub>z</sub> 修正，保证扭曲 Jacobi 恒等式。扭曲模是 V<sub>Λ</sub> 的模，不应在尚未选择固定部分和跨扇区场之前直接称为完整 VOA。',String.raw`Y_\theta(v,z)=W_\theta(e^{\Delta_z}v,z)`),
    detailSection('格态扭曲场的结构','在 FLM 的归一化中，格态扭曲场含负半整数模的创造指数 E⁻<sub>θ</sub>、正半整数模的湮灭指数 E⁺<sub>θ</sub>、Λ̂ 的作用以及一个由范数决定的 z 幂。精确符号随中心扩张截面的选取变化；关键是这几个因子必须同时出现。',String.raw`Y_\theta(e^\lambda,z)\sim E^-_\theta(-\lambda,z)E^+_\theta(-\lambda,z)\,\hat e_\lambda\,z^{-(\lambda,\lambda)/2}`)
  ],
  vtwistplus:[
    detailSection('首个保留的扭曲层','扭曲 Fock 真空的最低权为 24/16=3/2。选定提升后，保留的整数权部分从施加一次半整数负模的权 2 层开始；这一层有 24 个振子方向与 4096 个 T 方向，维数 98304。它给 Griess 代数补上重要的一块，同时不会重新引入权 1。',String.raw`\dim\bigl((V_\Lambda^T)^+_2\bigr)=24\cdot2^{12}=98304`)
  ],
  vnatural:[
    detailSection('两个扇区各贡献什么','未扭曲固定部分提供真空与权 2 的 98580 维；扭曲固定部分在权 2 提供 98304 维。两者不仅作为向量空间相加，FLM 还定义跨扇区的顶点场并检验 Jacobi 恒等式，才得到中心荷 24 的月光 VOA。',String.raw`98580+98304=196884`),
    detailSection('位移记号与常数 744','本页以 V♮<sub>k</sub> 表示共形权 k；Borcherds 常用 V<sub>n</sub>=V♮<sub>n+1</sub> 表示位移分次。因此真空是 V<sub>−1</sub>，零常数项对应 V<sub>0</sub>=V♮<sub>1</sub>=0。j−744 使级数常数项归零；j−720 则属于尚未折叠的 V<sub>Λ</sub>。'),
    detailSection('精确命题的边界','FLM 构造了这个特定的 VOA 及魔群作用。仅凭“中心荷 24 且权 1 为零”这两条数值条件，不能把任意 VOA 都断言为 V♮；必须连同相应的结构假设与定理一起使用。')
  ]
};

graphDeepDetails.golay.sections=[
  detailSection('定义',String.raw`取 24 元集合 \(\Omega\)。子集 \(A\subseteq\Omega\) 的指示向量属于 \(\mathbb F_2^{24}\)；向量相加就是子集的对称差。扩展二元 Golay 码 \(\mathcal C_{24}\) 由以下条件刻画：`,String.raw`\operatorname{wt}(A)=|A|,\qquad A+B=A\triangle B`,[
    String.raw`<strong>自对偶</strong><span>\(\mathcal C_{24}=\mathcal C_{24}^{\perp}\)，维数为 12。</span>`,
    String.raw`<strong>II 型</strong><span>每个码字的重量都满足 \(\operatorname{wt}(c)\equiv0\pmod4\)。</span>`,
    String.raw`<strong>最小重量 8</strong><span>非零码字没有重量 4；参数记为 \([24,12,8]\)。</span>`
  ]),
  detailSection('一条具体构造',String.raw`先用 \(\mathbb P^1(\mathbb F_7)\) 的 8 个点标记坐标，取两组互补的 8 位码 \(C_1,C_2\)，再把这 8 个坐标复制三份。`,String.raw`\begin{aligned}\mathcal C_{24}=\langle&(S,S,0),\\[-2pt]&(S,0,S),\\[-2pt]&(T,T,T)\rangle\end{aligned}`,[
    String.raw`<strong>第一组</strong><span>\(S\in C_1\) 进入前两份或第一、第三份坐标。</span>`,
    String.raw`<strong>第二组</strong><span>\(T\in C_2\) 同时进入三份坐标；由这些向量张成 24 位码。</span>`
  ]),
  detailSection('关键性质','这些数字分别描述码的规模、短码字的组合结构和坐标对称。',String.raw`\begin{aligned}W_{\mathcal C}(x)&=1+759x^8+2576x^{12}\\[-2pt]&\quad+759x^{16}+x^{24}\end{aligned}`,[
    String.raw`<strong>码字数</strong><span>维数 12，因此共有 \(2^{12}=4096\) 个码字。</span>`,
    String.raw`<strong>octad</strong><span>重量 8 的码字共有 759 个，称为 octad。</span>`,
    String.raw`<strong>五点唯一性</strong><span>每个 5 元子集恰好落在一个 octad 中，即 Steiner 系统 \(S(5,8,24)\)；\(759=\binom{24}{5}/\binom85\)。</span>`,
    String.raw`<strong>坐标对称</strong><span>置换自同构群是 Mathieu 群 \(M_{24}\)，它是非交换单群。</span>`
  ]),
  detailSection('构造中的作用','',String.raw`\Lambda_2=\varnothing\quad\Longrightarrow\quad(V_\Lambda)_1=\mathfrak h(-1)\mathbf1`,[
    '<strong>建立格的结构</strong><span>II 型与自对偶性用于验证所得格的偶性和幺模性。</span>',
    '<strong>控制短向量</strong><span>最小重量 8 排除重量 4 码字带来的一类范数 2 候选；其他坐标型仍须检查。普通 Construction A 直接所得的格并非 Leech 格。</span>',
    '<strong>传给月光模</strong><span>无根性使格动量不产生权 1 态；剩余的 24 个振子态在反演固定部分中消失。</span>'
  ])
];
for(const [id,sections] of Object.entries(moreDetails))graphDeepDetails[id].sections.push(...sections);

const algebraDetails={
  griess:[
    detailSection('两块空间的精确维数','按 FLM 的构造，权 2 空间分为未扭曲块 𝔣 与扭曲块 𝔭。前者含 24 维振子空间的对称平方 300 维，以及 196560 个范数 4 格向量按 ± 配对所得的 98280 维；后者是 24 个振子方向张量 4096 维扭曲地面态。',String.raw`\begin{aligned}B&=\mathfrak f\oplus\mathfrak p\\[-2pt]\dim\mathfrak f&=300+98280=98580\\[-2pt]\dim\mathfrak p&=24\cdot4096=98304\end{aligned}`),
    detailSection('代数结构与单位','乘法 u·v=u₁v 交换但一般不结合；ω/2 是其单位，因为 ω₁=L₀ 在权 2 层作用为 2。VOA 的不变双线性型限制到 B；对权 2 态，u₃v 是真空方向上的标量，给出该型的一个归一化。两个扇区按奇偶相乘：𝔣·𝔣⊂𝔣、𝔣·𝔭⊂𝔭、𝔭·𝔭⊂𝔣。',String.raw`\begin{aligned}\frac{\omega}{2}\cdot u&=u\\[-2pt]\langle u\cdot v,w\rangle&=\langle u,v\cdot w\rangle\end{aligned}`),
    detailSection('乘法的一个局部例子','在 FLM 的振子记号中，g²、h² 代表二次振子态；它们的乘积可由海森堡模式的对易计算。对范数 4 格态 x<sub>a</sub>⁺ 也有类似作用，说明乘法同时使用振子内积与 Leech 格动量。',String.raw`\begin{aligned}g^2\times h^2&=4(g,h)\,gh\\[-2pt]g^2\times x_a^+&=(g,a)^2x_a^+\end{aligned}`)
  ],
  centralizer:[
    detailSection('extraspecial 群从哪里来','格中心扩张 Λ̂ 对反演取适当的商，得到阶 2²⁵ 的 extraspecial 2 群；Co₀ 的作用再经中心 ±1 化为 Co₁。这个 2 群与 Co₁ 的扩张同时控制未扭曲与扭曲层，并构成魔群 2B 对合 z 的中心化子。',String.raw`C_{\mathbb M}(z)\cong2^{1+24}\!\cdot\mathrm{Co}_1,\qquad z\in 2\mathrm B`),
    detailSection('中心扩张的群链','在构造层面，先考虑保持 Λ̂ 结构且向下诱导 Co₀ 的自同构 C₀；它是内部变换群被 Co₀ 扩张。再把与反演提升相关的中心核处理掉，得到作用在 V♮ 两扇区上的 2<sup>1+24</sup>·Co₁。这样“可见子群”有了从格到 VOA 的具体来源。',String.raw`\begin{aligned}1&\longrightarrow\operatorname{Inn}(\widehat\Lambda)\\[-2pt]&\longrightarrow C_0\longrightarrow\mathrm{Co}_0\\[-2pt]&\longrightarrow1\end{aligned}`),
  ],
  triality:[
    detailSection('权 2 层的四个可见块','在 Leech 型子群下，Griess 代数可进一步按 1、299、98280、98304 维块观察。前两块来自 S²(𝔥) 中的共形方向与无迹方向；第三块来自范数 4 格态；第四块来自扭曲扇区。外部自同构的难点是让这些块的乘法与双线性型同时相容。',String.raw`\begin{aligned}196884&=1+299\\[-2pt]&\quad+98280+98304\end{aligned}`),
    detailSection('额外对合与构造史','Griess 从中心化子出发，加入一个不保持原有扇区描述的额外对合，并逐项验证其对 B 乘法及型的保持。Conway 后用与 Golay 码相关、阶为 2¹³ 的 Moufang loop 简化了符号组织。FLM 的 VOA 构造则把这个有限维代数对称提升到全部权分次。')
  ],
  monster:[
    detailSection('从权 2 到整个月光模','限制到 B 给出 Aut(V♮)→Aut(B)。因 B 生成 V♮，一个 VOA 自同构若在 B 上恒等，则在所有高权态上恒等，所以限制映射是单射。反向延拓还需要 FLM 的结构定理；它不是“生成性”单独给出的。只把 B 当向量空间时有庞大的 GL(196884)，要求同时保持乘法、共形向量与不变型后才收束为 𝕄。',String.raw`\begin{aligned}\operatorname{Aut}_{\rm VOA}(V^\natural)&\cong\\[-2pt]\operatorname{Aut}_{\rm Griess}(B)&\cong\mathbb M\end{aligned}`),
    detailSection('群的大小与类','魔群是最大的零星有限单群；它有 194 个共轭类，按分次迹区分时得到 171 个不同的 Thompson 级数。群阶的素因子分解也说明为什么单靠少量显式生成元无法直接逐元素求迹。',String.raw`\begin{aligned}|\mathbb M|={}&2^{46}\cdot3^{20}\cdot5^9\cdot7^6\\[-2pt]&\cdot11^2\cdot13^3\cdot17\cdot19\\[-2pt]&\cdot23\cdot29\cdot31\cdot41\\[-2pt]&\cdot47\cdot59\cdot71\end{aligned}`)
  ],
  ii:[
    detailSection('双曲格的完整内积','II₁,₁ 是二维偶幺模 Lorentz 格。选两个零范数基向量 b₁、b₂，并令 (b₁,b₂)=−1；任意两点的配对由交叉项给出。用同一格作顶点代数时，其中心荷等于秩 2。',String.raw`\begin{aligned}(b_1,b_1)&=(b_2,b_2)=0\\[-2pt](b_1,b_2)&=-1\\[-2pt]((m,n),(m',n'))&=-mn'-m'n\end{aligned}`)
  ],
  w:[
    detailSection('共形向量与不变型','张量积的真空、共形向量与 Virasoro 模都逐因子组合；中心荷因此为 26。V♮ 和格顶点代数的双线性型也张量成 W 的不变型。𝕄 只作用于 V♮ 因子，II₁,₁ 则记录 (m,n) 动量。',String.raw`\begin{aligned}\omega_W&=\omega_{V^\natural}\otimes\mathbf1\\[-2pt]&\quad+\mathbf1\otimes\omega_{II_{1,1}}\\[-2pt]c(W)&=24+2=26\end{aligned}`)
  ],
  physical:[
    detailSection('权 0 态与导数态','P⁰ 也满足正 Virasoro 模约束，只是 L₀ 权为 0。D=L₋₁ 把 P⁰ 送入 P¹；这样的导数态在取零模 Lie 括号时是平凡的。先商 DP⁰，再商不变型的根基，得到精确的物理态李代数。',String.raw`\begin{aligned}P^0&=\{v\in W:L_0v=0,\\[-2pt]&\qquad L_iv=0\ (i>0)\}\\[-2pt]D&=L_{-1},\quad DP^0\subseteq P^1\end{aligned}`),
    detailSection('Jacobi 恒等式如何变成 Lie 恒等式','顶点代数的零模运算 u₀v 在导数态商上给出反对称括号；Jacobi 恒等式保证其满足 Lie 的 Jacobi 恒等式。这个过程保留 II₁,₁ 动量分次和魔群作用，不是仅靠“挑出权 1 态”就自动得到 𝔪。')
  ],
  noghost:[
    detailSection('定理的表示论形式','对具有中心荷 24、下有界且各权空间有限维的正定部分 V，张量 II₁,₁ 后施加物理态约束。在非零动量 α=(m,n) 上，去掉零范数态所得空间作为对称群表示，与 V 的权 mn+1 层同构；原点则留下二维 Cartan 空间。',String.raw`\begin{aligned}\mathfrak m_{(m,n)}&\cong V^\natural_{mn+1}\\[-2pt]&\quad((m,n)\ne(0,0))\\[-2pt]\mathfrak m_{(0,0)}&\cong\mathbb R^2\end{aligned}`),
    detailSection('证明机制与“无鬼”','证明利用非零动量附近的类光方向，将物理态分成横向态、导数态及零化子，再通过 Virasoro 约束逐级消去时间样自由度。结论既确定根空间的维数，也保留其 𝕄 表示与双线性型；这比只说“负范数态消失”更强。'),
    detailSection('横向算符 Kᵢ','取类光向量 w 且 (α,w)≠0。Goddard–Thorn 与 Borcherds 的证明引入由 II₁,₁ 顶点态 v 构造的 Kᵢ；它们彼此对易，并与 Virasoro 模满足简单交换关系。用 Kᵢ（i&gt;0）湮灭的态定义横向空间，再与虚假态、零化子比较，建立无鬼同构。',String.raw`\begin{aligned}K_i&=v_{i-1},\quad v=e^{-w}_{-2}e^w\\[-2pt][L_i,K_j]&=-jK_{i+j}\\[-2pt][K_i,K_j]&=0\end{aligned}`)
  ],
  lie:[
    detailSection('为何属于广义 Kac–Moody 类','𝔪 有二维 Cartan、与 (m,n) 相反的根分次、把正负根互换的对合，以及与 Lie 括号相容的不变型。可取整数度 deg(m,n)=2m+n；每个非零度的相应分次有限维。其反变型在非零度上正定，从而落入 Borcherds 的广义 Kac–Moody 框架。',String.raw`\begin{aligned}\deg\mathfrak m_{(m,n)}&=2m+n\\[-2pt]\mathfrak m_{(0,0)}&\cong\mathbb R^2\end{aligned}`),
    detailSection('根格中的几个实例','由 c(0)=0，非零坐标轴上的根空间为零；(1,1) 的重数是 196884，(1,2) 的重数是 21493760。因而把 ℤ² 的格点标成月光模的位移分次，就能直接读取根重数；原点二维 Cartan 必须另行标注。',String.raw`\begin{aligned}\operatorname{mult}(1,1)&=c(1)=196884\\[-2pt]\operatorname{mult}(1,2)&=c(2)=21493760\end{aligned}`)
  ],
  roots:[
    detailSection('Cartan 矩阵与 Weyl 数据','唯一实单根 (1,−1) 产生阶 2 的 Weyl 反射，它交换两个形式变量 p、q。单根 (1,m)、(1,n) 的内积为 −m−n，形成带无穷多虚单根的广义 Cartan 数据。按 Borcherds 的符号约定，可取 Weyl 向量 ρ=(−1,0)，它与 (1,n) 的配对为 n。',String.raw`\begin{aligned}((1,m),(1,n))&=-m-n\\[-2pt]\rho&=(-1,0)\\[-2pt](\rho,(1,n))&=n\\[-2pt]W&=\{1,s\}\\[-2pt]s(p)&=q\end{aligned}`),
  ],
  denom:[
    detailSection('一般 Borcherds 分母恒等式','广义 Kac–Moody 代数允许非正范数的虚单根及其重数。正根的无穷乘积仍对应 Weyl 群交错和，但和式必须加入修正项 S<sub>im</sub>：它对两两正交的虚单根组合按项数取交错符号，其余组合系数为零。没有虚单根时 S<sub>im</sub>=1，公式退化为普通 Kac–Moody 分母公式，再于有限型退化为 Weyl 分母公式。',String.raw`\begin{aligned}&e^\rho\prod_{\alpha>0}(1-e^\alpha)^{\operatorname{mult}(\alpha)}\\[-2pt]&=\sum_{w\in W}\det(w)\\[-2pt]&\quad\cdot w\!\left(e^\rho S_{\rm im}\right)\end{aligned}`),
  ],
  jprod:[
  ]
};
for(const [id,sections] of Object.entries(algebraDetails))graphDeepDetails[id].sections.push(...sections);

const modularDetails={
  j:[
    detailSection('j 的显式模形式表达','E₄ 是权 4 Eisenstein 级数，Δ=η²⁴ 是权 12 判别式。商 E₄³/Δ 给经典 j 函数；减去 744 后常数项为零，恰好匹配月光模权 1 消失的事实。',String.raw`\begin{aligned}E_4(q)&=1+240\sum_{n>0}\sigma_3(n)q^n\\[-2pt]\Delta(q)&=q\prod_{n>0}(1-q^n)^{24}\\[-2pt]J(q)&=E_4(q)^3/\Delta(q)-744\end{aligned}`)
  ],
  thompson:[
    detailSection('整数迹与可能的负系数','c<sub>g</sub>(n) 是有限维魔群表示的特征标值，在月光表中为整数；它可以为负数。单位元的 c₁(n) 是维数且非负，一般 g 的系数则不能解释为普通维数。这正是从无扭曲分母乘积转向逐元素取迹的必要性。')
  ],
  haupt:[
    detailSection('亏格零与规范化坐标','若模群 Γ 的紧化商曲线 X<sub>Γ</sub> 亏格为零，它的函数域可由一个函数生成。选择无穷远 cusp 处的局部参数 q，并规定唯一的简单极点主部 q⁻¹ 与零常数项，才得到可逐系数比较的规范化 Hauptmodul。单位元处 Γ₁=SL₂(ℤ)、F₁=J；其他 Γ<sub>g</sub> 并不都等于同一个 Γ₀(N)⁺。',String.raw`\begin{aligned}X_{\Gamma_g}&\cong\mathbb P^1\\[-2pt]F_g(q)&=q^{-1}+O(q)\end{aligned}`)
  ],
  candidates:[
    detailSection('候选表究竟记录什么','Conway–Norton 为魔群各共轭类配上 genus zero 群及其规范化主模函数。魔群有 194 个类，但由于某些类共享级数，得到 171 种不同的函数。候选族须与幂映射兼容，因为递推中 g、g²、g³ 等同时出现。')
  ],
  ferenbaugh:[
    detailSection('复制公式的定义','给规范化函数 f=q⁻¹+Σ<sub>n≥1</sub>a(n)qⁿ 定义 Faber 多项式 P<sub>m</sub>，使 P<sub>m</sub>(f(q))=q⁻ᵐ+O(q)。复制公式把此多项式与带复制函数 f<sup>(a)</sup> 的 Hecke 型求和联系起来；“完全可复制”还要求所有复制函数继续满足同型关系。帽号 T̂<sub>m</sub> 表示作用在整个复制函数族上的 Hecke 型算子。',String.raw`\begin{aligned}P_m(f(q))&=q^{-m}+O(q)\\[-2pt]m\,f\mid\widehat T_m&=P_m(f)\end{aligned}`),
  ],
  twisted:[
    detailSection('递推的一条可计算样例','比较式 (8.3) 的 p² 与 p⁴ 系数，Borcherds 得到按模 4 分类的式 (9.1)。其中一条把第 4k+2 项写成较早项的组合；取 g=1、k=1 时可核对 c(6)=c(4)+c(1)c(2)。其余同余类还涉及 g 的幂，故必须按整族函数一起递推。',String.raw`\begin{aligned}c_g(4k+2)&=c_g(2k+2)\\[-2pt]&\quad+\sum_{j=1}^{k}c_g(j)c_g(2k-j+1)\end{aligned}`)
  ],
  seeds:[
    detailSection('七个不可约特征怎样进入','把位移分次 V₁、V₂、V₃、V₅ 分解成前七个不可约魔群表示的特征 χ₁,…,χ₇。下面各等式是表示环中的等式，不能把 χ 当作单纯的整数维数；对 g 求值后才得到每个共轭类的四组迹。',String.raw`\begin{aligned}V_1&=\chi_1+\chi_2\\[-2pt]V_2&=\chi_1+\chi_2+\chi_3\\[-2pt]V_3&=2\chi_1+2\chi_2+\chi_3+\chi_4\\[-2pt]V_5&=4\chi_1+5\chi_2+3\chi_3\\[-2pt]&\quad+2\chi_4+\chi_5+\chi_6+\chi_7\end{aligned}`),
    detailSection('为何只需有限个群元素','Borcherds 选七个群元素 g₁,…,g₇，使矩阵 (χᵢ(gⱼ)) 可逆。在这些元素上计算低阶迹即可解出七个不可约特征的系数，进而得到所有共轭类上的相同分解。与候选函数表的前四组系数对照后，再启动递推。',String.raw`\det\bigl(\chi_i(g_j)\bigr)_{1\le i,j\le7}\ne0`)
  ],
  candidateSeeds:[
  ],
  compare:[
  ],
  theorem:[
    detailSection('结论之外的延伸','证明完成的是 Conway–Norton 所指定的全部 𝕄 共轭类的主模函数等式。它也开启了交换元素对 (g,h) 的广义月光、Mathieu 月光与 Umbral 月光等后续问题；这些是新的命题，不是本证明链已经自动给出的结论。')
  ]
};
for(const [id,sections] of Object.entries(modularDetails))graphDeepDetails[id].sections.push(...sections);
