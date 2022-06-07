---
title: "ファイル書き込み"
date: "2019-10-22T18:25:30+09:00"
description: "ファイルを書き込む方法について"
tags: ["Java","Python"]
---

ファイルを書き込む方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

読み込み時と同様に、ここではテキストファイルなど一般的なファイルに対する読み込み方法についてを示す。  

Javaでファイルを書き込むには以下の2つの方法がある。

- java.io. **FileOutputStream** クラスを利用する
- java.io. **FileWriter** クラスを利用する

それぞれについて示す。

## FileOutputStream

FileOutputStreamクラスはファイルからbyte単位で書き込みを行うストリームである。  
FileInputStreamと同様に、このクラスは宣言時(コンストラクタ)にString型でファイルのパスまたはFile型のオブジェクトを入力する。Fileクラスは宣言時(コンストラクタ)にファイルのパス(相対パス)を文字列型で入力してできるオブジェクトである。これにより、このファイルへの出力ストリームが得られる。

`FileOutputStream(String name) throws FileNotFoundException`

`FileOutputStream(File file) throws FileNotFoundException`

作成した入力ストリームからバイトデータを書き込むメソッドとして、**write()**というメソッドがある。

`void write(int b) throws IOException`

`void write(byte[] b) throws IOException`

このメソッドは引数で指定されたバイトデータをファイル出力ストリームに書き出すメソッドである。  
FileOutputStreamクラスではこのメソッドを利用してファイルを書き込む。  

また、書き込みが終わったら入力時と同様にして、出力ストリームを閉じる**close()**メソッドを忘れずに行う。  

FileOutputStreamのjava実装例を示す。

```java
import java.io.FileOutputStream;
import java.io.File;
import java.io.IOException;

class Main{
  public static void main(String args[]){
    FileOutputStream fos = null;
    try{
      fos = new FileOutputStream(new File("testwrite.txt"));
      fos.write("testwrite".getBytes());
      fos.write(99);
    }catch (IOException e){
      System.err.println("IO Error");
    }finally{
      try{
        fos.close();
      }catch(IOException e){
      }
    }
  }
}
```

実行例は以下の通り。

```
$ ls *.txt
$ 
$ javac Main.java
$ java Main
$ ls *.txt
testwrite.txt
$ cat testwrite.txt 
testwritec$ 
```

## FileWriterクラス


FileWriterクラスはファイルからchar単位で書き込みを行う出力ストリームである。  
このクラスもFileOutputStreamクラスと同様に、宣言時(コンストラクタ)にFile型のオブジェクトを入力する。これにより、このファイルからの入力ストリームが得られる。

`FileWriter(File file) throws FileNotFoundException`  

`FileWriter(String name) throws FileNotFoundException`  

作成した出力ストリームでバイトデータを書き込むメソッドとして、こちらも**write()**というメソッドがある。


`void write(String str) throws IOException`


このメソッドは引数に入力した文字列をバッファに書き込むメソッドである。  
この時点ではバッファへの書き込みなので、ファイルへの書き込みは行われていない。   
ファイルに書き込むにはここから、**flush()**というメソッドを利用して書き込む。  


`void flush() throws IOException`


FileWriterクラスではこれらのメソッドを利用して書き込みを行う。  

また、読み込みが終わったらこちらも入力ストリームを閉じる**close()**メソッドを忘れずに行う。  

FileWriterのjava実装例を示す。

```java
import java.io.FileWriter;
import java.io.File;
import java.io.IOException;

class Main{
  public static void main(String args[]){
    FileWriter fw = null;
    try{
      fw = new FileWriter(new File("testwrite.txt"));
      fw.write("テスト");
      fw.write("2行目");
      fw.flush();
    }catch (IOException e){
      System.err.println("IO Error");
    }finally{
      try{
        fw.close();
      }catch(IOException e){
      }
    }
  }
}
```

実行例は以下の通り。  

```
$ ls
$ javac Main.java
$ 
$ ls *.txt
testwrite.txt
$ cat testwrite.txt 
testwritec$ 
$ javac Main.java
$ java Main
$ cat testwrite.txt 
テスト2行目 $ 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは関数openでファイルを開いた後、ファイルオブジェクトの関数 **write()** を利用してファイルを書き込む。  

`write(文字列)`  

ファイルへの書き込みを行う際にはopenで開く時にモードを **'w'** または **'a'** と必ず指定する。それ以外の時はwrite関数実行時にエラーになる。
モードが'w'のときはファイルに上書きされ、'a'の時はファイルの末尾に追記される形で書き込まれる。  

こちらも読み込みの時と同様に、作業が終わったら最後にファイルオブジェクトの関数 **close()** を利用してファイルをクローズする。

また、書き込みにおいても **with** 文が利用できる。with文を抜け出したとき、自動でファイルクローズも行うので便利。

```python
with open('ファイル名','モード') as f:
    f.write('ファイルに書き込む文字列')
```


実行例を以下に示す。  

```python
$ ls
test.txt
$ cat test.txt
aaa
bbb
ccc
ddd
$ python
>>> #'w'のときは上書きされて書き込まれる
>>> f = open('test.txt','w')
>>>
>>> f.write('overwrote!!')
12
>>> f.close()
>>>
>>> quit()
$ cat test.txt
overwrote!!

$ python
>>> # 'a'の時はファイルの末尾から追記される形で書き込まれる
>>> f = open('test.txt','a')
>>>
>>> f.write('aaa')
3
>>> f.write('bbb')
3
>>> f.write('ccc')
3
>>> f.close()
>>> quit()
$ cat test.txt
overwrote!!aaabbbccc

$ python
>>> # with文を使って書き込む
>>> with open('test.txt','w') as f:
...     f.write('use with and overwrite')
...
22
>>> quit()
$ cat test.txt
use with and overwrite
```


{{< /tab >}}
{{< /tabs >}}

