---
title: "配列の長さ"
date: "2019-10-14T20:20:30+09:00"
description: "配列の長さを調べる方法"
tags: ["Java","Javascript"]
---

配列の長さ、つまりは入っている要素の数を表示する方法についてを述べる。

<div class="note_content_by_programming_language" id="note_content_Java">

```
配列.length
```

Javaでは配列オブジェクトに**length**という属性があり、それが配列の長さを示している。

この方法により、配列の長さを表示することができる。

実行例を以下に示す。

```java
import java.util.Arrays;

class Main{
    public static void main(String args[]){
        //int型の配列宣言
        int[] nums = new int[5];

        //配列の表示（表示方法については、後の章で述べる）
        System.out.println(Arrays.toString(nums));

        //配列の長さ
        System.out.println(nums.length);
    }
}
```

実行結果

```
[0, 0, 0, 0, 0]
5
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```
配列.length
```

JavascriptもJavaと同じく配列に**length**という属性がある。それが配列の長さを示している。

実行例を以下に示す。

```javascript
// 配列の宣言
var nums = [0,1,2,3,4];
console.log(nums);

// 配列の長さ
console.log(nums.length);
```

実行結果

```
[0, 1, 2, 3, 4]
5
```

</div>

