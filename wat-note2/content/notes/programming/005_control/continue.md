---
title: "continue文"
date: "2019-10-17T21:21:30+09:00"
description: "while文について"
tags: ["Java","Python","Javascript"]
---

continue文はfor文、while文のループ処理において、そのループ1回分の処理をそこで終了し、 条件式の判定（for文の場合は変化式を行ってから）に移らせる文である。   
continue文についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでcontinue文を設定したい時は、設定したいfor文、while文のループ処理内に設定する。    
実行例を以下に示す。  

```java
class Main{
  public static void main(String args[]){

    for(int i=0;i<5;i++){
      if(i<3){
        //i<3のときは処理終了 -> i++へ
        continue;
      }
      System.out.println(i);
    }

    System.out.println();

    for(int i=0;i<3;i++){
      System.out.println(i);
      for(int j=0;j<3;j++){
        if(j<1){
          //j<1のときは処理終了 -> j++へ
          continue;
        }
        System.out.println(i+" "+j);
      }
    }
  }
}
```

実行結果

```
> java Main
3
4

0
0 1
0 2
1
1 1
1 2
2
2 1
2 2
```
 

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonにもcontinue文があり、使い方はjavaと同じ。  
for,whileループの中で設定する。

```python
>>> for i in range(5):
...     if(i<3):
...             continue
...     print(i)
... 
3
4
>>> 
>>> for i in range(3):
...     for j in range(3):
...             if(j<1):
...                     continue
...             print(i,j)
... 
0 1
0 2
1 1
1 2
2 1
2 2
>>>
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptにおいてもcontinue文の使い方は同じである。  
設定したいfor,whileループの中に設定する。

使用例

```javascript
for(var i=0;i<10;i++){
  if(i>=5){
    continue;
  }
  console.log(i);
}
```

結果

```
0
1
2
3
4
```

</div>
