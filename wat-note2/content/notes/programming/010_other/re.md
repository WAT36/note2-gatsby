---
title: "正規表現"
date: "2019-10-23T23:26:30+09:00"
description: "正規表現を利用する方法について"
tags: ["Python","Javascript"]
---

文字列に正規表現を適用してある文字列パターンを抽出・検索したいという場合があると思う。

その場合に利用する方法を示す。

ちなみに正規表現の文法についてはここでは割愛する。

<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは正規表現を扱う**re**モジュールがある。
この中には色々関数があり、これらを利用して文字列パターンの抽出や検索を行う。

また、reを使う時、条件として使う正規表現も文字列として入力するが、正規表現で使う文字は特殊文字が多く、そのまま入力すると正規表現として認識してくれない時がある。
それを防ぐため、pythonの**raw文字列**を使って正規表現を書く。raw文字列を使うと、特殊文字を無視して一文字として扱ってくれるのでこの場合便利。使用法は文字列のクォーテーション(')の前にrを付ける。

(例)
```python
>>> print('C:\Users\Downloads') 
  File "<stdin>", line 1
SyntaxError: (unicode error) 'unicodeescape' codec can't decode bytes in position 2-3: truncated \UXXXXXXXX escape
>>> # \u はUnicode文字列として認識されてエラーになる
>>>
>>> print(r'C:\Users\Downloads') 
C:\Users\Downloads
>>> # \Uも\Dも特殊文字とは認識せずそのまま出力する
>>>
```

このraw文字列を使い、以下に正規表現の関数の例を示す。

## 正規表現の文字列を正規表現オブジェクトに変換する

pythonのreで正規表現を使うには、文字列で表した正規表現をそのまま使う方法と、正規表現オブジェクトに変換して使う方法の2つがある。  
どちらでもよいが、正規表現の動作を何回も行わせるときは最初に文字列を正規表現オブジェクトに変換させてそれを繰り返し使わせた方が効率良く利用できる。  

文字列を正規表現オブジェクトに変換するには、reモジュールの**compile**関数を使う。

```
re.compile(pattern, flags=0)
```

引数patternに文字列で表した正規表現を入れると、それに対応した正規表現オブジェクトを返してくれる。

## 正規表現を使って文字列を検索・抽出する

実際に正規表現を使って文字列から該当する部分を検索・抽出するにはどうすればよいのか？
それにはreモジュールの以下諸関数を利用する。

<table >
<tr>
<td style="border-style: none;">・re.<b>search</b>(pattern, string, flags=0) </td>
<td style="border-style: none;">#stringで正規表現patternに最初にマッチした部分を返す</td>
</tr>
<tr>
<td style="border-style: none;">・re.<b>match</b>(pattern, string, flags=0) </td>
<td style="border-style: none;">#stringの先頭が正規表現patternにマッチしていたらそれを返す</td>
</tr>
<tr>
<td style="border-style: none;">・re.<b>fullmatch</b>(pattern, string, flags=0) </td>
<td style="border-style: none;">#string全体が正規表現patternにマッチしていたらそれを返す</td>
</tr>
<tr>
<td style="border-style: none;">・re.<b>findall</b>(pattern, string, flags=0) </td>
<td style="border-style: none;">#string中で正規表現patternにマッチしているものをリストにして全て返す</td>
</tr>
</table>

いずれの関数も、もし該当する部分がない場合はNoneが返される。
また、これら諸関数の返り値は文字列ではなく、マッチオブジェクトと呼ばれる型のデータを返す(findallはリストを返す)。
マッチオブジェクトから結果を取得したい場合は、以下の諸関数をさらに利用する。


<table>
<tr>
<td style="border-style: none;">・Match.<b>start</b>()</td>
<td style="border-style: none;">#マッチした文字列の文字列中での最初のインデックスを返す</td>
</tr>
<tr>
<td style="border-style: none;">・Match.<b>end</b>()</td>
<td style="border-style: none;">#マッチした文字列の文字列中での最後のインデックスを返す</td>
</tr>
<tr>
<td style="border-style: none;">・Match.<b>span</b>()</td>
<td style="border-style: none;">#マッチした文字列が文字列中でどこからどこまでのインデックスなのかを返す</td>
</tr>
<tr>
<td style="border-style: none;">・Match.<b>group</b>()</td>
<td style="border-style: none;">#マッチした文字列を返す</td>
</tr>
</table>

```python
>>> import re
>>> 
>>> s = "aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnoooppp"
>>> 
>>> pattern=re.compile(r'd+') 
>>> m = re.search(pattern,s)     
>>> m.group()                 
'ddd'
>>> m.start()
9
>>> m.end()
12
>>> m.span()
(9, 12)
>>>
>>> m = re.match(pattern,s) 
>>> print(m)  #先頭(aaa...)に一致しないのでNone
None
>>>
>>> pattern=re.compile(r'a+') 
>>> m = re.match(pattern,s)
>>> m.group()
'aaa'
>>>
>>> s = "aaa"                                               
>>> pattern=re.compile(r'a+')
>>> m = re.fullmatch(pattern,s)
>>> m.group()
'aaa'
>>>  
>>> pattern=re.compile(r'a')    
>>> m = re.findall(pattern,s)   
>>> print(m)
['a', 'a', 'a']
>>> 
```

## 正規表現を使って文字列を置換する

文字列中の正規表現に該当する箇所を別の文字列に置換するにはreモジュールの関数**sub**を使う。  

`re.sub(pattern, repl, string, count=0, flags=0)`

この関数を使うと文字列stringの中で正規表現patternに該当する最も左の箇所をreplに置換した文字列を出力する。
引数のcountには置換を行う最大回数(非負整数)を入力する。デフォルトは0だが、0の場合は回数制限なしに全てを置換する。

```python
>>> import re
>>> s="aaabbbcccdddeeefff" 
>>> 
>>> re.sub(r'a+','A',s)   
'Abbbcccdddeeefff'
>>> 
>>> re.sub(r'a','A',s)  
'AAAbbbcccdddeeefff'
>>>
>>> re.sub(r'aa','A',s) 
'Aabbbcccdddeeefff'
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptでは正規表現は以下のような形で宣言する。

```javascript
var re = /(正規表現文字列)/(フラグ)
// または
var re = new RegExp('正規表現文字列' [,'フラグ'])
```

なお、上記の(フラグ)は、検索時の条件であり、入る値と効果としては
- g :グローバル検索(文字列全体を見て一致したものをすべて返す)
- i :大文字小文字を区別しない検索
などがある。（他にもあるがここでは割愛）

## 正規表現に合致した部分を取得

文字列中から正規表現に合致する部分を取り出したいときは以下の通り。

```javascript
文字列.match(正規表現)
```

結果としては、合致した部分が配列として返ってくる。

例

```javascript
var s = "apple,banana,cherry,durian"

console.log(s.match(/ap*le/g))
```

結果

```
["apple"]
```


## 正規表現に合致した部分の置換

文字列中から正規表現に合致する部分を別の文字列に置換したいときは以下の通り。

```javascript
文字列.replace(正規表現,置換する文字列)
```

通常の文字列の置換と同じで、正規表現でも行える。


## 正規表現に合致する部分の検索

文字列中から正規表現に合致する部分を検索したいときは以下の通り。

```javascript
文字列.search(正規表現)
```

結果としては、一致する最初の文字位置を取得する。

例

```javascript
var s = "apple,banana,cherry,durian"

console.log(s.search(/an*an/g))
```

結果

```
7
```

</div>