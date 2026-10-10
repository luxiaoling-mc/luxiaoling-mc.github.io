/* Keep mathematical notation inside the inspector prose in MathJax too.
   Source notes remain readable HTML; this pass normalizes their inline maths. */
const graphInlineOverrides={
  homology:{
    lead:String.raw`正根子代数 \(E\) 的同调把根空间乘积提升为带魔群作用的表示恒等式。`,
    sections:{
      '正根与链复形':String.raw`取正根子代数 \(E=\bigoplus_{m>0,\,n\in\mathbb Z}\mathfrak m_{(m,n)}\)。Chevalley–Eilenberg 链群是外幂 \(C_i(E)=\bigwedge^i E\)；微分在二重外积上由李括号给出：\(d_2(x\wedge y)=[x,y]\)。同调 \(H_i(E)=\ker d_i/\operatorname{im}d_{i+1}\) 取闭链模去边界，并保留 \(\mathbb Z^2\) 分次与魔群作用。`,
      '同调只能落在哪些度数':String.raw`取 Weyl 向量 \(\rho=(-1,0)\)。Borcherds 的同调计算把可能贡献 \(H_i(E)\) 的度数 \(r=(m,n)\) 限制在 \((r,r+2\rho)=0\) 上。按 \(II_{1,1}\) 的内积，这等价于 \((m-1)n=0\)，所以只需检查 \(m=1\) 或 \(n=0\) 两条线。`,
      'H₀ 与 H₁：真空和单根':String.raw`零次同调 \(H_0(E)\) 是平凡表示 \(\mathbb R\)。一次同调 \(H_1(E)=E/[E,E]\) 只保留不能由正根括号生成的单根空间；其 \((1,n)\) 分次是位移月光模 \(V_n\)。对所有 \(n\) 汇总便得到特征标 \(pJ(q)\)。`,
      'H₂：实单根配上正根':String.raw`二次及更高外幂不能落在 \(m=1\)。唯一负 \(n\) 因子是实单根 \((1,-1)\)；它与 \((m,1)\) 的根空间 \(V_m\) 外积，落到 \((m+1,0)\)。那里因 \(c(0)=0\) 没有根空间，故外积为闭链；同调计算进一步证明它不是边界。因此 \(H_2(E)\) 的特征标为 \(pJ(p)-1\)。`,
      '为什么 Hᵢ（i≥3）为零':String.raw`除实单根 \((1,-1)\) 外，正根的第二坐标 \(n\) 都为正。一个负 \(n\) 因子与至少两个正 \(n\) 因子不能落在同调允许的 \(n=0\) 支撑线上；因此 \(H_i(E)=0\)（\(i\ge3\)）。`,
      '外幂交错和得到表示恒等式':String.raw`记 \(\Lambda(E)=\sum_i(-1)^i\bigwedge^i E\)、\(H(E)=\sum_i(-1)^iH_i(E)\)。Euler–Poincaré 原理给出 \(\Lambda(E)=H(E)\)；代入各层同调得到 Borcherds 的式 (8.2)。这里 \(\Lambda(E)\) 是外幂交错和，与 Leech 格 \(\Lambda\) 不是同一对象。`,
      '从表示式到逐元素迹':String.raw`式 (8.2) 在带 \(\mathbb Z^2\) 分次的虚拟魔群表示环中成立。对 \(g\) 取迹时，外幂的 Adams 运算使第 \(r\) 次贡献成为 \(\operatorname{Tr}(g^r\mid V_{mn})\)，导出扭曲分母公式；令 \(g=1\) 则回到只记录维数的乘积式。`
    }
  }
};
Object.assign(graphInlineOverrides,{
  leech:{sections:{
    '短向量与 θ 级数':String.raw`最短非零向量的范数为 4，共有 196560 个。格的 \(\Theta_\Lambda\) 级数从 \(1+196560q^2+\cdots\) 开始；再乘 24 个振子的分次函数，得到 \(V_\Lambda\) 的低阶维数。`,
    '对称与下一步':String.raw`Leech 格的等距群 \(\mathrm{Co}_0\) 以及取负对合 \(\lambda\mapsto-\lambda\) 都作用于构造数据。复化 \(\Lambda\) 得到 \(\mathfrak h=\Lambda\otimes_{\mathbb Z}\mathbb C\) 后，振子与动量两支路才可以合成 \(V_\Lambda\)。`,
    '从码到格：两种路线':String.raw`Golay 码的坐标条件经 Construction A 型修正、平移和缩放后得到 Leech 格；还须逐类验证所得格的最小范数。FLM 也用三份缩放的 \(E_8\) 格：在 \(E_8/2E_8\) 中选取由 Hamming 码给出的互补 4 维全奇异子空间 \(\Phi,\Psi\)，再按下式粘合。两条路线描述同一个 24 维偶幺模无根格。`,
    'Conway 群与反演':String.raw`格的全部等距构成 \(\mathrm{Co}_0\)，中心含取负变换 \(-1\)；商群 \(\mathrm{Co}_1=\mathrm{Co}_0/\langle-1\rangle\) 随后出现在魔群的 \(2\mathrm B\) 对合中心化子中。格反演 \(\theta:\lambda\mapsto-\lambda\) 提升到 \(V_\Lambda\)，由它划分轨道折叠的两个扇区。`
  }},
  heisenberg:{sections:{
    '从格到带中心项的模':String.raw`先复化 \(\mathfrak h=\Lambda\otimes_{\mathbb Z}\mathbb C\)。对 \(\alpha\in\mathfrak h\) 和 \(n\in\mathbb Z\) 引入模式 \(\alpha(n)\)，再加入中心元 \(K\)；中心项由格内积决定。正、负模式的非平凡对易给出海森堡代数。`,
    '怎样变成场':String.raw`同一 \(\alpha\) 的模式打包为场 \(\alpha(z)=\sum_{n\in\mathbb Z}\alpha(n)z^{-n-1}\)。24 个正交方向的二次振子构成共形向量，所以自由玻色子系统的中心荷为 \(c=24\)。`,
    '这一步尚缺什么':String.raw`\(M(1)\) 只有振子激发，没有按 \(\lambda\in\Lambda\) 标记的离散动量。加入格态以后，才得到完整的格 VOA。`,
    '创造、湮灭与零模':String.raw`在 level 1 真空表示中，\(K=1\)、\(n>0\) 的模式湮灭真空，而 \(\alpha(-n)\) 创造态；PBW 定理给出 \(M(1)\) 的对称代数结构。零模 \(\alpha(0)\) 在纯 Fock 真空上为零，加入动量后则按 \((\alpha,\lambda)\) 作用于 \(e^\lambda\)。`
  }},
  momentum:{sections:{
    '动量空间':String.raw`对每个 \(\lambda\in\Lambda\) 引入格态 \(e^\lambda\)。零模测量其动量：\(\alpha(0)e^\lambda=(\alpha,\lambda)e^\lambda\)。它是新的真空动量，而不是 Fock 空间里另一种振子。`,
    '中心扩张与符号':String.raw`不同动量的乘积须带符号 \(\varepsilon(\lambda,\mu)\)，它来自格的中心扩张。2-余循环保证结合性；交换子条件与格内积配合，保证顶点场的局部性。`,
    '为什么要 2-余循环':String.raw`若把 \(e^\lambda\) 当作普通格群代数基元，交换符号未必与内积幂相容。选择归一化的 \(\varepsilon(\lambda,\mu)\) 后，2-余循环条件保证结合性，交换子由格内积的奇偶性决定。`,
    '中心扩张与偶格':String.raw`等价地，取中心扩张 \(1\to\langle\kappa\rangle\to\widehat\Lambda\to\Lambda\to1\)：提升元的交换子由 \(\kappa^{(\lambda,\mu)}\) 给出，并令 \(\kappa\) 作用为 \(-1\)。代入 \(\lambda=\mu\) 可见需要偶格；此时格态的权 \((\lambda,\lambda)/2\) 为整数，顶点场也有正确的局部性。`
  }},
  vlambda:{sections:{
    '态空间的两半':String.raw`振子空间 \(M(1)\) 由海森堡负模生成；格态空间 \(\mathbb C\{\Lambda\}\) 记录离散动量。一般态由若干负模作用在 \(e^\lambda\) 上构成，两部分张量成 \(V_\Lambda\)。`,
    '态–场对应':String.raw`海森堡生成元给出 \(\alpha(z)=\sum_{n\in\mathbb Z}\alpha(n)z^{-n-1}\)。格态的场再加入创造指数、湮灭指数、格平移与零模；2-余循环使交换符号与内积幂相容，满足 VOA 的局部性。`,
    '共形结构与分次':String.raw`用 24 个正交基向量构造共形向量，中心荷 \(c=24\)。一般态 \(\alpha_1(-n_1)\cdots\alpha_r(-n_r)e^\lambda\) 的权为 \(n_1+\cdots+n_r+(\lambda,\lambda)/2\)。`,
    '真空、平移与局部性':String.raw`真空场是恒等算符，\(Y(a,z)\mathbf1\) 的常数项为 \(a\)；平移算符 \(D=L_{-1}\) 满足微分性质。对任意 \(a,b\)，总存在 \(N\) 使 \((z_1-z_2)^N[Y(a,z_1),Y(b,z_2)]=0\)。这些关系控制场的算符乘积。`,
    '局部性为何成立':String.raw`交换 \(Y(e^\lambda,z_1)\) 与 \(Y(e^\mu,z_2)\) 时，坐标差幂带来符号 \((-1)^{(\lambda,\mu)}\)；中心扩张的交换子给出同一个符号。两者抵消，乘足够高次的 \(z_1-z_2\) 后两种展开一致。`,
    'Leech θ 级数的开头':String.raw`Leech 格没有范数 2 向量；范数 4 的 196560 个向量贡献 \(q^2\) 项，范数 6 的向量贡献 \(16773120q^3\)。这个格动量级数乘上振子因子 \(\eta^{-24}\)，才得到未折叠格 VOA 的特征标。`,
    '为什么还要 orbifold':String.raw`由于 \(\Lambda\) 无根，\(V_\Lambda\) 的权 1 只来自 24 个振子态 \(\alpha(-1)\mathbf1\)。要得到权 1 为零的月光模，还须取反演固定态并补入扭曲扇区。`,
    'VOA 到底包含什么':String.raw`顶点算子代数由分次空间 \(V\)、态–场对应 \(Y\)、真空 \(\mathbf1\) 和共形向量 \(\omega\) 组成。模式展开 \(Y(a,z)=\sum_{n\in\mathbb Z}a_nz^{-n-1}\) 把态送到场；真空、平移和 Jacobi 恒等式使这些场能相容地相乘。`
  }},
  vplus:{sections:{
    '反演如何作用':String.raw`格反演 \(\lambda\mapsto-\lambda\) 同时把振子 \(\alpha(-n)\) 送到 \(-\alpha(-n)\)，并互换动量态 \(e^\lambda,e^{-\lambda}\)。选取相容提升后得到对合 \(\theta\)。`,
    '2B 对合的扇区视角':String.raw`在最终的 \(V^\natural\) 上，中心对合 \(z\) 对未扭曲固定部分取 \(+1\)，对扭曲固定部分取 \(-1\)。它属于魔群的 \(2\mathrm B\) 类，中心化子是 \(2^{1+24}\!\cdot\mathrm{Co}_1\)。它与初始格反演 \(\theta\) 相关，但两者作用于不同阶段的空间。`
  }},
  vtwist:{sections:{
    '地面态 T 从哪里来':String.raw`\(\Lambda\) 的模 2 数据及中心扩张给出 extraspecial 2 群。选择其中心元作用为 \(-1\) 的不可约表示 \(T\)，便得到 \(\dim T=2^{12}=4096\)；它保留扭曲动量的有限信息。`,
    '扭曲地面态的有限群':String.raw`把 \(\widehat\Lambda\) 按反演关系取商，得到阶 \(2^{25}\) 的 extraspecial 2 群。中心元 \(\kappa\) 在不可约模 \(T\) 上取 \(-1\)，因此 \(\dim T=2^{12}=4096\)。半整数振子 Fock 空间再与 \(T\) 张量，构成完整的 \(\theta\) 扭曲模。`,
    '格态扭曲场的结构':String.raw`在 FLM 的归一化中，格态扭曲场同时包含负半整数模的创造指数 \(E^-_\theta\)、正半整数模的湮灭指数 \(E^+_\theta\)、\(\widehat\Lambda\) 的作用，以及由范数决定的 \(z\) 幂。具体符号随中心扩张截面改变，四类因子都不可省略。`
  }},
  vtwistplus:{sections:{
    '权 1 的结果':String.raw`所选扭曲固定部分的最低相关权高于 1，不会重新引入权 1 态。普通固定部分也没有权 1，合起来得到 \(V_1^\natural=0\)。`
  }},
  vnatural:{sections:{
    '从 24 个自由玻色子到零权 1':String.raw`在 \(V_\Lambda\) 中，权 1 的 24 个振子态在 \(\theta\) 下全为奇；无根性保证没有遗漏的动量态。扭曲固定部分也不添权 1 态，所以 \(V_1^\natural=0\)。`,
    '位移记号与常数 744':String.raw`本页用 \(V_k^\natural\) 表示共形权 \(k\)；Borcherds 常用位移分次 \(V_n=V_{n+1}^\natural\)。因此真空是 \(V_{-1}\)，零常数项对应 \(V_0=V_1^\natural=0\)。\(j-744\) 适用于月光模；\(j-720\) 是未折叠的 \(V_\Lambda\) 的特征标。`
  }},
  griess:{sections:{
    '乘法从何而来':String.raw`若 \(u,v\) 都在权 2，取顶点算子 \(Y(u,z)\) 的第 1 模定义乘法 \(u\cdot v=u_1v\)。它交换但一般不结合；共形向量在其中给出单位。`,
    '两块空间的精确维数':String.raw`按 FLM 的构造，权 2 空间是未扭曲块 \(\mathfrak f\) 与扭曲块 \(\mathfrak p\) 的直和。前者包含 \(S^2(\mathfrak h)\) 的 300 维和 196560 个范数 4 格向量按 \(\pm\) 配对所得的 98280 维；后者由 24 个振子方向与 4096 维扭曲地面态张量得到。`,
    '代数结构与单位':String.raw`乘法 \(u\cdot v=u_1v\) 交换但一般不结合；\(\omega/2\) 是单位，因为 \(\omega_1=L_0\) 在权 2 层作用为 2。不变型由 \(u_3v\) 的真空系数给出归一化。扇区乘法满足 \(\mathfrak f\mathfrak f\subseteq\mathfrak f\)、\(\mathfrak f\mathfrak p\subseteq\mathfrak p\)、\(\mathfrak p\mathfrak p\subseteq\mathfrak f\)。`,
    '乘法的一个局部例子':String.raw`在 FLM 的振子记号中，\(g^2,h^2\) 是二次振子态，乘法可由海森堡模式对易计算。范数 4 的格态 \(x_a^+\) 也参与乘法，因此内积与 Leech 格动量都进入 Griess 代数。`
  }},
  centralizer:{sections:{
    '群结构读法':String.raw`记号 \(2^{1+24}\) 表示阶为 \(2^{25}\) 的 extraspecial 2 群；\(\mathrm{Co}_1=\mathrm{Co}_0/\{\pm1\}\)。点号 \(\cdot\) 表示这里所需的群扩张。`,
    'extraspecial 群从哪里来':String.raw`格中心扩张 \(\widehat\Lambda\) 对反演取商，得到阶 \(2^{25}\) 的 extraspecial 2 群；\(\mathrm{Co}_0\) 再经中心 \(\{\pm1\}\) 化为 \(\mathrm{Co}_1\)。两者的扩张控制两个扇区，并构成魔群 \(2\mathrm B\) 对合 \(z\) 的中心化子。`,
    '中心扩张的群链':String.raw`先取保持 \(\widehat\Lambda\) 结构且向下诱导 \(\mathrm{Co}_0\) 的自同构群 \(C_0\)。处理与反演提升相关的中心核后，得到作用于 \(V^\natural\) 两扇区的 \(2^{1+24}\!\cdot\mathrm{Co}_1\)；这说明可见子群如何从格进入 VOA。`
  }}
});
const graphInlineItemOverrides={
  leech:{'作为格的三个条件':{
    1:String.raw`幺模：对偶格 \(\Lambda^*\) 与 \(\Lambda\) 相同。`
  }},
  vlambda:{'四个因子的分工':{
    1:String.raw`\(e^\lambda\) 把动量 \(\mu\) 平移为 \(\mu+\lambda\)，并带 2-余循环符号。`
  }}
};
const graphTitleMath={
  orbifoldConcept:String.raw`\(\mathbb Z_2\) 轨道折叠（orbifold）`,
  golay:String.raw`Golay 码 \(\mathcal C_{24}\)`,
  leech:String.raw`Leech 格 \(\Lambda\)`,
  ii:String.raw`Lorentz 格 \(II_{1,1}\)`,
  momentum:String.raw`格动量态 \(\mathbb C\{\Lambda\}\)`,
  vlambda:String.raw`格 VOA \(V_\Lambda\)`,
  vplus:String.raw`固定部分 \(V_\Lambda^+\)`,
  vtwist:String.raw`\(\theta\) 扭曲模 \(V_\Lambda^T\)`,
  vtwistplus:String.raw`扭曲固定部分 \((V_\Lambda^T)^+\)`,
  vnatural:String.raw`月光模 \(V^\natural\)`,
  centralizer:String.raw`Leech 型对称 \(2^{1+24}\!\cdot\mathrm{Co}_1\)`,
  monster:String.raw`魔群 \(\mathbb M\)`,
  thompson:String.raw`Thompson 级数 \(T_g\)`,
  w:String.raw`总顶点代数 \(W\)`,
  lie:String.raw`魔群李代数 \(\mathfrak m\)`,
  denom:String.raw`\(\mathfrak m\) 的分母公式`,
  homology:String.raw`\(\mathfrak m\) 的同调`,
  j:String.raw`分次维数 \(J\)`,
  jprod:String.raw`\(J\) 的无穷乘积`
};
const graphRoleMath={
  vlambda:String.raw`振子 + 格动量；中心荷 \(c=24\)`,
  vtwist:String.raw`半整数模；\(\dim T=4096\)`,
  vnatural:String.raw`权 1 为 0；分次特征标为 \(J\)`,
  w:String.raw`总中心荷 \(24+2=26\)`,
  lie:String.raw`\(\mathbb Z^2\) 分次；保留魔群作用`,
  j:String.raw`系数 \(c(n)\) 给出根重数`,
  theorem:String.raw`对每个 \(g\in\mathbb M\)，genus zero 成立`
};
function graphMathifyHeading(heading){
  return heading.replace(/H₀|H₁|H₂|Hᵢ|M\(1\)|θ|𝔪|Λ|J(?=\s|$)/g,token=>{
    const tex={'H₀':'H_0','H₁':'H_1','H₂':'H_2','Hᵢ':'H_i','M(1)':'M(1)','θ':String.raw`\theta`,'𝔪':String.raw`\mathfrak m`,'Λ':String.raw`\Lambda`,'J':'J'}[token];
    return String.raw`\(${tex}\)`;
  });
}
Object.assign(graphInlineOverrides,{
  triality:{sections:{
    '权 2 层的四个可见块':String.raw`在 Leech 型子群下，Griess 代数分出 1、299、98280、98304 维四块。前两块来自 \(S^2(\mathfrak h)\) 的共形方向与无迹方向；后两块分别来自范数 4 格态和扭曲扇区。额外对称必须同时保持这些块间的乘法与双线性型。`
  }},
  thompson:{sections:{
    '整数迹与可能的负系数':String.raw`\(c_g(n)=\operatorname{Tr}(g\mid V_n)\) 是有限维魔群表示的特征标值，在月光表中为整数，也可能为负。只有单位元的 \(c_1(n)\) 是维数；一般 \(g\) 的系数不能解释为普通根重数。`
  }},
  ii:{sections:{
    '双曲基':String.raw`取零范数基 \(b_1,b_2\)，并令 \((b_1,b_2)=-1\)。格向量 \(mb_1+nb_2\) 的范数为 \(-2mn\)，于是后续根空间自然按整数对 \((m,n)\) 标记。`,
    '中心荷配平':String.raw`偶格顶点代数的中心荷等于格的秩；\(II_{1,1}\) 的秩为 2，与中心荷 \(c=24\) 的 \(V^\natural\) 张量后得到 \(c=26\)。这是物理态论证所用的临界值。`,
    '双曲格的完整内积':String.raw`\(II_{1,1}\) 是二维偶幺模 Lorentz 格。选零范数基 \(b_1,b_2\)，使 \((b_1,b_2)=-1\)；任意两点的配对由交叉项给出。相应格顶点代数的中心荷等于秩 2。`
  }},
  physical:{sections:{
    '先商平凡态':String.raw`平移算符 \(D=L_{-1}\) 把权 0 态送到权 1，形成导数态。先商去 \(DP^0\)，顶点算子的零模运算便在商空间上诱导李括号。`,
    '权 0 态与导数态':String.raw`\(P^0\) 同样满足正 Virasoro 模约束，只是 \(L_0\) 权为 0。\(D=L_{-1}\) 把它送入 \(P^1\)；这些导数态对零模李括号无贡献。先取 \(P^1/DP^0\)，再商去不变型的根基，才得到精确的物理态李代数。`,
    'Jacobi 恒等式如何变成 Lie 恒等式':String.raw`顶点代数的零模运算 \(u_0v\) 在导数态商上成为反对称括号，Jacobi 恒等式保证其满足李代数的 Jacobi 恒等式。构造保留 \(II_{1,1}\) 动量分次与魔群作用。`
  }},
  noghost:{sections:{
    '权为何是 mn+1':String.raw`格动量 \((m,n)\) 的共形权为 \(-mn\)。总物理态权为 1，所以月光模因子的权必须是 \(mn+1\)。用位移分次 \(V_k=V_{k+1}^\natural\) 记，则相应根空间是 \(V_{mn}\)。`,
    '定理的表示论形式':String.raw`设正定部分 \(V\) 的中心荷为 24、下有界且各权空间有限维。与 \(II_{1,1}\) 张量并施加物理态约束后，在非零动量 \(\alpha=(m,n)\) 上，去掉零范数态的空间作为对称群表示同构于 \(V_{mn+1}^\natural\)；原点另留二维 Cartan 空间。`
  }},
  lie:{sections:{
    '为何属于广义 Kac–Moody 类':String.raw`\(\mathfrak m\) 有二维 Cartan、成对的相反根分次、交换正负根的对合，以及与李括号相容的不变型。取 \(\deg\mathfrak m_{(m,n)}=2m+n\) 时，各个非零度分次有限维，反变型在这些分次上正定，因而符合 Borcherds 的广义 Kac–Moody 框架。`
  }},
  roots:{sections:{
    'Cartan 矩阵与 Weyl 数据':String.raw`唯一实单根 \((1,-1)\) 给出阶 2 的 Weyl 反射，交换形式变量 \(p,q\)。两个单根 \((1,m),(1,n)\) 的内积为 \(-m-n\)，形成无穷多虚单根的广义 Cartan 数据。取 Weyl 向量 \(\rho=(-1,0)\)，便有 \((\rho,(1,n))=n\)。`
  }},
  denom:{sections:{
    '为何右端是两个 J 之差':String.raw`令 \(S\) 为虚根修正项，减去其 Weyl 反射像后得到 \(p^{-1}S-q^{-1}w(S)=J(p)-J(q)\)。它与模函数侧乘积相同，从而识别出 \(\mathfrak m\) 的分母公式。`,
    '一般 Borcherds 分母恒等式':String.raw`广义 Kac–Moody 代数允许非正范数、带重数的虚单根。正根乘积仍对应 Weyl 群交错和，但和式需加入修正项 \(S_{\mathrm{im}}\)：两两正交的虚单根组合按项数取交错符号。没有虚单根时 \(S_{\mathrm{im}}=1\)，退化为通常的 Kac–Moody 分母公式。`
  }},
  j:{sections:{
    'j 的显式模形式表达':String.raw`\(E_4\) 是权 4 Eisenstein 级数，\(\Delta=\eta^{24}\) 是权 12 判别式。商 \(E_4^3/\Delta\) 给出经典 \(j\) 函数；减去 744 后常数项消失，匹配月光模权 1 为零。`
  }},
  candidates:{sections:{
    '候选表究竟记录什么':String.raw`Conway–Norton 为魔群各共轭类配上 genus zero 群及规范化主模函数。194 个类中有些共享级数，共得到 171 种函数。候选族须与幂映射相容，因为递推同时涉及 \(g,g^2,g^3\) 等。`
  }},
  haupt:{sections:{
    '亏格零与规范化坐标':String.raw`若模群 \(\Gamma\) 的紧化商曲线 \(X_\Gamma\) 亏格为零，其函数域由一个函数生成。选择无穷远 cusp 的参数 \(q\)，规定简单极点主部 \(q^{-1}\) 和零常数项，就得到可逐系数比较的 Hauptmodul。单位元对应 \(\Gamma_1=\mathrm{SL}_2(\mathbb Z)\)、\(F_1=J\)；其他 \(\Gamma_g\) 未必是同一种 \(\Gamma_0(N)^+\)。`
  }},
  ferenbaugh:{sections:{
    '复制公式的定义':String.raw`对规范化函数 \(f=q^{-1}+\sum_{n\ge1}a(n)q^n\)，取 Faber 多项式 \(P_m\)，使 \(P_m(f(q))=q^{-m}+O(q)\)。复制公式把它与复制函数族 \(f^{(a)}\) 的 Hecke 型求和相连；“完全可复制”要求复制函数继续满足同型关系。算子 \(\widehat T_m\) 作用于整个函数族。`
  }},
  seeds:{sections:{
    '七个不可约特征怎样进入':String.raw`把位移分次 \(V_1,V_2,V_3,V_5\) 分解成前七个不可约魔群特征 \(\chi_1,\ldots,\chi_7\)。下方等式位于表示环；对 \(g\) 求值后，才得到每个共轭类的四组迹。`,
    '为何只需有限个群元素':String.raw`Borcherds 选七个元素 \(g_1,\ldots,g_7\)，使矩阵 \((\chi_i(g_j))\) 可逆。计算这些元素上的低阶迹即可解出七个不可约特征的系数，再推广到所有共轭类；随后与候选函数表比较。`
  }},
  twisted:{sections:{
    '递推的一条可计算样例':String.raw`比较式 (8.3) 的 \(p^2\) 与 \(p^4\) 系数，Borcherds 得到按模 4 分类的式 (9.1)。其中一条把第 \(4k+2\) 项写成较早系数的组合；取 \(g=1,k=1\) 可核对 \(c(6)=c(4)+c(1)c(2)\)。其余同余类还涉及 \(g\) 的幂，必须按整族函数递推。`
  }},
  candidateSeeds:{sections:{
    '核对方式':String.raw`对每个 \(g\) 核对 \([q^n]F_g=\operatorname{Tr}(g\mid V_n)\)。递推还用到 \(g\) 的幂，所以相应幂类必须在候选表中对应正确。`
  }},
  theorem:{sections:{
    '完整命题':String.raw`令 \(V_n=V_{n+1}^\natural\)。对每个 \(g\in\mathbb M\)，Thompson 级数 \(T_g\) 与该共轭类指定的 Hauptmodul \(F_g\) 相等。`,
    '单位元作为校验':String.raw`当 \(g=1\) 时，\(T_1=J=j-744\)。一般 \(g\) 的结论更强：它同时解释所有共轭类的迹级数。`
  }}
});

