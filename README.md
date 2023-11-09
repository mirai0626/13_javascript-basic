# 2023 年　後期「JavaScript 基礎」授業課題

## 授業内コード

1. 10 月 5 日（木）はじめの一歩
2. 10 月 5 日（木）Github リポジトリ作成
3. 10 月 12 日(木) 変数・定数宣言
4. 10 月 19 日(木) for 文
5. 10 月 26 日(木) click イベント
6. classList とイベント、for 文
7. for 文と if 文

## 11 月 9 日

1. click イベントでクラスをつける
2. if 文で条件分岐する
3. if 文で条件分岐して、ul の中に li 要素を追加して、中にテキストを書く

- if 文条件分岐
- ul 要素に li 要素を追加
- 追加した li 要素の中にテキストを追加する

```js
    <script>
      const widthsize = window.innerWidth; //現在のブラウザの横幅
      console.log(widthsize);

      const leftZone = document.querySelector('.leftZone');
      const rightZone = document.querySelector('.rightZone');

      document.body.addEventListener('click', function (event) {
        //クリックしたX軸の数値が取れる
        console.log(event.clientX);

        //横幅がwidthsizeに入っているので、
        //右半分左半分を分けるには？
        if (event.clientX <= widthsize / 2) {
          console.log('左半分');
          //li要素を追加する
          const list = document.createElement('li');
          //li要素の中にテキストを追加する
          list.textContent = '左';
          //appendChildでul要素の中にli要素を追加する
          leftZone.appendChild(list);
          console.log(list);
        } else {
          console.log('右半分');
          const list = document.createElement('li');
          list.textContent = '右';
          rightZone.appendChild(list);
        }
      });
    </script>
```

- if 文で条件分岐する

```js
    <script>
      const num = Math.round(Math.random() * 100);
      console.log('現在の値：' + num);
      const rem = num % 2; //2で割ってどうなると偶数が表示されるか

      console.log(rem);

      //偶数を表示するif文をかいてください。

      if (rem == 0) {
        console.log('偶数です');
      } else {
        console.log('奇数です');
      }
    </script>
```

- for 文を使って click イベント

```js
    <script>
      const text = document.querySelectorAll('p');
      console.log(text);

      for (let i = 0; i < text.length; i++) {
        //NodeListだから添字が必要
        console.log(i);
        text[i].addEventListener('click', function () {
          this.classList.add('slide');
        });
      }
    </script>
```

## 11 月 2 日

- add,remove,toggle

```js
<script>
      //要素を取得する
      const dancingBtn = document.querySelector('.dancing');
      const stopBtn = document.querySelector('.stop');
      const changeBtn = document.querySelector('.change');

      //画像を取得する
      const dancer = document.querySelector('img');
      console.log(dancer);

      //ダンスのクリックイベントをつける
      dancingBtn.addEventListener('click', function () {
        //クラスをつけて画像が回転するようにする
        dancer.setAttribute('class', 'dance');
      });

      //ストップのクリックイベントをつける
      stopBtn.addEventListener('click', function () {
        //クラスをつけて画像がストップするようにする
        dancer.setAttribute('class', 'stop');
        //クラスを消して画像がストップするようにする
        //dancer.removeAttribute("class");
      });

      //画像が変わるクリックイベントをつける
      changeBtn.addEventListener('click', function () {
        //画像をsrcで設定して変わるように設定する
        dancer.setAttribute('src', 'images/ballet_woman.png');
        //画像のクラスを消して画像がもとに戻るようにする
        dancer.removeAttribute('class', 'change');
      });
    </script>
```

## 10 月 26 日

- クリックしたら色が変わる
- クリックしたら文字の大きさが変わる
- style 属性をつけて文字のスタイルを変える

```js
    <script>
      //文字の色を変えてみましょう
      //ボタンを取得する
      const redBtn = document.querySelector('.red');

      //文字を取得する
      const text = document.querySelector('.text');

      //テキストを変えたい
      const textSpan = document.querySelector('.text span');

      //ボタンにClickイベントをつける
      //赤
      redBtn.addEventListener('click', function () {
        console.dir(text);
        text.style.color = 'red';
        textSpan.innerText = '赤';
      });

      //青
      const blueBtn = document.querySelector('.blue');
      blueBtn.addEventListener('click', function () {
        text.style.color = 'blue';
        textSpan.innerText = '青';
      });

      //黄
      const yellowBtn = document.querySelector('.yellow');
      yellowBtn.addEventListener('click', function () {
        text.style.color = 'yellow';
        textSpan.innerText = '黄';
      });
    </script>
```

