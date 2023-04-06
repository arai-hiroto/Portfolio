// ～～～ヘッダーのドロップダウンメニュー

// ハンバーガーメニュー～～～
$(".header__openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".header__nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".header__nav--list--item--link, header__nav--contact--tel--link,header__nav--contact--is--link").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".header__openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".header__nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
// ハンバーガーメニュー～～～

// スライドショー～～～　参考：https://junpei-sugiyama.com/slick-zoom/
$(function () {
	$(".main__slider")
	  // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
	  .on("init", function () {
		$('.slick-slide[data-slick-index="0"]').addClass("add-animation");
	  })
	  // 通常のオプション
	  .slick({
		autoplay: true, // 自動再生ON
		fade: true, // フェードON
		arrows: false, // 矢印OFF
		speed: 2000, // スライド、フェードアニメーションの速度2000ミリ秒
		autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
	  })
	  .on({
		// スライドが移動する前に発生するイベント
		beforeChange: function (event, slick, currentSlide, nextSlide) {
		  // 表示されているスライドに"add-animation"のclassをつける
		  $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
		  // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
		  $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
		},
		// スライドが移動した後に発生するイベント
		afterChange: function () {
		  // 表示していないスライドはアニメーションのclassを外す
		  $(".remove-animation", this).removeClass(
			"remove-animation add-animation"
		  );
		},
	});
});

$(function () {
	$('.slider').slick({
		asNavFor:'.thumb',
		arrows: false,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3000,
		fade: true,
		swipe: true,
	});
	$('.thumb').slick({
		asNavFor:'.slider',
		arrows: false,
		focusOnSelect: true,
		slidesToShow:3,
		slidesToScroll:1
	});
})
// ～～～スライドショー

// toppageへ戻るボタン～～～
$(function () {
	// スクロールしたら「トップに戻る」ボタンが表示される
	const toTopButton = $(".pagetop");
	const scrollHeight = 200;
	toTopButton.hide();
	$(window).scroll(function () {
	  if ($(this).scrollTop() > 230) {
		toTopButton.fadeIn();
	  } else {
		toTopButton.fadeOut();
	  }
	});

	// 「トップに戻る」ボタンをクリックしたらスクロールで戻る
	toTopButton.click(function () {
	  $("body,html").animate({ scrollTop: 0 }, 200);
	  return false;
	});
  });
// ～～～toppageへ戻るボタン