const graphUnicodeMath={
  '𝔪':String.raw`\mathfrak m`,'𝔥':String.raw`\mathfrak h`,'𝔣':String.raw`\mathfrak f`,'𝔭':String.raw`\mathfrak p`,
  '𝕄':String.raw`\mathbb M`,'ℤ':String.raw`\mathbb Z`,'ℂ':String.raw`\mathbb C`,'ℝ':String.raw`\mathbb R`,
  '𝒞':String.raw`\mathcal C`,'Λ':String.raw`\Lambda`,'Θ':String.raw`\Theta`,'Δ':String.raw`\Delta`,
  'λ':String.raw`\lambda`,'μ':String.raw`\mu`,'ν':String.raw`\nu`,'α':String.raw`\alpha`,'β':String.raw`\beta`,
  'ρ':String.raw`\rho`,'θ':String.raw`\theta`,'ω':String.raw`\omega`,'ε':String.raw`\varepsilon`,'η':String.raw`\eta`,
  'χ':String.raw`\chi`,'δ':String.raw`\delta`,'κ':String.raw`\kappa`,'φ':String.raw`\varphi`,
  'Φ':String.raw`\Phi`,'Ψ':String.raw`\Psi`,'π':String.raw`\pi`,'σ':String.raw`\sigma`,
  '♮':String.raw`\natural`,'∈':String.raw`\in`,'∑':String.raw`\sum`,'Σ':String.raw`\sum`,
  '∏':String.raw`\prod`,'⊕':String.raw`\bigoplus`,'⊗':String.raw`\otimes`,'∧':String.raw`\wedge`,
  '∅':String.raw`\varnothing`,'≅':String.raw`\cong`,'≈':String.raw`\approx`,'→':String.raw`\to`,
  '↦':String.raw`\mapsto`,'−':'-','⋯':String.raw`\cdots`,'≥':String.raw`\ge`,'≤':String.raw`\le`,
  '₀':'_0','₁':'_1','₂':'_2','₃':'_3','₄':'_4','₅':'_5','₆':'_6','₇':'_7','₈':'_8','₉':'_9',
  'ᵢ':'_i','ᵣ':'_r','²':'^2','³':'^3','ⁿ':'^n','ⁱ':'^i','⁻':'^-'
};
function graphPlainTex(value){
  let tex=value.replace(/&gt;/g,'>').replace(/&lt;/g,'<').replace(/&amp;/g,'&');
  tex=tex.replace(/<sub>([\s\S]*?)<\/sub>/g,(_,part)=>`_{${part}}`);
  tex=tex.replace(/<sup>([\s\S]*?)<\/sup>/g,(_,part)=>`^{${part}}`);
  tex=tex.replace(/II₁,₁/g,'II_{1,1}').replace(/V♮/g,'V^{\\natural}');
  tex=Array.from(tex,ch=>graphUnicodeMath[ch]??ch).join('');
  tex=tex.replace(/\bCo(?=_)/g,String.raw`\mathrm{Co}`).replace(/\bTr(?=_)/g,String.raw`\operatorname{Tr}`);
  return tex;
}
function graphMathifyProse(input){
  if(!input)return input;
  let html=input,math=[];
  const keep=tex=>{const key=`@@MATH${math.length}@@`;math.push(String.raw`\(${tex}\)`);return key;};
  // Already authored TeX is protected before any other normalization.
  html=html.replace(/\\\([\s\S]*?\\\)/g,part=>{const key=`@@MATH${math.length}@@`;math.push(part);return key;});
  const exact=[
    ['𝔥=Λ⊗<sub>ℤ</sub>ℂ',String.raw`\mathfrak h=\Lambda\otimes_{\mathbb Z}\mathbb C`],
    ['𝔥(n)=𝔥⊗tⁿ',String.raw`\mathfrak h(n)=\mathfrak h\otimes t^n`],
    ['α(0)e<sup>λ</sup>=(α,λ)e<sup>λ</sup>',String.raw`\alpha(0)e^\lambda=(\alpha,\lambda)e^\lambda`],
    ['Y(a,z)=Σa<sub>n</sub>z<sup>−n−1</sup>',String.raw`Y(a,z)=\sum_n a_nz^{-n-1}`],
    ['L<sub>n</sub>=ω<sub>n+1</sub>',String.raw`L_n=\omega_{n+1}`],
    ['Aut(V<sup>♮</sup>)→Aut(B)',String.raw`\operatorname{Aut}(V^\natural)\to\operatorname{Aut}(B)`],
    ['Aut(V<sup>♮</sup>)≅𝕄',String.raw`\operatorname{Aut}(V^\natural)\cong\mathbb M`],
    ['V<sub>n</sub>=V<sup>♮</sup><sub>n+1</sub>',String.raw`V_n=V_{n+1}^\natural`],
    ['V<sub>0</sub>=V<sup>♮</sup><sub>1</sub>=0',String.raw`V_0=V_1^\natural=0`],
    ['V<sub>n</sub>=V<sup>♮</sup><sub>n+1</sub>',String.raw`V_n=V_{n+1}^\natural`],
    ['u·v=u<sub>1</sub>v',String.raw`u\cdot v=u_1v`],
    ['Λ/2Λ',String.raw`\Lambda/2\Lambda`],
    ['λ↦−λ',String.raw`\lambda\mapsto-\lambda`],
    ['α(−n)',String.raw`\alpha(-n)`],
    ['α(n)',String.raw`\alpha(n)`],
    ['α(z)',String.raw`\alpha(z)`],
    ['ω/2',String.raw`\omega/2`],
    ['𝔪_(m,n)',String.raw`\mathfrak m_{(m,n)}`],
    ['(m−1)n=0',String.raw`(m-1)n=0`],
    ['24/16=3/2',String.raw`24/16=3/2`],
    ['−2mn',String.raw`-2mn`],
    ['−2n',String.raw`-2n`],
    ['n&gt;0',String.raw`n>0`],
    ['m&gt;0',String.raw`m>0`],
    ['i&gt;0',String.raw`i>0`],
    ['i≥3',String.raw`i\ge3`],
    ['m=1',String.raw`m=1`],
    ['n=0',String.raw`n=0`],
    ['n=−1',String.raw`n=-1`],
    ['n=1',String.raw`n=1`],
    ['(1,0)',String.raw`(1,0)`],
    ['(V<sub>Λ</sub><sup>T</sup>)<sup>+</sup>',String.raw`(V_\Lambda^T)^+`],
    ['(V<sub>Λ</sub><sup>+</sup>)<sub>1</sub>',String.raw`(V_\Lambda^+)_1`],
    ['V<sup>♮</sup><sub>n+1</sub>',String.raw`V_{n+1}^\natural`],
    ['V<sup>♮</sup><sub>mn+1</sub>',String.raw`V_{mn+1}^\natural`],
    ['V<sup>♮</sup><sub>1</sub>',String.raw`V_1^\natural`],
    ['V<sup>♮</sup><sub>2</sub>',String.raw`V_2^\natural`],
    ['V<sub>II₁,₁</sub>',String.raw`V_{II_{1,1}}`],
    ['V<sub>Λ</sub><sup>T</sup>',String.raw`V_\Lambda^T`],
    ['V<sub>Λ</sub><sup>+</sup>',String.raw`V_\Lambda^+`],
    ['Tr(g|V<sub>n</sub>)',String.raw`\operatorname{Tr}(g\mid V_n)`],
    ['Tr(g|V<sub>mn</sub>)',String.raw`\operatorname{Tr}(g\mid V_{mn})`],
    ['J(q)=Σc(k)q<sup>k</sup>',String.raw`J(q)=\sum_kc(k)q^k`],
    ['J(q)=Σc(n)q<sup>n</sup>',String.raw`J(q)=\sum_nc(n)q^n`],
    ['J(p)−J(q)',String.raw`J(p)-J(q)`],
    ['T<sub>1</sub>=J',String.raw`T_1=J`],
    ['T<sub>g</sub>',String.raw`T_g`],
    ['F<sub>g</sub>',String.raw`F_g`],
    ['V<sub>−1</sub>',String.raw`V_{-1}`],
    ['V<sub>0</sub>=0',String.raw`V_0=0`],
    ['J=j−744',String.raw`J=j-744`],
    ['j−744',String.raw`j-744`],
    ['j−720',String.raw`j-720`],
    ['c(0)=0',String.raw`c(0)=0`],
    ['g=1',String.raw`g=1`],
    ['g≠1',String.raw`g\ne1`],
    ['n=1、2、3、5',String.raw`n=1,2,3,5`],
    ['(0,0)',String.raw`(0,0)`],
    ['(1,−1)',String.raw`(1,-1)`],
    ['(1,n)',String.raw`(1,n)`],
    ['(1,1)',String.raw`(1,1)`],
    ['(1,2)',String.raw`(1,2)`],
    ['(m,n)',String.raw`(m,n)`],
    ['(m,1)',String.raw`(m,1)`],
    ['(m+1,0)',String.raw`(m+1,0)`],
    ['(α,λ)',String.raw`(\alpha,\lambda)`],
    ['(λ,λ)/2',String.raw`(\lambda,\lambda)/2`],
    ['(λ,μ)',String.raw`(\lambda,\mu)`],
    ['(α,w)',String.raw`(\alpha,w)`],
    ['(u,v)',String.raw`(u,v)`],
    ['M(1)',String.raw`M(1)`],
    ['II₁,₁',String.raw`II_{1,1}`],
    ['ℤ²',String.raw`\mathbb Z^2`],
    ['ℤ₂',String.raw`\mathbb Z_2`],
    ['2¹³',String.raw`2^{13}`],
    ['2²⁵',String.raw`2^{25}`],
    ['2¹²=4096',String.raw`2^{12}=4096`],
    ['196884=1+196883',String.raw`196884=1+196883`],
    ['24+2=26',String.raw`24+2=26`],
    ['0<sub> </sub>',String.raw`0`]
  ];
  exact.sort((a,b)=>b[0].length-a[0].length);
  for(const [literal,tex] of exact.filter(([literal])=>literal.includes('<')))
    if(html.includes(literal))html=html.replaceAll(literal,()=>keep(tex));
  // Legacy source uses HTML sub/sup for symbols. Convert the complete decorated atom.
  html=html.replace(/([A-Za-z0-9𝔪𝔥𝔣𝔭𝕄𝒞ΛΘΔαβλμρθηωεχκ∑Σ∏⊕]+)((?:<sub>[\s\S]*?<\/sub>|<sup>[\s\S]*?<\/sup>)+)/g,(_,base,script)=>keep(graphPlainTex(base+script)));
  for(const [literal,tex] of exact.filter(([literal])=>!literal.includes('<')))
    if(html.includes(literal))html=html.replaceAll(literal,()=>keep(tex));
  // In explanatory sentences a single mathematical symbol is still mathematics.
  html=html.split(/(<[^>]+>|@@MATH\d+@@)/g).map(part=>{
    if(!part||part.startsWith('<')||/^@@MATH\d+@@$/.test(part))return part;
    part=part.replace(/\b(?:Aut|GL|SL)\([^)]*\)/g,term=>keep(graphPlainTex(term)));
    part=part.replace(/\b(?:[cCJjTtFWBEPH]|dim|wt|rad)\([^)]*\)(?:\s*[=≅−+*/]\s*[A-Za-z0-9𝔪𝕄Λℝℤℂ−+*/()]*)?/g,term=>keep(graphPlainTex(term)));
    part=part.replace(/[𝔪𝔥𝔣𝔭𝕄𝒞ΛΘΔλμναβρθωεηχδκφΦΨπσℤℂℝ](?:[₀-₉²³ⁿⁱᵢᵣ]+)?/gu,term=>keep(graphPlainTex(term)));
    part=part.replace(/(?<![A-Za-z])(?:g|m|n|p|q|r|c|E|F|H|J|K|T|V|W|B)(?![A-Za-z])/g,term=>keep(term));
    return part;
  }).join('');
  return html.replace(/@@MATH(\d+)@@/g,(_,n)=>math[Number(n)]);
}
for(const [id,detail] of Object.entries(graphDeepDetails)){
  const override=graphInlineOverrides[id];
  if(override?.lead)detail.lead=override.lead;
  detail.lead=graphMathifyProse(detail.lead);
  for(const section of detail.sections){
    if(override?.sections?.[section.h])section.p=override.sections[section.h];
    if(section.p)section.p=graphMathifyProse(section.p);
    if(section.items)section.items=section.items.map((item,i)=>graphMathifyProse(graphInlineItemOverrides[id]?.[section.h]?.[i]??item));
    if(section.caption)section.caption=graphMathifyProse(section.caption);
    if(id==='homology'&&section.h==='正根与链复形')delete section.f;
    section.h=graphMathifyHeading(section.h);
  }
}
graphDeepDetails.golay.path=graphDeepDetails.golay.path.replace('Leech 格 Λ',String.raw`Leech 格 \(\Lambda\)`);
