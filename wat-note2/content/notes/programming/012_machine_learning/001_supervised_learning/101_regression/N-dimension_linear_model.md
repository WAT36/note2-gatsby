---
title: "N次元線形回帰モデル"
date: "2019-10-26T21:31:30+09:00"
description: ""
tags: []
---

先程までの章では1次元(直線モデル)、2次元(面モデル)の入力データを扱ってきたが、そこから更に次元を広げたN次元の入力データの場合はどうなるだろうか。
ここではそれについてを述べる。

N次元での入力データから予測値yを算出する式は以下の式で表される。

$$
\tag{1}  y=w_{0} x_{0} + w_{1} x_{1} + w_{2} x_{2} + \cdots + w_{N-1} x_{N-1} + w_{N} (w_{i} は実数)
$$

N次元の時も1次元2次元の時と同様に式(1)の様な形で表される。この式の形で表されるモデルは**線形回帰モデル**と呼ばれている。

式(1)において、最後のw<sub>N</sub>には入力データがない事に注意する。 (切片である)

ここでは簡略化のため、以降w<sub>N</sub> = 0として考える。すると式(1)は以下の様になる。

$$
\tag{2}  y=w_{0} x_{0} + w_{1} x_{1} + w_{2} x_{2} + \cdots + w_{N-1} x_{N-1} 
$$

この式(2)を行列表記で書き直すと、以下の様になる。

$$
\begin{aligned}
\tag{3}  y  &= w_{0} x_{0} + w_{1} x_{1} + w_{2} x_{2} + \cdots + w_{N-1} x_{N-1} \\
            &=  \left[
                    \begin{array}{ccc}
                    w_{0} & \cdots & w_{N-1} 
                    \end{array}
                \right]
                \left[
                    \begin{array}{cccc}
                    x_{0} \\
                    \vdots \\
                    x_{N-1}
                    \end{array}
                \right]
            \\
            &= {\bf w} ^\mathrm{T} {\bf x} 
\end{aligned}
$$

ここで

$$
  {\bf w} = \left[
    \begin{array}{cccc}
      w_{0} \\
      w_{1} \\
      \vdots \\
      w_{N-1}
    \end{array}
  \right]
  ,
    {\bf x} = \left[
    \begin{array}{cccc}
      x_{0} \\
      x_{1} \\
      \vdots \\
      x_{N-1}
    \end{array}
  \right]
$$

とおく。

<hr>

では、ここからN次元線形回帰モデルの解析解を求めてみよう。

これまでと同様にして、平均二乗誤差Jは以下の様に表される。

$$
\begin{aligned}
\tag{4}  J( {\bf w} ) &= \frac{1}{N} \sum_{n=0}^{N-1} ( y(x_{n}) - t_{n} )^2 \\
                      &= \frac{1}{N} \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} )^2
\end{aligned}
$$

ここも同様にして、式(4)をw<sub>i</sub>で偏微分すると、以下の様になる。

$$
\begin{aligned}
\tag{5}  \frac{\partial J}{\partial w_{i} } 
            &= \frac{1}{N} \sum_{n=0}^{N-1} \frac{\partial }{\partial w_{i} } ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} )^2 \\
            &= \frac{2}{N} \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) x_{n,i} 
\end{aligned}
$$

なお、x<sub>n,i</sub>はn番目の入力データにおけるi番目のパラメータである。

また、<b>w</b><sup>T</sup><b>x</b>をw<sub>i</sub>で偏微分すると、x<sub>n,i</sub>だけが残る事に注意する。

Jを最小にする<b>w</b>では、全てのw<sub>i</sub>について傾き0、つまり式(5)が０になるので、次の式が全てのiで成り立つ。

$$
\begin{aligned}
\tag{6}  \frac{2}{N} \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) x_{n,i} &= 0 \\
\Leftrightarrow  \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) x_{n,i} &= 0
\end{aligned}
$$

式(6)は全てのi (0≦i≦N-1) で成り立つ。つまり以下の式が成り立つ。

$$
\begin{aligned}
\tag{7} \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) x_{n,0} &= 0 \\
        \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) x_{n,1} &= 0 \\
        \vdots \\
        \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) x_{n,N-1} &= 0 
\end{aligned}
$$

この式をベクトルを使って書き換えると以下の式の様になる。

$$
\begin{aligned}
\tag{8} &\sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) [ x_{n,0}, x_{n,1}, \cdots , x_{n,N-1} ] 
        = 
                \left[
                    \begin{array}{ccc}
                    0 & 0 & \cdots & 0 
                    \end{array}
                \right]  \\
        \Leftrightarrow 
        &\sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) {\bf x}_{n} ^\mathrm{T}
        = 
                \left[
                    \begin{array}{ccc}
                    0 & 0 & \cdots & 0 
                    \end{array}
                \right] \\
        \Leftrightarrow 
        &\sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} {\bf x}_{n} ^\mathrm{T} 
                          - t_{n} {\bf x}_{n} ^\mathrm{T} ) 
        = 
                \left[
                    \begin{array}{ccc}
                    0 & 0 & \cdots & 0 
                    \end{array}
                \right] \\
        \Leftrightarrow 
        & {\bf w} ^\mathrm{T} \sum_{n=0}^{N-1} {\bf x}_{n} {\bf x}_{n} ^\mathrm{T} 
          -  \sum_{n=0}^{N-1} t_{n} {\bf x}_{n} ^\mathrm{T}  
        = 
                \left[
                    \begin{array}{ccc}
                    0 & 0 & \cdots & 0 
                    \end{array}
                \right]
