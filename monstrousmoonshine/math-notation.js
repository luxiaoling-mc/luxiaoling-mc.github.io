/* Display mathematics is authored as TeX, independently of the explanatory
   HTML. MathJax is bundled locally so the page also works without a CDN. */
window.MathJax = {
  tex: {inlineMath: [['\\(','\\)']], displayMath: [['\\[','\\]']]},
  svg: {fontCache: 'local'},
  options: {skipHtmlTags: ['script','noscript','style','textarea','pre','code']},
  startup: {ready: () => {
    MathJax.startup.defaultReady();
    MathJax.startup.promise.then(() => window.dispatchEvent(new Event('mathjax-ready')));
  }}
};

const graphMath = {
  golay: {
    relation: String.raw`\mathcal C_{24}:[24,12,8]`
  },
  leech: {
    relation: String.raw`\Lambda^*=\Lambda,\qquad \min_{0\ne\lambda\in\Lambda}(\lambda,\lambda)=4`,
    sections: {
      1: String.raw`\operatorname{wt}(e^\lambda)=\frac{(\lambda,\lambda)}{2},\qquad \Lambda_2=\varnothing`,
      2: String.raw`\Theta_\Lambda(q)=\sum_{\lambda\in\Lambda}q^{(\lambda,\lambda)/2}`
    }
  },
  heisenberg: {
    relation: String.raw`\alpha(-n),\ n>0\quad\longrightarrow\quad M(1)`,
    sections: {
      0: String.raw`[\alpha(m),\beta(n)]=m(\alpha,\beta)\,\delta_{m+n,0}K`,
      1: String.raw`M(1)=S\!\left(\bigoplus_{n>0}\mathfrak h(-n)\right)`,
      3: String.raw`\omega=\frac12\sum_{i=1}^{24}h_i(-1)^2\mathbf1,\qquad c=24`,
      4: String.raw`\begin{aligned}\operatorname{Tr}_{M(1)}q^{L_0-1}&=q^{-1}\prod_{n\ge1}\\[-2pt]&\quad(1-q^n)^{-24}\end{aligned}`
    }
  },
  momentum: {
    relation: String.raw`\lambda\in\Lambda\longmapsto e^\lambda`,
    sections: {
      0: String.raw`\mathbb C\{\Lambda\}=\operatorname{span}_{\mathbb C}\{e^\lambda:\lambda\in\Lambda\}`,
      1: String.raw`e^\lambda e^\mu=\varepsilon(\lambda,\mu)e^{\lambda+\mu}`
    }
  },
  vlambda: {
    relation: String.raw`V_\Lambda=M(1)\otimes\mathbb C\{\Lambda\}`,
    sections: {
      0: String.raw`V_\Lambda=M(1)\otimes\mathbb C\{\Lambda\}`,
      1: String.raw`\begin{aligned}Y(e^\lambda,z)&=E^{-}(-\lambda,z)E^{+}(-\lambda,z)\\[-2pt]&\qquad\cdot e^\lambda z^{\lambda(0)}\end{aligned}`,
      3: String.raw`\begin{aligned}&\operatorname{wt}\!\left(\prod_{i=1}^{r}\alpha_i(-n_i)e^\lambda\right)\\[-2pt]&=\sum_{i=1}^{r}n_i+\frac{(\lambda,\lambda)}2\end{aligned}`,
      4: String.raw`\begin{aligned}\operatorname{Tr}_{V_\Lambda}q^{L_0-1}&=\frac{\Theta_\Lambda(q)}{\eta(q)^{24}}\\[-2pt]&=j(q)-720\end{aligned}`
    }
  },
  vplus: {
    relation: String.raw`V_\Lambda^{+}=\{v\in V_\Lambda:\theta v=v\}`,
    sections: {1: String.raw`\bigl(V_\Lambda^+\bigr)_1=0`}
  },
  vtwist: {
    relation: String.raw`V_\Lambda^{T}\simeq M(1)[\theta]\otimes T`,
    sections: {
      0: String.raw`M(1)[\theta]=S\!\left(\bigoplus_{\substack{r>0\\r\in\mathbb Z+1/2}}\mathfrak h(-r)\right)`,
      1: String.raw`V_\Lambda^T\simeq M(1)[\theta]\otimes T,\qquad \dim T=2^{12}`
    }
  },
  vtwistplus: {relation: String.raw`\bigl(V_\Lambda^T\bigr)^+`},
  vnatural: {
    relation: String.raw`V^\natural=V_\Lambda^+\oplus\bigl(V_\Lambda^T\bigr)^+`,
    sections: {
      0: String.raw`V^\natural=V_\Lambda^+\oplus\bigl(V_\Lambda^T\bigr)^+`,
      2: String.raw`\begin{aligned}\dim V^\natural_0&=1,\qquad V^\natural_1=0\\[-2pt]\dim V^\natural_2&=196884\end{aligned}`,
      3: String.raw`\operatorname{Tr}_{V^\natural}q^{L_0-1}=J(q)=j(q)-744`
    }
  },
  griess: {
    relation: String.raw`B=V^\natural_2=\mathfrak f\oplus\mathfrak p,\qquad u\times v=u_1v`,
    sections: {0: String.raw`B=V^\natural_2,\qquad u\cdot v=u_1v`}
  },
  weight2:{relation:String.raw`\dim\mathfrak f+\dim\mathfrak p=98580+98304=196884`},
  weight2Generates:{relation:String.raw`\operatorname{Aut}(V^\natural)\hookrightarrow\operatorname{Aut}(B)`},
  centralizer: {
    relation: String.raw`C_{\mathbb M}(2\mathrm B)\cong 2^{1+24}\!\cdot\mathrm{Co}_1`,
    sections: {1: String.raw`C_{\mathbb M}(2\mathrm B)\cong 2^{1+24}\!\cdot\mathrm{Co}_1`}
  },
  triality: {relation: String.raw`\langle\text{Leech 对称},\text{triality}\rangle\curvearrowright V^\natural`},
  monster: {
    relation: String.raw`\operatorname{Aut}(V^\natural)\cong\mathbb M`,
    sections: {0: String.raw`gY(u,z)v=Y(gu,z)gv`}
  },
  thompson: {
    relation: String.raw`T_g(q)=\sum_{n\ge-1}\operatorname{Tr}(g\mid V_n)q^n`,
    sections: {0: String.raw`T_g(q)=\sum_{n\ge-1}\operatorname{Tr}(g\mid V_n)q^n`}
  },
  ii: {
    relation: String.raw`II_{1,1}:\quad(mb_1+nb_2)^2=-2mn`,
    sections: {0: String.raw`(mb_1+nb_2)^2=-2mn`}
  },
  w: {
    relation: String.raw`W=V^\natural\otimes V_{II_{1,1}},\qquad c(W)=26`,
    sections: {0: String.raw`W=V^\natural\otimes V_{II_{1,1}}`}
  },
  physical: {
    relation: String.raw`\mathfrak m=\bigl(P^1/DP^0\bigr)/\operatorname{rad}`, 
    sections: {
      0: String.raw`P^1=\{v\in W:L_0v=v,\ L_iv=0\ (i>0)\}`,
      2: String.raw`\mathfrak m=\bigl(P^1/DP^0\bigr)/\operatorname{rad}`
    }
  },
  noghost: {
    relation: String.raw`\mathfrak m_{(m,n)}\cong V_{mn}=V^\natural_{mn+1}`,
    sections: {1: String.raw`\mathfrak m_{(m,n)}\cong V^\natural_{mn+1}=V_{mn},\quad(m,n)\ne(0,0)`}
  },
  lie: {
    relation: String.raw`\mathfrak m=\bigoplus_{(m,n)\in\mathbb Z^2}\mathfrak m_{(m,n)}`,
    sections: {
      0: String.raw`\mathfrak m=F\oplus H\oplus E,\qquad E=\bigoplus_{\substack{m>0\\n\in\mathbb Z}}\mathfrak m_{(m,n)}`,
      1: String.raw`[u,v]=u_0v\quad\text{在物理态商空间中}`
    }
  },
  roots: {
    relation: String.raw`(1,-1)\quad\text{与}\quad(1,n),\ n>0`,
    sections: {0: String.raw`\begin{aligned}(1,-1)&:\ \operatorname{mult}=1\\(1,n)&:\ \operatorname{mult}=c(n),\quad n>0\end{aligned}`}
  },
  denom: {
    relation: String.raw`\prod_{m>0,\,n\in\mathbb Z}(1-p^mq^n)^{c(mn)}`,
    sections: {0: String.raw`S=1-p\sum_{n>0}c(n)q^n`, 1: String.raw`p^{-1}S-q^{-1}w(S)=J(p)-J(q)`}
  },
  homology: {
    relation: String.raw`\Lambda(E)=H(E)`,
    sections: {
      0: String.raw`\begin{aligned}C_i(E)&=\bigwedge^i E\\[-2pt]H_i(E)&=\ker d_i/\operatorname{im}d_{i+1}\end{aligned}`,
      1: String.raw`\bigl(r,r+2\rho\bigr)=-2(m-1)n=0,\qquad \rho=(-1,0)`,
      2: String.raw`\begin{aligned}H_0(E)&=\mathbb R\\[-2pt]H_1(E)&=\sum_{n\in\mathbb Z}V_n\,p q^n=pJ(q)\end{aligned}`,
      3: String.raw`\begin{aligned}H_2(E)&=\sum_{m>0}V_m\,p^{m+1}\\[-2pt]\operatorname{ch}H_2&=pJ(p)-1\end{aligned}`,
      4: String.raw`H_i(E)=0\qquad(i\ge3)`,
      5: String.raw`\begin{aligned}p^{-1}\Lambda(E)&=\sum_{m\in\mathbb Z}V_m p^m\\[-2pt]&\quad-\sum_{n\in\mathbb Z}V_n q^n\end{aligned}`
    }
  },
  j: {
    relation: String.raw`J(q)=q^{-1}+196884q+\cdots`,
    sections: {0: String.raw`J(q)=q^{-1}+196884q+21493760q^2+\cdots`}
  },
  jprod: {
    relation: String.raw`J(p)-J(q)=\text{根的乘积}`,
    sections: {0: String.raw`\begin{aligned}J(p)-J(q)&=p^{-1}\prod_{\substack{m>0\\n\in\mathbb Z}}\\[-2pt]&\qquad(1-p^mq^n)^{c(mn)}\end{aligned}`}
  },
  candidates: {relation: String.raw`g\longmapsto F_g(q)`},
  haupt: {
    relation: String.raw`F_g(q)=q^{-1}+O(q)`,
    sections: {0: String.raw`F_g(q)=q^{-1}+O(q)`}
  },
  ferenbaugh: {
    relation: String.raw`F_g^{(m)}\longleftrightarrow F_{g^m}`,
    sections: {1: String.raw`F_g^{(m)}=F_{g^m}`}
  },
  seeds: {
    relation: String.raw`n\in\{1,2,3,5\}`,
    sections: {0: String.raw`c_g(n)=\operatorname{Tr}(g\mid V_n),\qquad n\in\{1,2,3,5\}`}
  },
  twisted: {
    relation: String.raw`\operatorname{Tr}(g^r\mid V_{mn})\quad\Longrightarrow\quad\text{递推}`,
    sections: {
      1: String.raw`\det(1-tg\mid U)=\exp\!\left(-\sum_{r\ge1}\frac{\operatorname{Tr}(g^r\mid U)}{r}t^r\right)`,
      3: String.raw`\begin{aligned}
        &p^{-1}\exp\!\left(-\sum_{r>0}\frac1r\sum_{\substack{m>0\\n\in\mathbb Z}}c_{g^r}(mn)\,p^{mr}q^{nr}\right)\\[4pt]
        &=T_g(p)-T_g(q)
      \end{aligned}`
    }
  },
  candidateSeeds: {
    relation: String.raw`[q^n]F_g=c_g(n)`,
    sections: {1: String.raw`[q^n]F_g=c_g(n),\qquad n\in\{1,2,3,5\}`}
  },
  compare: {
    relation: String.raw`\text{同一递推}+\text{同一初值}`,
    sections: {2: String.raw`[q^n]T_g=[q^n]F_g\qquad(g\in\mathbb M,\ n\ge-1)`}
  },
  theorem: {
    relation: String.raw`T_g(q)=F_g(q)\quad(g\in\mathbb M)`,
    sections: {0: String.raw`\begin{aligned}T_g(q)&=\sum_{n\ge-1}\operatorname{Tr}(g\mid V_n)q^n\\[-2pt]&=F_g(q)\end{aligned}`}
  },
  voaConcept:{relation:String.raw`(V,Y,\mathbf1,\omega)`},
  orbifoldConcept:{relation:String.raw`V^\natural=V_\Lambda^+\oplus(V_\Lambda^T)^+`},
  virasoroConcept:{relation:String.raw`L_n=\omega_{n+1},\qquad c(W)=26`},
  cfsgConcept:{relation:String.raw`\text{有限单群}=\text{无限族}\cup\text{26 个零星群}`},
  oddOrderConcept:{relation:String.raw`|G|\text{ 为奇数}\Longrightarrow G\text{ 可解}`},
  gkmConcept:{relation:String.raw`(\alpha,\alpha)\le0\quad\text{也可为单根}`}
};

