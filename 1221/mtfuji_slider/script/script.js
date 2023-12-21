//初期化
const slide = document.querySelector('.slide');
const Images = document.querySelectorAll('.slide img'); //グローバル変数　スライド画像
console.log(Images);

console.log(Images[Images.length - 1]); //4番目の画像

//div = "slide"の中の最後の画像[images.length - 1]を最初の画像[0]の前
//insertBeforeはappendChildの逆、前にいれる
slide.insertBefore(Images[Images.length - 1], Images[0]);
console.log(Images); //初期値

//button 左
const leftBtn = document.querySelector('.leftBtn');

const leftSlider = function () {
  //ローカル変数　このブロックにしか有効ではない
  const slideImages = document.querySelectorAll('.slide img');
  console.log(slideImages); //クリックを押した時点でのhtml
  //左側の余分な画像を。最後に移動
  slide.appendChild(slideImages[0]);
  //入っているstyle属性を削除
  slideImages[1].removeAttribute('style');
};

leftBtn.addEventListener('click', leftSlider);

//button 右
const rightBtn = document.querySelector('.rightBtn');
//関数化
const rightSlider = function () {
  //ローカル変数　このブロックにしか有効ではない
  const slideImages = document.querySelectorAll('.slide img');
  slideImages[1].removeAttribute('style');
  slideImages[0].style.marginLeft = '0%';
  console.log(slideImages);
  slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
  //4枚目の画像を1枚目の前に持ってくる
};

rightBtn.addEventListener('click', rightSlider);

window.setInterval(leftSlider, 2000); //2000ミリ秒 = 2秒

const widthsize = window.innerWidth; //現在のブラウザの横幅
document.body.addEventListener('click', function (event) {
  if (event.clientX <= widthsize / 2) {
    leftSlider();
  } else {
    leftSlider();
  }
});