```js
    <script>
      //element.setAttribute("class","??")
      const text = document.querySelector('p span');

      //赤くなる
      const btnRed = document.querySelector('.redder');
      btnRed.addEventListener('click', function () {
        text.setAttribute('class', 'redText');
      });

      //大きくなる
      const btnBig = document.querySelector('.bigger');
      btnBig.addEventListener('click', function () {
        text.setAttribute('class', 'bigText');
      });
    </script>
```

## 10 月 19 日

- 複数の要素を追加する → コレクション配列
- 配列の宣言と長さ
- for 文による繰り返し処理

## js を使って要素にテキストを追加する

1. ul 要素を持ってくる
1. li 要素を追加する
1. for 文で回して、一つ一つ li に入れる

```html
<body>
  <h1>人気フルーツ一覧</h1>
  <ul id="fruitslist" class="listbox__list"></ul>
  <script>
    //ulの中に果物を一度にliで入れたい。
    //配列fruitsを宣言・値を代入
    const fruits = ['りんご', 'もも', 'バナナ'];

    //バナナがほしい
    console.log(fruits[2]);

    //ulをJavaScript空間に引きずり込む
    const element = document.querySelector('#fruitslist');
    console.log(fruitslist);

    //fruitsの要素分だけfor文で回す
    for (let i = 0; i < fruits.length; i++) {
      //liを創出する
      const lilast = document.createElement('li');

      //liに値（果物ー配列fruitsの中にある）を代入
      console.log(fruits[i]); //りんご・もも・バナナが取れる。

      //創出したliの内容に果物を代入
      lilast.textContent = fruits[i];

      //element(#ul)の中の最後に追加
      element.appendChild(lilast);
    }
  </script>
</body>
```

## 10 月 12 日

- リテラルと演算子
- 変数の宣言・代入
- 定数の宣言・代入
- 複合演算子
- インクリメント
- 文字列の扱い
- リストの追加（途中）

### 文字列の計算

```js
//文字列の連結
//文字列の連携
console.log('ABC' + 'DEF');
console.log('円周率は' + 3.14 + 'です。'); //文字列 + 数値
console.log('計算結果:' + 123 + 456); //文字列 + 数値の計算（最初が文字列だったら後ろも文字列になる）
console.log(123 + 456 + 'となりました。'); //数値の計算 + 文字列
console.log('計算結果:' + (123 + 456));
console.log('2' - 1); //文字列 - 数値
console.log('2' * 3);
console.log('2' / 4);
```

### 変数と定数の宣言・代入

```js
//変数の宣言・代入
let a; //変数の宣言　//ES6 = 2015
a = 10; //値の代入(数値型)
console.log(a);

a = 'Hello'; //値の再代入(文字列型)
console.log(a);

//let a = 'World'; //変数の宣言と代入を同時に行っています。さらに再宣言なので、エターとなります。

//変数の宣言・代入
const PI = 3.14;
console.log(PI);

//再代入
//PI = 3.1415926535;
```

### 複合演算子

```js
//複合代入演算子（省略して書いた演算子のこと）
let n = 5;
n = n + 2;
console.log(n);

let n2 = 5;
n2 += 2; //複合代入演算子　n2 = n2 + 2と同じ。
console.log(n2);
```

### インクリメント

```js
//インクリメント
let n3 = 5;
n3++; //インクリメント1足す
console.log(n3); //6
```

### 文字列の扱い

```js
//文字列の扱い
let s = 'Hello';
console.log(s.toUpperCase()); //UpperCase=大文字にする
console.log(s.length); //文字数
```

### リストを追加する書き方　

1. document でリストを追加する
1. textcontent に書く

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>sample7-7</title>
  </head>
  <body>
    <h1>果物の種類</h1>
    <ul id="fruitslist" class="listbox__list">
      <li>りんご</li>
      <li>みかん</li>
      <li>バナナ</li>
    </ul>
    <!--リストを操作するDOM操作のスクリプト-->
    <script>
      //メロンを加えたい。
      //ul要素を取り入れる。
      const element = document.querySelector('ul');
      console.log(element);

      //selectorってCSSのセレクターなので、
      const element2 = document.querySelector('#fruitslist');
      console.log(element2);

      //classも行ける?
      const element3 = document.querySelector('.listbox__list');
      console.log(element3);

      //新しい要素を作る
      const lilast = document.createElement('li');
      console.dir(lilast); //dirに変更(dir=オブジェクトの中身が見える)
      lilast.textContent = 'メロン';
      console.log(lilast);
    </script>
  </body>
</html>
```

## 10 月 5 日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
1. 外部 JS ファイルの中
1. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>演習</title>
  </head>
  <body>
    <script></script>
  </body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。
