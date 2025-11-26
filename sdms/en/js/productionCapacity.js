$(window).on('load', function () {//等待整個網頁(DOM、img)加載完成再來滾動
    //當onLoad進來時，先讀一下網址，如果有讀到fromBtn=true那代表是從「業務-碼頭營運」導過來的，就可以走一下邏輯
    //onLoad時，先讀網址
    const urlParams = new URLSearchParams(window.location.search);
    //擷取變數
    const fromBtn = urlParams.get('fromBtn');
    if (fromBtn) {
        const $target = $('#berthing');//港區條件的標籤位子
        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top
            }, 800);

            // 清除網址參數（讓使用者看不到偷埋的變數）呱呱~
            window.history.replaceState({}, document.title, window.location.pathname);
        }


    }
})