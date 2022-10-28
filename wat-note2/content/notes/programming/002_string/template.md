---
title: "テンプレート文字列"
date: "2022-10-28T21:50:28+09:00"
tags: ["Java","Python","Javascript"]
---
  
文字列中に変数の値を埋め込むことができる。このような文字列をテンプレート文字列と呼ぶ（言語により名前は異なるが、ここではこのように呼ぶ）

ここではテンプレート文字列についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">


</div>
<div class="note_content_by_programming_language" id="note_content_Python">

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```Javascript
`${変数名}`
```

Javascriptでは、バッククォート(``)で囲んだ文字列がテンプレート文字列として扱われる。

その文字列中に **${変数名}** を書き込むと、その変数の値が文字列となって入る。

例

```javascript
let a = "テンプレート文字列のテスト"

console.log(`値：${a}`)
```

実行結果

```
値：テンプレート文字列のテスト
```



</div>

