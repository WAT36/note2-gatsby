---
title: "オーバーフィッティング(過学習)"
date: "2019-10-26T23:31:30+09:00"
description: ""
tags: []
---

先述の線形基底関数モデルにおいて、Mの値を大きくすればするほど、誤差が小さくなるような予測式が得られる事が解った。

![Figure 22](./Figure_22.png)

しかし、ここで誤差が小さくなるというのは既に入力している入力値・実測値に対してであり、未知の入力値に対しても精度の高い予測値が得られるか？ということを考えると、上図でより高いMで算出した予測式では精度が悪くなるだろうというのは明らかである。

このように、既知の入力値に対しては高精度だが、未知の入力値に対しては精度が悪い(汎用能力が低い)状態のことを **過学習(オーバーフィッティング)** という。

では過学習の状態まで至らず、汎用能力も高くなるような最適なMの値を求めるにはどうしたら良いのだろうか？

その方法について次章から述べていく。