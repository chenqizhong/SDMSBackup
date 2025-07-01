function hideBall() {
    $('#numberBall1').hide();
    $('#numberBall2').hide();
    $('#numberBall3').hide();
    $('#numberBall4').hide();
    $('#numberBall5').hide();
    $('#numberBall6').hide();
}
function showBall() {
    $('#numberBall1').fadeIn(100);
    $('#numberBall2').fadeIn(500);
    $('#numberBall3').fadeIn(700);
    $('#numberBall4').fadeIn(1000);
    $('#numberBall5').fadeIn(1200);
    $('#numberBall6').fadeIn(1500);
}

$(document).ready(function () {
    $("#panel").slideDown("slow");//開發中
    //先隱藏彩球
    hideBall();
    //面板滑動    
    let boolean = false;
    $("#flip").click(function () {
        if (boolean) {
            $("#panel").slideDown("slow");
        }
        else {
            $("#panel").slideUp("slow");
        }
        boolean = !boolean;
    });
    //取號按鈕
    $('#goGet').click(function () {
        hideBall();
        let numbers = [];//普通號
        let specialNumber = 0;//特別號
        for (let r = 0; numbers.length < 5; r++) {
            let number = Math.floor(Math.random() * 37);
            if (number != 0) {
                let have = false;
                for (let i = 0; i < numbers.length; i++) {
                    if (number == numbers[i]) {
                        have = true;
                    }
                }
                if (!have) {
                    numbers.push(number);
                }
                // let getSpecialNumber=false;
                // if(Math.floor(Math.random() * 8)!=0){
                // }
                specialNumber =Math.floor(Math.random() * 8);
            }
        }
        //show number
        showBall();
        $('#numberBall1').text(numbers[0]);
        $('#numberBall2').text(numbers[1]);
        $('#numberBall3').text(numbers[2]);
        $('#numberBall4').text(numbers[3]);
        $('#numberBall5').text(numbers[4]);
        $('#numberBall6').text(specialNumber);
    })
});