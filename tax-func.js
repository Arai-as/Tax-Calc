$(document).ready(function(){
//各月の給料を合計する関数
function sumSalaly(x){
    var count=0;
    var sum=0;
    $('.base-money').each(function(){
        var salaly=0;
        salaly=parseInt($(this).val());
        if(!salaly){
            salaly=0;
            count=count+1;
        }
        sum=sum+salaly;
    });
    if(x==0){
        return(sum);
    }
    else if(x==1){
        return(count);
    }
}
//扶養枠の限界と現在までの給与合計との差を計算する関数
function taxBorder(){
    var max=1030000;
    var sum=sumSalaly(0);
    return(max-sum);
}
//残りの扶養枠で何時間働けるかの計算をする関数
function MaxWork(){
    var $wage=parseInt($('#wage').val());
    if(!wage){
        wage=0;
    }
    var count=sumSalaly(1);
    var money=taxBorder();
    return(Math.floor(money/count/$wage));
}
//計算ボタンが押された時の処理
$('.btn').on('click',function(){
    $('.result-sum').text(sumSalaly(0));
    $('.Bminas').text(taxBorder());
    $('.time-m').text(MaxWork());
});
//勤労学生かそうでないかの結果フォーム切り替え
$('.borderN').show();
$('.borderK').hide();
$("input[name='kinrou-or']").on('change',function(){
    var val=$(this).val();
    if(val=="はい"){
        $('.borderN').hide();
        $('.borderK').show();
    }
    else if(val=="いいえ"){
        $('.borderN').show();
        $('.borderK').hide();
    }
});
});
