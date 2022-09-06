---
title: "指定した値の要素を削除"
date: "2019-10-15T23:25:30+09:00"
description: "リストの指定した値の要素を削除する方法"
tags: ["Java","Python"]
---

リストの指定した要素を削除する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

`boolean remove(Object o)`   

JavaではListクラスにリストの指定した要素を削除するメソッド **remove()** がある。    

このメソッドはリストから指定した要素を削除する。複数ある場合は最初のもののみを削除する。  

## intのリストで使いたい時は？

intのリストでこのメソッドを使いたい時、先述の リストの指定したインデックスの要素を削除する で述べた  

`E remove(int index)`   

と混同するだろう。しかしListのメソッドremoveはintの値を入力した場合、こちらのインデックスを元に要素を削除する方のメソッドが使われる。  

int型のListに対して指定した値の要素を削除したい時はどうするか？  
  
方法は、intのラッパークラス **Integer** を利用する。そのメソッドvalueOfを使ってintの値をIntegerに置き換えてremoveメソッドを使うと、前者の指定した要素を削除するremoveが使われる。  

使用例を以下に示す。  

```java
import java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();
    l.add(1);
    l.add(3);
    l.add(-2);
    l.add(100);

    for(int i=0;i<l.size();i++){
        System.out.print(l.get(i) + " ");
    }
    
    System.out.println();
    l.remove(1);                    //この場合だとl[1]を削除する
    
    for(int i=0;i<l.size();i++){
      System.out.print(l.get(i) + " ");
    }

    System.out.println();
    l.remove(Integer.valueOf(1));   //この場合だとlで最初に出る「1」を削除する

    for(int i=0;i<l.size();i++){
      System.out.print(l.get(i) + " ");
    }
  }
}
```

実行結果
```
> java Main
1 3 -2 100
1 -2 100
-2 100
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`list.remove(x)`

Pythonにはリストに指定した要素を削除する関数 **remove()** があるので、これを利用する。  

引数にはリストから削除したい要素を入力する。    

指定した要素がリスト内に複数ある場合は、最初のもののみを削除する。  

リストに存在しない値を入力するとエラーになる。

```python
>>> a=[1,9,8,7,6,5,3,2]
>>> 
>>> a
[1, 9, 8, 7, 6, 5, 3, 2]
>>>
>>> a.remove(9) 
>>> 
>>> a
[1, 8, 7, 6, 5, 3, 2]
>>>
>>> b=[1,1,1] 
>>> b
[1, 1, 1]
>>>      
>>> b.remove(1)
>>> b
[1, 1]
>>>   
>>> b.remove(2)
Traceback (most recent call last):       
  File "<stdin>", line 1, in <module>    
ValueError: list.remove(x): x not in list
>>> 
```

</div>


