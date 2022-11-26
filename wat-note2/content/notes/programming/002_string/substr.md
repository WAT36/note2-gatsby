---
title: "文字列から指定した位置の文字列を取り出す"
date: "2022-11-26T14:34:23+09:00"
tags: ["Javascript"]
---

例えば"apple"という文字列の1~3文字目だけを取ってきたい時など、ある文字列から指定した位置、部分の文字列を取り出したい方法を示す。

<div class="note_content_by_programming_language" id="note_content_Javascript">

```Javascript
//start文字目~end文字目までを切り出す
文字列.substring(start [,end])
文字列.slice(start [,end])

//start文字目からcnt文字を切り出す
文字列.substr(start [,cnt])

//n文字目だけを切り出す
文字列.charAt(n)
```

Javascriptでは主に上記の関数により文字列の切り出しが行える。

例

```javascript
let s = "apple,banana,cherry,durian"

console.log(s.substring(6,12))
console.log(s.slice(6,11))
console.log(s.substr(6,6))
console.log(s.charAt(6))
```

実行結果

```
banana
banan
banana
b
```



</div>

