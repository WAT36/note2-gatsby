"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[355],{8771:function(e,t,l){var n=l(7294),a=l(1597);t.Z=function(){var e,t=null===(e=(0,a.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return n.createElement("div",{className:"bio"},(null==t?void 0:t.name)&&n.createElement("p",null,"Written by ",n.createElement("strong",null,t.name)," ",(null==t?void 0:t.summary)||null))}},6410:function(e,t,l){l.r(t),l.d(t,{default:function(){return s}});var n=l(7294),a=l(1597),r=l(8771),i=l(8335),o=l(262),c=function(){};c.noteDirName={container:"コンテナ","front-end":"フロントエンド",programming:"プログラミング","001_stdio":"標準入力・出力","002_string":"文字列","003_number":"数値","004_list":"配列・リスト","005_control":"制御構文","006_map":"辞書、Map","007_class_func":"クラス・関数","008_exception":"例外処理","009_file_io":"ファイル入出力","010_other":"その他","011_graph_data":"グラフ・データ処理","001_log":"対数","002_round":"四捨五入","003_operator":"演算子","004_other_func":"その他関数","005_base":"基数","001_array":"配列","002_list_tuple":"リスト（・タプル）","001_class":"クラス","002_function":"関数・メソッド","001_graph":"グラフ","101_2Dgraph":"２次元グラフ","102_3Dgraph":"３次元グラフ"};var m=c,s=function(e){var t,l=e.data,c=e.location,s=l.allDirectory.nodes,u=l.allMarkdownRemark.nodes,p=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return 0===s.length&&0===u.length?n.createElement(i.Z,{location:c,title:p},n.createElement(o.Z,{title:"notes"}),n.createElement(r.Z,null),n.createElement("p",null,"こちらにまだ記事はありません.")):n.createElement(i.Z,{location:c,title:p},n.createElement("h1",{className:"main-heading"},"Notes"),n.createElement(o.Z,{title:"notes"}),n.createElement(r.Z,null),n.createElement("ol",{style:{listStyle:"none"}},s.map((function(e){var t=m.noteDirName[e.name]||e.name;return n.createElement("li",{key:e.name},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(a.Link,{to:"/notes/"+e.relativePath,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t)))),n.createElement("section",null)))}))),n.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-templates-note-dir-js-e5a0a42eb429effaf629.js.map