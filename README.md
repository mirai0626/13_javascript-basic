# 2023 年　後期「JavaScript 基礎」授業課題

## 授業内コード

1. 10 月 5 日（木）はじめの一歩
2. 10 月 5 日（木）Github リポジトリ作成
3. 10 月 12 日(木) 変数・定数宣言
4. 10 月 19 日(木) for 文
5. 10 月 26 日(木) click イベント
6. classList とイベント、for 文
7. for 文と if 文
8. 復習
9. 関数
10. 12 月 7 日（木）関数式
11. 12 月 14 日（木）関数・引数
12. 1 月 11 日（木）オブジェクト(ドット表記、ブランケット表記)

##　 1 月 11 日

1. オブジェクト

- 名前をつける事ができる
- 出力したときに、配列のように順番がないから並び順で出力できない

```js
<script>
      //オブジェクトの定義
      let person = {
        //プロパティ
        name: '',
        age: 0,
        //メソッド
        information: function () {
          return '名前:' + this.name + '\n年齢:' + this.age;
        },
      };
      person.name = '山田太郎';
      person.age = '18';

      console.log(person.name, person.age);

      console.log(person.information());


      console.log(myCar_list); //オブジェクトの出力の順番は環境によってぐちゃぐちゃ
      //{2021: '51年', make: 'Ford', model: 'Mustang', year: 1969}
</script>

```

2. ドット表記、ブランケット表記

```js
 <script>
      const championship = {
        y2018: '大阪桐蔭',
        y2019: '履正社',
        y2020: '中止',
        y2021: '智弁和歌山',
        y2022: '仙台育英',
        y2023: '慶応',
      };

      const selection = {
        2018: '大阪桐蔭',
        2019: '東邦',
        2020: '中止',
        2021: '東海大相模',
        2022: '大阪桐蔭',
        2023: '山梨学院',
      };

      console.log(championship.y2023); //ドット表記
      console.log(championship['y2021']); //ブランケット表記
      console.log(selection['2023']);

```

## 12 月 14 日

1. 引数

- 関数に入れて、それを引数にして使う

```js
 <script>
      const startBtn = document.querySelector('.startBtn');
      const animalSpeed = [3, 4, 1, 3, 2];
      const animals = document.querySelectorAll('li span');
      console.log(animals);

      // ここに関数animalsRunを作成してください。

      const animalsRun = function (list) {　//19行目のanimalsの名前を変えてlistで使ってる
        console.log(list);
        for (let i = 0; i < list.length; i++) {
          console.log(animalSpeed[i], list[i]);

          list[i].classList.add('run');
          list[i].style.transitionDuration = animalSpeed[i] + 's';
        }
      };

      //犬を動かす
      startBtn.addEventListener('click', function () {
        animalsRun(animals);//７行目のlistに行く　//関数の実行
      });
    </script>

```

2. 何秒後に切り替わる

```js
 <script>
      //ふわっと表示させる
      document.addEventListener('DOMContentLoaded', function () {
        document.body.className = 'view';
      });
      //画像ファイル名は、配列から取得します。
      const fujiImg_list = [
        'mt-fuji001.jpg',
        'mt-fuji002.jpg',
        'mt-fuji003.jpg',
      ];

      //ここに処理を書きます。
      const imageArea = document.querySelector('#mt-fuji');
      const btns = document.querySelectorAll('.image-fuji');
      const preBtn = document.querySelector('.pre');
      const nextBtn = document.querySelector('.next');

      let count = 0; //初期化

      for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
          imageArea.setAttribute('src', `images/${fujiImg_list[i]}`);
          count = i; //iの数値をcountに代入
          console.log(i);
        });
      }

      //関数式
      const nextStep = function () {
        if (count == 2) {
          count = 0;
          imageArea.setAttribute('src', 'images/' + fujiImg_list[count]);
          //0だから最初の画像に戻る
        } else {
          count++; //インクリメントは、+1
          imageArea.setAttribute('src', 'images/' + fujiImg_list[count]);
        }
        console.log(count);
      };

      const prevStep = function () {
        if (count == 0) {
          count = 2;
          imageArea.setAttribute('src', 'images/' + fujiImg_list[count]);
          //0だから最初の画像に戻る
        } else {
          count--; //インクリメントは、+1
          imageArea.setAttribute('src', 'images/' + fujiImg_list[count]);
        }
      };

      //次の画像を表示
      nextBtn.addEventListener('click', function () {
        nextStep();
      });

      //前の画像を表示
      preBtn.addEventListener('click', function () {
        prevStep();
      });
      console.log(count);

      //何秒後にスライド画像が変わる
      const slideShow = function (func) {
        setInterval(func, 2000);
      };
      slideShow(nextStep);
  </script>
```

