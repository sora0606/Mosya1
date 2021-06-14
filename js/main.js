/////////////////////////////////////////////////
// ページのjQuery
/////////////////////////////////////////////////

$(function(){
/*=================================================
    ハンバーガーメニュー
===================================================*/
    $('.toggle_btn').on('click' , function(){
        // #headerにopenクラスがあるか
        if(!$('#header').hasClass('open')){
            // クラスを追加
            $('#header').addClass('open');
        }else{
            // クラスを削除
            $('#header').removeClass('open');
        }
    });

    // #maskをクリックしたときにメニューを閉じる処理
    $('#mask').on('click' , function(){
        $('#header').removeClass('open');
    });

    // リンクをクリックした時にメニューを閉じる
    $('#navi a').on('click' , function(){
        $('#header').removeClass('open');
    });

/*=================================================
    スムーススクロール
===================================================*/
    // ページ内リンクのイベント
    $('a[href^="#"]').click(function(){
        // リンクの取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href =="" ? 'html' : href);
        // トップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う
        $("html , body").animate({scrollTop: position} , 600 , 'swing');
        return false;
    });

/*=================================================
    PICK UP スライダー
===================================================*/
 // カルーセル用 jQueryプラグイン「slick」の設定
    $(".slick-area").slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    });

/*=================================================
    スクロール時の画像フェード表示
===================================================*/
// スクロール時のイベント
    $(window).scroll(function(){
        // fadeinクラスに対して順に処理を行う
        $('.fadein').each(function(){
            // スクロールした距離
            let scroll = $(window).scrollTop();
             // fadeinクラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // fadeinクラスの要素が画面下にきてから200px通過したタイミングで要素を表示
            if(scroll > target - windowHeight +200){
                $(this).css('opacity' , '1');
                $(this).css('transform' , 'translateY(0)');
            }
        });
    });

});
