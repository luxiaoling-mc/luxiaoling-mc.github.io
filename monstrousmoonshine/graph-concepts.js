/* Explanatory branches: these are mathematical background, not proof dependencies. */
const conceptSection=(h,p,tex,items)=>({h,p,tex,items});
Object.assign(graphDeepDetails,{
  voaConcept:{
    lead:String.raw`VOA 把“态”组织成可相乘的场。格构造、月光模和后面的物理态计算都使用这套语言。`,
    sections:[
      conceptSection('定义：态、场与分次',String.raw`在本页采用的约定下，顶点算子代数由分次空间 \(V=\bigoplus_{n\ge0}V_n\)、态–场对应 \(Y\)、真空 \(\mathbf1\) 和共形向量 \(\omega\) 构成；每个 \(V_n\) 有限维。态 \(a\) 对应的场展开为无穷多个模式 \(a_n\)。`,String.raw`Y(a,z)=\sum_{n\in\mathbb Z}a_nz^{-n-1}`),
      conceptSection('公理怎样约束场',String.raw`这些条件保证不同态产生的场可以一致地作用与相乘。Jacobi 恒等式统一了交换、结合及局部性；在实际构造中，局部性是最直观的检验之一。`,String.raw`(z_1-z_2)^N[Y(a,z_1),Y(b,z_2)]=0`,[
        String.raw`<strong>真空</strong><span>\(Y(\mathbf1,z)=\mathrm{id}\)；\(Y(a,z)\mathbf1\) 的常数项是 \(a\)。</span>`,
        String.raw`<strong>平移</strong><span>\(D=L_{-1}\)，且 \(Y(Da,z)=\partial_zY(a,z)\)。</span>`,
        String.raw`<strong>局部性</strong><span>对每一对 \(a,b\)，某个足够大的整数 \(N\) 使上式成立。</span>`
      ]),
      conceptSection('共形向量给出什么',String.raw`共形向量 \(\omega\) 生成算符 \(L_n=\omega_{n+1}\)。其中 \(L_0\) 测量共形权，\(L_{-1}\) 产生平移；中心荷 \(c\) 则刻画 Virasoro 对易关系中的中心项。格 VOA \(V_\Lambda\) 和月光模 \(V^\natural\) 都有 \(c=24\)。`,String.raw`L_n=\omega_{n+1},\qquad L_0v=nv\quad(v\in V_n)`),
      conceptSection('这条链中的术语边界',String.raw`\(V_\Lambda\) 与 \(V^\natural\) 是 VOA。偶不定格 \(II_{1,1}\) 也给出带共形向量的顶点代数，但其权谱不下有界；因此 \(V_{II_{1,1}}\) 以及总载体 \(W=V^\natural\otimes V_{II_{1,1}}\) 在这一严格定义下不称为 VOA。物理态与无鬼定理正是在后者上工作。`)
    ]
  },
  orbifoldConcept:{
    lead:String.raw`在二维共形场论里，\(\mathbb Z_2\) orbifold 是把反演当作离散规范对称：旧态要投影，绕圈后才差一个反演的新态也要加入。月光模是这套物理图像的一种精确手征实现。`,
    sections:[
      conceptSection('物理图像：把反演变成对称',String.raw`先把 \(24\) 个自由玻色子的动量紧致化在 Leech 格上。反演把每个坐标和格动量同时送到相反数；几何上可想象为把点 \(x\) 与 \(-x\) 识别。量子理论中的 orbifold 比几何取商多一步：必须同时说明弦可以怎样在这个商空间里闭合。`,String.raw`X^i\longmapsto-X^i,\qquad \theta:\lambda\longmapsto-\lambda`),
      conceptSection('一圈之后：两种闭合方式',String.raw`沿弦的世界面空间坐标 \(\sigma\) 绕一周，普通闭弦回到原位置；在商空间里，弦也可以只回到与原位置等价的反演像。前者给未扭曲扇区，后者给 \(\theta\) 扭曲扇区。式中的等号须按格平移理解；这幅图像用于解释边界条件，后面构造的是相应的手征态空间。`,String.raw`\begin{aligned}X(\sigma+2\pi)&=X(\sigma)\pmod\Lambda &&\text{未扭曲},\\ X(\sigma+2\pi)&=-X(\sigma)\pmod\Lambda &&\text{扭曲}.\end{aligned}`),
      conceptSection('投影为什么不等于全部 orbifold',String.raw`在旧扇区，对称态由投影算符 \(P_+=(1+\theta)/2\) 选出，得到 \(V_\Lambda^+\)。扭曲扇区也须用相容的对合提升取不变态，才有完整的两类状态。在完整二维理论的世界面环面图像中，空间圈与时间圈各可有一次反演；模变换会交换这两个圈，说明只保留旧扇区的投影并不封闭。`,String.raw`P_+=\frac{1+\theta}{2},\qquad Z_{\mathrm{orb}}=\frac12\sum_{a,b\in\{1,\theta\}}Z_{a,b}`,[
        String.raw`<strong>空间圈的标记</strong><span>\(a=1\) 或 \(\theta\)：决定普通边界条件还是扭曲边界条件。</span>`,
        String.raw`<strong>时间圈的标记</strong><span>\(b=1\) 或 \(\theta\)：在迹中插入对称作用，完成投影。</span>`
      ]),
      conceptSection('反号边界怎样变成半整数模',String.raw`绕圈反号意味着场的展开必须具有反周期性。普通振子由整数 \(n\) 标记；扭曲振子改由 \(r\in\mathbb Z+\tfrac12\) 标记，也没有普通的零模。每个被反演的实玻色子使扭曲真空的共形权上移 \(1/16\)，所以 \(24\) 个方向合计为 \(3/2\)。`,String.raw`\alpha(r),\quad r\in\mathbb Z+\tfrac12;\qquad h_{\mathrm{tw}}=24\cdot\frac1{16}=\frac32`),
      conceptSection('新的地面态从哪里来',String.raw`扭曲态不能只靠半整数振子。Leech 格的模 \(2\) 数据与中心扩张产生一个有限群表示 \(T\)，维数为 \(2^{12}=4096\)；它承载扭曲真空的有限简并。这个数字是手征扭曲模的表示维数，不能直接当成几何商空间的固定点数。`,String.raw`V_\Lambda^T\simeq M(1)[\theta]\otimes T,\qquad \dim T=2^{12}`),
      conceptSection('为什么最后仍是整数权',String.raw`扭曲真空从权 \(3/2\) 开始，而一次负半整数振子再增加 \(1/2\)。FLM 选择相容的对合提升，并取本页记作 \((V_\Lambda^T)^+\) 的特征空间，使留下的扭曲态从整数权 \(2\) 开始；它不会重新带来权 \(1\) 态。`,String.raw`\frac32+\frac12=2,\qquad \bigl((V_\Lambda^T)^+\bigr)_1=0`),
      conceptSection('两扇区怎样成为同一个理论',String.raw`把 \(V_\Lambda^+\) 与扭曲固定部分写成直和只是列出了态。FLM 还要构造把两类态互相作用的顶点场，核对局部性与 Jacobi 恒等式；完成这一步才得到月光 VOA。它的权 \(1\) 为零，权 \(2\) 则成为后面的 Griess 代数。`,String.raw`V^\natural=V_\Lambda^+\oplus(V_\Lambda^T)^+`),
      conceptSection('物理语言与本页对象的边界',String.raw`这里的 \(V_\Lambda\) 和 \(V^\natural\) 是手征代数，不是整套左右运动的闭弦理论。边界条件和四种环面标记是帮助理解 orbifold 的物理图像；具体的扭曲模、对合提升及跨扇区场由 FLM 代数地构造。初始 \(\theta\) 作用于 \(V_\Lambda\)，最终月光模中按两扇区取 \(\pm1\) 的对合 \(z\) 则作用于 \(V^\natural\)。`)
    ]
  },
  virasoroConcept:{
    lead:String.raw`Virasoro 代数控制共形权与“初级态”条件，是从顶点代数抽取物理态的约束语言。`,
    sections:[
      conceptSection('对易关系',String.raw`VOA 的共形向量产生一族算符 \(L_n\)。它们并不交换：除通常的 \((m-n)L_{m+n}\) 外，还带由中心荷 \(c\) 决定的中心项。`,String.raw`[L_m,L_n]=(m-n)L_{m+n}+\frac{c}{12}(m^3-m)\delta_{m+n,0}`),
      conceptSection('权、平移与正模',String.raw`\(L_0\) 的特征值是共形权，\(D=L_{-1}\) 是平移算符；正模 \(L_i\)（\(i>0\)）的湮灭条件选出初级态。因此本页的“权 1 物理态”不是仅按权重筛选。`),
      conceptSection('物理态条件',String.raw`在总顶点代数 \(W\) 中，权 \(k\) 的初级态空间同时满足两个条件。后续取 \(P^1\)，再商去 \(DP^0\) 与退化型的根基，得到魔群李代数。`,String.raw`P^k=\{v\in W:L_0v=kv,\ L_iv=0\ (i>0)\}`),
      conceptSection('为什么出现中心荷 26',String.raw`月光模的中心荷是 \(24\)，\(II_{1,1}\) 的格顶点代数贡献 \(2\)，张量后为 \(c(W)=26\)。这个数使弦论无鬼定理能够识别非零动量的物理态分次。`,String.raw`c(W)=c(V^\natural)+c(V_{II_{1,1}})=24+2=26`)
    ]
  },
  gkmConcept:{
    lead:String.raw`广义 Kac–Moody 代数容许虚单根；这让魔群李代数的无限多单根与分母乘积进入同一框架。`,
    sections:[
      conceptSection('比通常 Kac–Moody 多了什么',String.raw`根仍按格分次，非零分次的维数称为根重数。通常 Kac–Moody 的单根是实的；广义版本还允许范数非正的虚单根，并允许它们带重数。实单根产生 Weyl 反射，虚单根不产生这种反射。`),
      conceptSection('分母公式的修正项',String.raw`正根的乘积仍与 Weyl 群的交错和相等，但虚单根使右侧多出修正项 \(S_{\mathrm{im}}\)。该项按两两正交的虚单根组合取交错符号；没有虚单根时它退化为 \(1\)。`,String.raw`\begin{aligned}
e^\rho\prod_{\alpha>0}(1-e^{-\alpha})^{\operatorname{mult}(\alpha)}
&=\sum_{w\in W}\det(w)\,w\!\left(e^\rho S_{\mathrm{im}}\right)
\end{aligned}`),
      conceptSection('魔群李代数的具体根',String.raw`在 \(\mathfrak m\) 中，根格是 \(II_{1,1}\)，\((m,n)\) 的范数为 \(-2mn\)。唯一实单根是 \((1,-1)\)；虚单根为 \((1,n)\)（\(n>0\)），重数是 \(J\) 的系数 \(c(n)\)。`,String.raw`\operatorname{mult}(1,n)=c(n),\qquad n>0`),
      conceptSection('它如何推动证明',String.raw`把 \(\mathfrak m\) 的根重数放进分母公式，得到 \(J(p)-J(q)\) 的二变量乘积。再保留根空间上的魔群表示并取迹，便进入扭曲分母恒等式与 Thompson 级数的递推。`)
    ]
  }
});

// General definitions live in the explanatory branches. The main nodes keep
// their construction-specific or proof-specific facts.
graphDeepDetails.vlambda.sections=graphDeepDetails.vlambda.sections.filter(s=>!['VOA 到底包含什么','真空、平移与局部性'].includes(s.h));
graphDeepDetails.lie.sections=graphDeepDetails.lie.sections.filter(s=>s.h!=='广义 Kac–Moody 的特征');
graphDeepDetails.denom.sections=graphDeepDetails.denom.sections.filter(s=>s.h!=='一般 Borcherds 分母恒等式');