\end{aligned}
$$

ここで

$$
\begin{aligned}
\tag{9} 
         \sum_{n=0}^{N-1} {\bf x}_{n} {\bf x}_{n} ^\mathrm{T} 
        &= 
         \sum_{n=0}^{N-1}
                \left[
                    \begin{array}{cccc}
                    x_{n,0} \\
                    x_{n,1} \\
                    \vdots \\
                    x_{n,N-1}
                    \end{array}
                \right]
                \left[
                    \begin{array}{ccc}
                    x_{n,0} & x_{n,1} & \cdots & x_{n,N-1} 
                    \end{array}
                \right] \\
        &= 
          \sum_{n=0}^{N-1}
                \left[
                    \begin{array}{cccc}
                    x_{n,0}^2 & x_{n,0} x_{n,1} & \cdots & x_{n,0} x_{n,N-1} \\
                    x_{n,1} x_{n,0} & x_{n,1}^2 & \cdots & x_{n,1} x_{n,N-1} \\
                    \vdots & \vdots & \ddots & \vdots \\
                    x_{n,N-1} x_{n,0} & x_{n,N-1} x_{n,1} & \cdots & x_{n,N-1}^2
                    \end{array}
                \right] \\
        &=
                \left[
                    \begin{array}{llll}
                    \displaystyle \sum_{n=0}^{N-1} x_{n,0}^2 & \displaystyle \sum_{n=0}^{N-1} x_{n,0} x_{n,1} & \cdots & \displaystyle \sum_{n=0}^{N-1} x_{n,0} x_{n,N-1} \\
                    \displaystyle \sum_{n=0}^{N-1} x_{n,1} x_{n,0} & \displaystyle \sum_{n=0}^{N-1} x_{n,1}^2 & \cdots & \displaystyle \sum_{n=0}^{N-1} x_{n,1} x_{n,N-1} \\
                    \vdots & \vdots & \ddots & \vdots \\
                    \displaystyle \sum_{n=0}^{N-1} x_{n,N-1} x_{n,0} & \displaystyle \sum_{n=0}^{N-1} x_{n,N-1} x_{n,1} & \cdots & \displaystyle \sum_{n=0}^{N-1} x_{n,N-1}^2
                    \end{array}
                \right] \\
        &=
                \left[
                    \begin{array}{llll}
                    x_{0,0} & x_{1,0} & \cdots & x_{N-1,0} \\
                    x_{0,1} & x_{1,1} & \cdots & x_{N-1,1} \\
                    \vdots & \vdots & \ddots & \vdots \\
                    x_{0,N-1} & x_{1,N-1} & \cdots & x_{N-1,N-1}
                    \end{array}
                \right] 
                \left[
                    \begin{array}{llll}
                    x_{0,0} & x_{0,1} & \cdots & x_{0,N-1} \\
                    x_{1,0} & x_{1,1} & \cdots & x_{1,N-1} \\
                    \vdots & \vdots & \ddots & \vdots \\
                    x_{N-1,0} & x_{N-1,1} & \cdots & x_{N-1,N-1}
                    \end{array}
                \right] \\
        &= {\bf X} ^\mathrm{T} {\bf X}


\end{aligned}
$$


$$
\begin{aligned}
\tag{10} 
         \sum_{n=0}^{N-1} t_{n} {\bf x}_{n} ^\mathrm{T} 
        &= 
         \sum_{n=0}^{N-1}
                t_{n}
                \left[
                    \begin{array}{ccc}
                    x_{n,0} & x_{n,1} & \cdots & x_{n,N-1} 
                    \end{array}
                \right] \\
        &= 
          \sum_{n=0}^{N-1}
                \left[
                    \begin{array}{ccc}
                    t_{n} x_{n,0} & t_{n} x_{n,1} & \cdots & t_{n} x_{n,N-1} 
                    \end{array}
                \right] \\
        &=
                \left[
                    \begin{array}{llll}
                    \displaystyle \sum_{n=0}^{N-1} t_{n} x_{n,0} & \displaystyle \sum_{n=0}^{N-1} t_{n} x_{n,1} & \cdots & \displaystyle \sum_{n=0}^{N-1} t_{n} x_{n,N-1} 
                    \end{array}
                \right] \\
        &=
                \left[
                    \begin{array}{ccc}
                    t_{0} & t_{1} & \cdots & t_{N-1} 
                    \end{array}
                \right]
                \left[
                    \begin{array}{llll}
                    x_{0,0} & x_{0,1} & \cdots & x_{0,N-1} \\
                    x_{1,0} & x_{1,1} & \cdots & x_{1,N-1} \\
                    \vdots & \vdots & \ddots & \vdots \\
                    x_{N-1,0} & x_{N-1,1} & \cdots & x_{N-1,N-1}
                    \end{array}
                \right] \\
        &= {\bf t} ^\mathrm{T} {\bf X}
