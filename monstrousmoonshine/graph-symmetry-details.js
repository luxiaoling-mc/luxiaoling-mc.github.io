/* FLM ``10.3, 10.4, 12.3: the bridge from the moonshine module to the Monster. */
Object.assign(graphDeepDetails,{
  weight2:{
    lead:String.raw`先在月光模的两个扇区分别找出共形权 \(2\) 的态，再把它们合成 Griess 代数的底层空间。`,
    sections:[
      detailSection('从轨道折叠逐层取权',String.raw`记 \(\mathfrak h=\Lambda\otimes_{\mathbb Z}\mathbb C\)。未扭曲固定扇区给出 \(\mathfrak f\)，扭曲固定扇区给出 \(\mathfrak p\)。这只是权 \(2\) 的向量空间分解；下一节点才把它们装备为一个代数。`,String.raw`B=V^\natural_2=(V_\Lambda^+)_2\oplus((V_\Lambda^T)^+)_2=\mathfrak f\oplus\mathfrak p`),
      detailSection('未扭曲块',String.raw`两次权 \(1\) 振子组成 \(S^2(\mathfrak h)\)，维数为 \(24\cdot25/2=300\)。Leech 格中范数 \(4\) 的向量有 \(196560\) 个；在反演固定部分，\(\alpha\) 与 \(-\alpha\) 配成一个态 \(x_\alpha^+\)，贡献 \(98280\) 个方向。`,String.raw`\begin{aligned}\mathfrak f&=S^2(\mathfrak h)\oplus\!\!\bigoplus_{\{\pm\alpha\}\subset\Lambda_4}\mathbb Cx_\alpha^+\\[-2pt]\dim\mathfrak f&=300+98280=98580\end{aligned}`),
      detailSection('扭曲块',String.raw`扭曲 Fock 真空的权是 \(24/16=3/2\)。施加一个权 \(1/2\) 的负半整数模后恰到权 \(2\)：它可沿 \(\mathfrak h\) 的 \(24\) 个方向振荡，并带上 \(4096\) 维地面态 \(T\)。`,String.raw`\mathfrak p\cong\mathfrak h(-\tfrac12)\otimes T,\qquad\dim\mathfrak p=24\cdot2^{12}=98304`),
      detailSection('两种拆分不可混同',String.raw`按扇区拆分得到 \(98580+98304\)；按最终魔群表示拆分则是平凡方向与 \(196883\) 维不可约表示。前者来自构造，后者在魔群作用建立之后才成立。`,String.raw`196884=(300+98280)+98304=1+196883`),
      detailSection('可见子群下的四块',String.raw`共形向量占 \(S^2(\mathfrak h)\) 的一维，其正交补是 \(299\) 维。在 Leech 型子群下还可看到 \(1,299,98280,98304\) 四块；这使群作用能逐块检验。`,String.raw`196884=1+299+98280+98304`)
    ]
  },
  griess:{
    lead:String.raw`Griess 代数是 \(B=V^\natural_2\) 上带单位和不变型的交换非结合代数；它把两个轨道折叠扇区联成一个可检验的有限维对象。`,
    sections:[
      detailSection('定义的两个直和成分',String.raw`未扭曲块 \(\mathfrak f\) 由振子的对称平方及范数 \(4\) 格向量的反演配对态 \(x_\alpha^+\) 张成；扭曲块 \(\mathfrak p\) 是一个半整数振子作用在 \(4096\) 维地面态 \(T\) 上。记 \(\Lambda_4=\{\alpha\in\Lambda:(\alpha,\alpha)=4\}\)。`,String.raw`\begin{aligned}B&=\mathfrak f\oplus\mathfrak p,\\[-2pt]\mathfrak f&=S^2(\mathfrak h)\oplus\mathbb C\{x_\alpha^+:\{\pm\alpha\}\subset\Lambda_4\},\\[-2pt]\mathfrak p&\cong\mathfrak h\otimes T\end{aligned}`),
      detailSection('乘法来自顶点场',String.raw`对权 \(2\) 态 \(u,v\)，取 \(Y(u,z)\) 的第 \(1\) 模。因为月光模权 \(1\) 消失，乘法交换；通常不满足结合律。它按两个扇区的奇偶性闭合。`,String.raw`\begin{aligned}u\times v&=u_1v,\\[-2pt]\mathfrak f\times\mathfrak f&\subseteq\mathfrak f,\quad\mathfrak f\times\mathfrak p\subseteq\mathfrak p,\quad\mathfrak p\times\mathfrak p\subseteq\mathfrak f\end{aligned}`),
      detailSection('跨扇区乘法怎样确定',String.raw`\(\mathfrak f\) 内部的乘法由格顶点算子计算；它对 \(\mathfrak p\) 的作用来自扭曲顶点算子。给两块选非退化的对称型后，要求型与乘法相容，便确定 \(\mathfrak p\times\mathfrak p\) 在 \(\mathfrak f\) 中的值。`,String.raw`\langle u\times v,w\rangle=\langle u,v\times w\rangle`),
      detailSection('一个局部乘法例子',String.raw`在 FLM 的归一化中，\(g^2,h^2,gh\in S^2(\mathfrak h)\) 是二次振子态，\(x_\alpha^+\) 是一对相反范数 \(4\) 格态的固定组合。公式显示振子内积和格动量都进入乘法。`,String.raw`\begin{aligned}g^2\times h^2&=4(g,h)\,gh,\\[-2pt]g^2\times x_\alpha^+&=(g,\alpha)^2x_\alpha^+\end{aligned}`),
      detailSection('单位与不变型',String.raw`共形向量的第 \(1\) 模是 \(L_0\)，在权 \(2\) 上等于 \(2\)，所以 \(\omega/2\) 是单位。对 \(u,v\in B\)，\(u_3v\) 落在一维真空空间，其系数给出非退化、对称且与乘法相容的不变型。`,String.raw`\frac{\omega}{2}\times u=u,\qquad u_3v=\langle u,v\rangle\mathbf1`),
      detailSection('原始代数与带单位版本',String.raw`Griess 先构造了与 \(196883\) 维非平凡表示相关的模型。FLM 在月光模权 \(2\) 层采用带自然单位的 \(196884\) 维版本，称它为原始代数的一种轻微修改。本页的 \(B\) 始终指这个带单位版本。`),
      detailSection('群论为何从这里进入',String.raw`任何 VOA 自同构都保留权分次、顶点乘法与不变型，因而限制为 \(B\) 的代数自同构。Leech 型子群和额外变换可先在这有限维空间检验；最终的 \(1+196883\) 是魔群表示分解。`,String.raw`\operatorname{Aut}(V^\natural)\longrightarrow\operatorname{Aut}(B)`)
    ]
  },
  weight2Generates:{
    lead:String.raw`权 \(2\) 不只给出可观察的截面：它生成整个月光 VOA，所以完整自同构在这里已被唯一确定。`,
    sections:[
      detailSection('生成性是什么',String.raw`FLM 的主定理说明，反复使用 \(B=V^\natural_2\) 中态的顶点算子模式，可产生 \(V^\natural\) 的全部更高权态。这里的“生成”指 VOA 的模式作用，并非只用 Griess 乘法相乘。`,String.raw`V^\natural=\langle B\rangle_{\mathrm{VOA}}`),
      detailSection('限制映射为什么是单射',String.raw`若 VOA 自同构在 \(B\) 上恒等，它与每个 \(u\in B\) 的所有模式 \(u_n\) 相容；由生成性，它便在整个月光模上恒等。`,String.raw`\operatorname{Aut}(V^\natural)\hookrightarrow\operatorname{Aut}(B)`),
      detailSection('满射需要额外结果',String.raw`生成性本身不能保证任意 \(B\) 的代数自同构都能延拓。FLM 已构造魔群 \(\mathbb M\) 在整个 \(V^\natural\) 上的作用；Tits 的定理给出 \(\operatorname{Aut}(B)=\mathbb M\)。两边夹住上述单射，才得到全自同构群的等号。`,String.raw`\mathbb M\subseteq\operatorname{Aut}(V^\natural)\hookrightarrow\operatorname{Aut}(B)=\mathbb M`),
      detailSection('为什么不能只看维数',String.raw`作为向量空间，\(B\) 有 \(196884\) 维，任意可逆线性变换远多于魔群元素。这里必须保持乘法、单位和不变型。`)
    ]
  },
  cfsgConcept:{
    lead:String.raw`有限单群分类定理给魔群一个坐标：它属于 \(26\) 个零星单群；本证明树中的构造则说明这个具体群为何出现。`,
    sections:[
      detailSection('分类定理说什么',String.raw`每个有限单群都属于四类之一：素数阶循环群、次数至少 \(5\) 的交错群、有限 Lie 型群，或 \(26\) 个零星单群。“零星”表示不属于前三类无限族。`,String.raw`G\in\{C_p,\ A_n\ (n\ge5),\ \text{Lie 型},\ \text{26 个零星群}\}`),
      detailSection('这条链里的三个群',String.raw`Golay 码的置换对称给 Mathieu 群 \(M_{24}\)；Leech 格等距群取中心商给 Conway 群 \(\mathrm{Co}_1\)；月光 VOA 的全自同构群是魔群 \(\mathbb M\)。它们都在零星群表中，构造来源却不同。`,String.raw`M_{24},\qquad\mathrm{Co}_1,\qquad\mathbb M`),
      detailSection('分类如何帮助阅读',String.raw`分类表给这些群命名和定位，也说明魔群是最大的零星单群；它本身不构造 Griess 乘法、不产生额外对称，也不能代替 \(\operatorname{Aut}(V^\natural)=\mathbb M\) 的证明。`),
      detailSection('实际使用的群论结果',String.raw`在这条构造线上，更直接的结果是 Griess 对生成群的存在与单性的分析，以及 Tits 对 Griess 代数全自同构群的确定。它们与有限单群分类的宏观陈述应分清。`)
    ]
  },
  oddOrderConcept:{
    lead:String.raw`Feit–Thompson 奇数阶定理是分类史上的基础结果；它说明非交换有限单群必有对合，因此对合中心化子是自然的研究入口。`,
    sections:[
      detailSection('定理与直接推论',String.raw`每个有限奇数阶群都可解。非交换单群不可解，因此它的阶为偶数；由 Cauchy 定理，群中存在阶为 \(2\) 的元素。`,String.raw`|G|\ \text{为奇数}\Longrightarrow G\ \text{可解},\qquad G\ \text{非交换单群}\Longrightarrow 2\mid|G|`),
      detailSection('为何看中心化子',String.raw`选定对合 \(z\) 后，\(C_G(z)\) 保留它及相关的 \(2\)-局部结构。对魔群，轨道折叠扇区给出的 \(2\mathrm B\) 对合有形如 \(2^{1+24}\!\cdot\mathrm{Co}_1\) 的中心化子。`,String.raw`C_{\mathbb M}(z)\cong2^{1+24}\!\cdot\mathrm{Co}_1`),
      detailSection('这一定理的边界',String.raw`奇数阶定理只保证某个对合存在，不指定它是 \(2\mathrm B\)，也不计算其中心化子或自动造出魔群。这里的 \(z\)、\(C\) 与外部变换仍须具体构造。`)
    ]
  }
});