const workshopMath = {
  moonshine: [
    String.raw`\begin{aligned}\operatorname{rk}\Lambda&=24,\quad\Lambda^*=\Lambda\\[-2pt]\min_{\lambda\ne0}(\lambda,\lambda)&=4\end{aligned}`,
    String.raw`\begin{aligned}[\alpha(m),\beta(n)]&=m(\alpha,\beta)\\[-2pt]&\quad\cdot\delta_{m+n,0}K\end{aligned}`,
    String.raw`M(1)=S\!\left(\mathfrak h\otimes t^{-1}\mathbb C[t^{-1}]\right)`,
    String.raw`\mathbb C\{\Lambda\}=\operatorname{span}\{e^\lambda:\lambda\in\Lambda\}`,
    String.raw`\begin{aligned}V_\Lambda&=M(1)\otimes\mathbb C\{\Lambda\}\\[-2pt]c&=24\end{aligned}`,
    String.raw`\theta:\lambda\mapsto-\lambda,\quad V_\Lambda^+\ \text{与}\ V_\Lambda^T`,
    String.raw`V_\Lambda^+=\{v\in V_\Lambda:\theta v=v\}`,
    String.raw`\begin{aligned}V_\Lambda^T&\simeq M(1)[\theta]\otimes T\\[-2pt]\dim T&=2^{12}\end{aligned}`,
    String.raw`V^\natural=V_\Lambda^+\oplus\bigl(V_\Lambda^T\bigr)^+`,
    String.raw`\begin{aligned}&\operatorname{Tr}_{V^\natural}q^{L_0-1}\\[-2pt]&\quad=J(q)\\[-2pt]J(q)&=q^{-1}+\\[-2pt]&\quad196884q+\cdots\\[-2pt]&=j(q)-744\end{aligned}`
  ],
  monster: [
    String.raw`\begin{aligned}B&=V^\natural_2\\[-2pt]\dim B&=196884\\[-2pt]&=1+196883\end{aligned}`,
    String.raw`C_{\mathbb M}(2\mathrm B)\cong2^{1+24}\!\cdot\mathrm{Co}_1`,
    String.raw`\begin{aligned}G&=\langle\text{Leech 对称},\\[-2pt]&\qquad\text{triality}\rangle\\[-2pt]G&\curvearrowright V^\natural\end{aligned}`,
    String.raw`\operatorname{Aut}(V^\natural)\cong\mathbb M`,
    String.raw`\begin{aligned}T_g(q)&=q^{-1}+\\[-2pt]&\quad\sum_{n\ge1}c_g(n)q^n\end{aligned}`
  ],
  lie: [
    String.raw`(mb_1+nb_2)^2=-2mn`,
    String.raw`\begin{aligned}W&=V^\natural\otimes V_{II_{1,1}}\\[-2pt]c(W)&=26\end{aligned}`,
    String.raw`\begin{aligned}P^1&=\{v:L_0v=v,\\[-2pt]&\qquad L_iv=0\ (i>0)\}\\[-2pt]&\quad P^1/DP^0\end{aligned}`,
    String.raw`\mathfrak m=\bigl(P^1/DP^0\bigr)/\operatorname{rad}`, 
    String.raw`\begin{aligned}\mathfrak m_{(m,n)}&\cong V_{mn}\\[-2pt]\mathfrak m_{(0,0)}&\cong\mathbb R^2\end{aligned}`,
    String.raw`\begin{aligned}&p^{-1}\prod_{\substack{m>0\\n\in\mathbb Z}}\\[-2pt]&\quad(1-p^mq^n)^{c(mn)}\\[-2pt]&=J(p)-J(q)\end{aligned}`,
    String.raw`\begin{aligned}\Lambda(E)&=H(E)\\[-2pt]H_1(E)&=pJ(q)\\[-2pt]\operatorname{ch}H_2(E)&=pJ(p)-1\end{aligned}`
  ]
};

const displayMath = tex => `<span class="math-tex">\\[${tex}\\]</span>`;
let mathTypesetQueue=Promise.resolve();
function typesetMath(element){
  const enqueue=()=>{
    mathTypesetQueue=mathTypesetQueue.then(()=>{
      if(!element.isConnected)return;
      return MathJax.typesetPromise([element]);
    }).catch(error=>console.error('数学公式排版失败',error));
  };
  if(window.MathJax?.typesetPromise)enqueue();
  else window.addEventListener('mathjax-ready',enqueue,{once:true});
}
function clearTypesetMath(element){
  if(window.MathJax?.typesetClear) MathJax.typesetClear([element]);
}
