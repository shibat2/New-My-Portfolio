// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("appeartext");
		} else {
			$(this).removeClass("appeartext");
		}
    });
}
  
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	EachTextAnimeControl();
});
  
// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	var element = $(".eachTextAnime");
		element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
				textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
				} else {
				var n = i / 10;
				textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
	EachTextAnimeControl();
});	

/*------------------ふわっ------------------------*/
function fadeAnime(){
	$('.fadeUpTrigger').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeUp');
		}else{
			$(this).removeClass('fadeUp');
		}
	});
}
$(window).scroll(function (){
	fadeAnime();
});
$(window).on('load', function(){
	fadeAnime();
});

/*------------------index.html-works-----------------*/
var openBtns = document.querySelectorAll(".open-modal");
var modals = document.querySelectorAll(".modal");
var closeBtns = document.querySelectorAll(".close-modal");

// クリックで対応するモーダルを開く
openBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        var targetModal = document.getElementById(this.dataset.target);
        if (targetModal) {
            targetModal.style.display = "block";
        }
    });
});

// 閉じるボタンでモーダルを閉じる
closeBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        this.closest(".modal").style.display = "none";
    });
});

// モーダルの外側をクリックしたら閉じる
window.addEventListener("click", function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});