Object.assign(graphDeepDetails.centralizer,{
  lead:String.raw`Leech 格的等距变换和中心扩张在月光模上形成可见子群 \(C\)，它最终成为一个 \(2\mathrm B\) 对合的中心化子。`,
  sections:[
    detailSection('先用对合标记扇区',String.raw`月光模中的 \(z\) 在未扭曲固定部分作用为 \(+1\)，在扭曲固定部分作用为 \(-1\)。它与最初在 \(V_\Lambda\) 上的格反演有关，但两者作用于不同阶段的空间。`,String.raw`z|_{V_\Lambda^+}=+1,\qquad z|_{(V_\Lambda^T)^+}=-1`),
    detailSection('Leech 数据给出什么',String.raw`格的中心扩张给出一个阶为 \(2^{25}\) 的 extraspecial \(2\)-群；格等距群 \(\mathrm{Co}_0\) 除去中心 \(\{\pm1\}\) 后给出 \(\mathrm{Co}_1\)。二者组织成保持扇区的扩张 \(C\)。`,String.raw`C\cong2^{1+24}\!\cdot\mathrm{Co}_1,\qquad\mathrm{Co}_1=\mathrm{Co}_0/\{\pm1\}`),
    detailSection('中心化子的识别',String.raw`完成魔群构造后，\(z\) 属于其 \(2\mathrm B\) 共轭类，且 \(C=C_{\mathbb M}(z)\)。在魔群尚未构造出来时，先有的是由码、格和扭曲模显式作用得到的 \(C\)，不应倒过来把等式当成它的定义。`,String.raw`C_{\mathbb M}(z)\cong2^{1+24}\!\cdot\mathrm{Co}_1,\qquad z\in2\mathrm B`),
    detailSection('为何仍需外部变换',String.raw`\(C\) 保留两扇区分解，因此仍不足以生成整个月光模的全部对称。FLM 随后构造不保留这条分界的变换，并验证其对完整顶点算子结构的作用。`)
  ]
});
Object.assign(graphDeepDetails.triality,{
  lead:String.raw`triality 为可见子群 \(C\) 补上跨扇区的对称，是从 Leech 型局部结构走向魔群的关键。`,
  sections:[
    detailSection('缺口在哪里',String.raw`只从格等距与中心扩张得到的 \(C\) 不混合未扭曲和扭曲部分。若想得到更大的群，必须找一个在这两块空间之间移动信息的自同构。`),
    detailSection('triality 的构造',String.raw`FLM 借助三个互相关联的格、码和扭曲表示，建立 \(S_3\) 型的 triality 算符，再经适当修正得到作用在月光模上的外部变换 \(\sigma\)。它并非单纯的格等距。`,String.raw`\langle C,\sigma\rangle\curvearrowright V^\natural`),
    detailSection('检查的是完整的 VOA',String.raw`要成为月光模自同构，\(\sigma\) 必须固定真空与共形向量，并与所有顶点场相容。于是它也保留权 \(2\) 的 Griess 乘法及不变型；单在一块上给出线性变换尚不足够。`,String.raw`\sigma Y(u,z)\sigma^{-1}=Y(\sigma u,z)`),
    detailSection('群怎样扩张',String.raw`\(C\) 与 \(\sigma\) 生成的群作用在 \(B\) 上是忠实的。FLM 将其作用延伸到所有权空间；Griess 与 Tits 的有限群论结果再把这群识别为魔群及 \(B\) 的全自同构群。`)
  ]
});
Object.assign(graphDeepDetails.monster,{
  lead:String.raw`由 Leech 型子群和外部变换生成的群被识别为魔群；它作用在月光模的全部权空间上。`,
  sections:[
    detailSection('具体群从哪里来',String.raw`令 \(C\) 为 \(2\mathrm B\) 对合的 Leech 型中心化子，\(\sigma\) 为 FLM 构造的外部变换。生成群作用于整个月光模；Griess 的有限群论分析证明相应群有限且单。`,String.raw`\mathbb M=\langle C,\sigma\rangle\subseteq\operatorname{Aut}(V^\natural)`),
    detailSection('为什么是全自同构群',String.raw`FLM 证明 \(V^\natural\) 由 \(B\) 生成，因此自同构限制到 \(B\) 是单射。Tits 证明 \(B\) 的全自同构群恰是魔群；前述构造已把魔群嵌入 \(\operatorname{Aut}(V^\natural)\)，于是两者相等。`,String.raw`\operatorname{Aut}(V^\natural)\cong\operatorname{Aut}(B)\cong\mathbb M`),
    detailSection('群的规模与分类位置',String.raw`魔群是 \(26\) 个零星单群中阶最大的一个；阶约为 \(8.08\times10^{53}\)。分类定理解释它的地位，具体构造与识别依赖前面这些代数结构。`,String.raw`|\mathbb M|=2^{46}3^{20}5^9 7^6 11^2 13^3 17\cdot19\cdot23\cdot29\cdot31\cdot41\cdot47\cdot59\cdot71`),
    detailSection('接到月光级数',String.raw`VOA 自同构固定共形向量，所以与 \(L_0\) 对易，并保持每个有限维权空间 \(V_k^\natural\)。对任意 \(g\in\mathbb M\) 在这些空间逐级取迹，下一节点便得到 Thompson 级数。`,String.raw`gV_k^\natural=V_k^\natural,\qquad T_g(q)=\sum_{n\ge-1}\operatorname{Tr}(g\mid V_{n+1}^\natural)q^n`)
  ]
});