3. コールバック関数

`````js

    <script>
      //関数式①
      const concatenateSpace = function (lastName, firstName) {
        return lastName + ' ' + firstName;
      };

      //関数式②
      const useConcatenate = function (name, func) {
        //↑仮引数
        //nameには、配列が入っている
        //functionには、関数式①が入っている
        let concatName = func(name[0], name[1]);
        //cincatNameには、関数式①の戻り値が入っている
        console.log('結合結果：' + concatName);
      };

      let nameParam = ['島田', '未来'];

      //関数式②の実行(引数① = 配列, 引数② = 関数名)
      useConcatenate(nameParam, concatenateSpace);

      //結合結果：中田 雄二

      //-----コールバック関数基本　*よく使う------
      //関数式①
      const testFunc = function (func) {
        //funcｍには、関数式②
        //関数の実行後すぐに表示
        console.log('testFuncが実行されました');

        //2秒後、実行
        setTimeout(function () {
          func();
        }, 2000);
      };

      //関数式②
      const callback = function () {
        console.log('callbackが実行されました');
      };

      //何を何してますか？
      //関数式①を実行
      //callbackは、関数式②の関数名
      testFunc(callback);
    </script>    <script>
      //関数式①
      const concatenateSpace = function (lastName, firstName) {
        return lastName + ' ' + firstName;
      };

      //関数式②
      const useConcatenate = function (name, func) {
        //↑仮引数
        //nameには、配列が入っている
        //functionには、関数式①が入っている
        let concatName = func(name[0], name[1]);
        //cincatNameには、関数式①の戻り値が入っている
        console.log('結合結果：' + concatName);
      };

      let nameParam = ['島田', '未来'];

      //関数式②の実行(引数① = 配列, 引数② = 関数名)
      useConcatenate(nameParam, concatenateSpace);

      //結合結果：中田 雄二

      //-----コールバック関数基本　*よく使う------
      //関数式①
      const testFunc = function (func) {
        //funcｍには、関数式②
        //関数の実行後すぐに表示
        console.log('testFuncが実行されました');

        //2秒後、実行
        setTimeout(function () {
          func();
        }, 2000);
      };

      //関数式②
      const callback = function () {
        console.log('callbackが実行されました');
      };

      //何を何してますか？
      //関数式①を実行
      //callbackは、関数式②の関数名
      testFunc(callback);
    </script>
    ````

4. アロー関数
````js
 <script>
      //従来の関数式
      const dog = function () {
        return 'わんわん';
      };

      //関数の定義
      function dog2() {
        return 'バウバウ';
      }

      //関数dogを実行 = ()があるから
      console.log(dog()); //わんわん
      console.log(dog2()); //バウバウ

      //アロー関数の関数式 *アロー関数は関数式で使う
      const cat = () => {
        return 'にゃーにゃー';
      };

      //鳴き方を決めたい アロー関数 + 引数
      const animal = (voice) => {
        return voice;
      };

      //関数animalの実行
      //みゃーみゃー
      console.log(animal('みゃーみゃー'));

      //関数catの実行 = ()があるから
      console.log(cat()); //にゃーにゃー

      //<p>これ</p>

      //thisは予約後なので、変数名・関数名に使えない
      const thisElm = document.querySelector('p');
      console.log(thisElm);

      thisElm.addEventListener('click', (e) => {
        console.log('クリック');
        // console.log(this.textContent);
        console.log(e.target.innerText);
      });
    </script>
`````

## 12 月 7 日

1. 関数に名前をつける
2. 処理したい内容を関数に入れる
3. 九九みたいに数値を入れたい場合は、function に関数を入れる
4. 数値を入れない場合は無名関数