\end{aligned}
$$

とおく、ここで

$$
\tag{11} 
        {\bf t}
        = 
                \left[
                    \begin{array}{cccc}
                    t_{0} \\
                    t_{1} \\
                    \vdots \\
                    t_{N-1}
                    \end{array}
                \right]
        ,
        {\bf X}
        = 
                \left[
                    \begin{array}{cccc}
                    x_{0,0} & x_{0,1} & \cdots & x_{0,N-1} \\
                    x_{1,0} & x_{1,1} & \cdots & x_{1,N-1} \\
                    \vdots & \vdots & \ddots & \vdots \\
                    x_{N-1,0} & x_{N-1,1} & \cdots & x_{N-1,N-1}
                    \end{array}
                \right]
$$

である。

これより、式(8)は以下式(12)の様に書き換えられる。

$$
\begin{aligned}
\tag{12}  & {\bf w} ^\mathrm{T} \sum_{n=0}^{N-1} {\bf x}_{n} {\bf x}_{n} ^\mathrm{T} 
          -  \sum_{n=0}^{N-1} t_{n} {\bf x}_{n} ^\mathrm{T}  
        &= 
                \left[
                    \begin{array}{ccc}
                    0 & 0 & \cdots & 0 
                    \end{array}
                \right] \\
        \Leftrightarrow 
        & {\bf w} ^\mathrm{T} {\bf X} ^\mathrm{T} {\bf X} -  {\bf t} ^\mathrm{T} {\bf X}
        &= 
                \left[
                    \begin{array}{ccc}
                    0 & 0 & \cdots & 0 
                    \end{array}
                \right] 
\end{aligned}
$$

式(12)で<b>t</b><sup>T</sup><b>X</b>を右辺に移項すると

$$
\tag{13}  {\bf w} ^\mathrm{T}  {\bf X} ^\mathrm{T} {\bf X} 
        = {\bf t} ^\mathrm{T}  {\bf X} 
$$

ここで両辺を転置すると、(<b>AB</b>)<sup>T</sup> = <b>B</b><sup>T</sup><b>A</b><sup>T</sup>より式(13)は

$$
\begin{aligned}
\tag{14}   ( {\bf w} ^\mathrm{T}  {\bf X} ^\mathrm{T} {\bf X} )^\mathrm{T}
        &= ( {\bf t} ^\mathrm{T}  {\bf X} )^\mathrm{T} \\
           ( {\bf X} ^\mathrm{T} {\bf X} )^\mathrm{T} ({\bf w} ^\mathrm{T}) ^\mathrm{T}
        &= {\bf X} ^\mathrm{T}  {\bf t} \\
           ( {\bf X} ^\mathrm{T} {\bf X} ) {\bf w}
        &= {\bf X} ^\mathrm{T}  {\bf t}
\end{aligned}
$$

となり、この式(14)に左から(<b>X</b><sup>T</sup><b>X</b>)<sup>-1</sup>をかける事により、<b>w</b>は以下の式(15)の様に表される。

$$
\tag{15}   {\bf w} = ( {\bf X} ^\mathrm{T}  {\bf X} )^{-1} {\bf X} ^\mathrm{T} {\bf t}
$$

よって、長くなったが式(15)により<b>w</b>の値が導出された。またこれがN次元線形回帰モデルの解となる。

そして、式(15)の右辺の式 (<b>X</b><sup>T</sup><b>X</b>)<sup>-1</sup><b>X</b><sup>T</sup> 
は**ムーアーペンローズの擬似逆行列**という名が付けられている。


<hr>

さて、式(2)で計算の簡略化のためw<sub>N</sub>=0としたと書いたが、w<sub>N</sub>≠0の場合も勿論ある。その場合<b>w</b>や<b>x</b>の次数が異なるがどうすれば良いのか？

その場合、w<sub>N</sub>にもダミー用のパラメータであるx<sub>N</sub>を追加する。

ここで、常にx<sub>N</sub>=1 となる様に設定する。

$$
\begin{aligned}
\tag{16}     y &= w_{0} x_{0} + w_{1} x_{1} + w_{2} x_{2} + \cdots + w_{N-1} x_{N-1} + w_{N} \\
           \Leftrightarrow  y &= w_{0} x_{0} + w_{1} x_{1} + w_{2} x_{2} + \cdots + w_{N-1} x_{N-1} + w_{N} x_{N} ( x_{N} = 1)
\end{aligned}
$$

この式(16)に対しムーアーペンローズの擬似逆行列を作成すれば、wが求められる。これによりw<sub>N</sub>≠0の場合においても解が求められた。