---
title: "文字列の置換"
date: "2019-10-14T23:46:41+09:00"
description: "文字列を別の文字列に置換する"
tags: ["Java","Python","Javascript"]
---

文字列を別の文字列に置換する方法。
その文字列全ての他、文字列の一部分または文字列中の条件に合う文字列に対する置換も行える。

<div class="note_content_by_programming_language" id="note_content_Java">

javaで文字列を置換したい時は **replace()** メソッドを使う。<br>
使用法は以下の通り。

```java
文字列.replace(置換前の文字列,置換後の文字列);
```

以下に使用例を示す。

```java
String s = "test";
String t = s.replace("t","b");
System.out.println(t); // besb
```

上記例では"test"という文字列をreplaceメソッドで"t"を"b"に置換し、結果を表示している。結果として"besb"という文字列が表示される。

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは文字列型のstrオブジェクトにメソッド **replace()** があり、これにより文字列中の文字を置換できる。<br>
使用法は以下の通り。

```python
文字列.replace(old,new [,count]);
```

これにより文字列中のoldの部分をnewに変換する。
また、オプション引数countがあり、指定すると先頭からcount個分のoldのみを置換する。  
なお、文字列にoldが無い場合は、置換されずにそのまま出力される。  

使用例を以下に示す。

```python
s = "test"
t = s.replace("t","b")
print(t)  # "besb"

t = s.replace("t","b",1)
print(t)  # "best"
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javscriptでは文字列のにメソッド **replace()** があり、これにより文字列中の文字を置換できる。<br>
使用法は以下の通り。

```javascript
文字列.replace(old,new);
```

置換対象の文字列oldは、文字列の他に正規表現の形でも入力できる。  

文字列を入力した場合は最初の一致した箇所のみを置換し、正規表現の場合は一致した箇所全てを置換する。

ただし、文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。

使用例を以下に示す。

```javascript
var s = "test"
var t = s.replace("t","b")
console.log(t)  // "best"

t = s.replace(/t/g,"b")
console.log(t)  // "besb"
```

実行結果

```
best
besb
```

</div>