```js
    <script>
      //ふわっと表示させる
      document.addEventListener('DOMContentLoaded', function () {
        document.body.className = 'view';
      });
      //画像ファイル名は、配列から取得します。
      const fujiImg_list = [
        'mt-fuji001.jpg',
        'mt-fuji002.jpg',
        'mt-fuji003.jpg',
      ];

      //ここに処理を書きます。
      const imageArea = document.querySelector('#mt-fuji');
      const btns = document.querySelectorAll('.image-fuji');
      const preBtn = document.querySelector('.pre');
      const nextBtn = document.querySelector('.next');

      let count = 0; //初期化

      for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
          imageArea.setAttribute('src', `images/${fujiImg_list[i]}`);
          count = i; //iの数値をcountに代入
          console.log(i);
        });
      }

      //関数式
      const nextStep = function () {
        if (count == 2) {
          count = 0;
          imageArea.setAttribute('src', 'images/' + fujiImg_list[count]);
          //0だから最初の画像に戻る
        } else {
          count++; //インクリメントは、+1
          imageArea.setAttribute('src', 'images/' + fujiImg_list[count]);
        }
        console.log(count);
      };

      const prevStep = function () {
        if (count == 0) {
          count = 2;
          imageArea.setAttribute('src', 'images/' + fujiImg_list[count]);
          //0だから最初の画像に戻る
        } else {
          count--; //インクリメントは、+1
          imageArea.setAttribute('src', 'images/' + fujiImg_list[count]);
        }
      };

      //次の画像を表示
      nextBtn.addEventListener('click', function () {
        nextStep();
      });

      //前の画像を表示
      preBtn.addEventListener('click', function () {
        prevStep();
      });
      console.log(count);
    </script>

```

- return（戻り値で呼ぶ）
- 値を入れる場合の function()の名前の設定

```js
    <script>
      const cake = 450;
      const takeOut = document.querySelector('.takeOut');
      const eatIn = document.querySelector('.eatIn');
      const span = document.querySelector('span');

      //関数の定義
      const caluculation = function (cake, tax) {
        const result = cake + cake * tax; //商品+消費税
        return result; //戻り値
      };

      //クリックイベント
      takeOut.addEventListener('click', function () {
        //関数の実行
        const price = caluculation(cake, 0.08);
        result.innerHTML = price;
      });

      eatIn.addEventListener('click', function () {
        //関数の実行
        const price = caluculation(cake, 0.1);
        result.innerHTML = price;
      });
    </script>

```

- グローバル変数
- ローカル変数

```js
<script>
      // グローバル変数の初期化※再代入可能にするためletを使う。
      let global = 'グローバル変数';

      //関数funcの定義
      const func = function () {
        //ローカル変数の初期化
        let local = 'ローカル変数';
        //グローバル変数の表示
        console.log(global);
        //ローカル変数の表示
        console.log(local);
        global = 'グローバル変数を再代入';

        console.log(global);

        var global = 'グローバル変数を再定義';
        console.log(global);
      };

      if (global) {
        var local2 = 'varは関数スコープ';
        let local3 = 'letはブロックスコープ';
      }

      //関数funcの実行
      func();
      //グローバルはvar global = "グローバル変数を再定義";で再定義されているので、undefinedになる。

      //グローバル変数の表示
      console.log(global);
      //ローカル変数の表示は、関数funcの中で定義されているので、呼び出せない。

      //console.log(local);
      //varは関数スコープなので、if文の外で呼び出せる。
      console.log(local2);
      //letはブロックスコープなので、if文の外で呼び出せない。
      console.log(local3);
    </script>
```

## 11 月 30 日

1. function の()の中に関数を定義(適当に自分で名前をつける)
2. それをつなげるだけ
3. 一番下には中に表示させたい文を書いて出力しておく

```js
    <script>
      //関数の定義(関数式)
      const yoshinoya = function (gyuudon, mori, amount, price) {
        console.log(gyuudon + 'の' + mori + '、' + amount + 'で' + price);
        //テンプレートリテラル
        console.log(`${gyuudon}の${mori}、${amount}で${price}`);
      };

      //関数の実行
      //複数の引数を読み込む場合は、,で区切る。
      yoshinoya('牛丼', '並盛', 'つゆだく', 388); //牛丼の並盛、つゆだくで 388 円
      yoshinoya('豚丼', '大盛', 'たまご', 592); //豚丼の大盛、たまごで 592 円
    </script>
```

## 11 月 16 日

```js
//論理和　★または★
const n1 = 1;
const n2 = 2;

if (n1 == 1 || n2 == 2) {
  console.log(true); //boolean型なので"""はなくてもいい
} else {
  console.log(false);
}

//論理積　★かつ★　 trueとfalse

//n2が1のとき
if (n1 == 1 && n2 == 1) {
  console.log(true); //boolean型なので"""はなくてもいい
} else {
  console.log(false);
}

//n2が2のとき 　　　trueとtrue
if (n1 == 1 && n2 == 2) {
  console.log(true); //boolean型なので"""はなくてもいい
} else {
  console.log(false);
}
```

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
