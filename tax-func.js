$(document).ready(function(){
//計算ボタンが押された時の処理
$('.btn').on('click',function(){
    var sum=0;
    var salaly;
    var TaxBorder=1030000;
    var minasBorder;
    var count=0;
    var wage=parseInt($('#wage').val());
    var moneySpace;
    var timeH;
    if(!wage){
        alert("時給を入力してください");
        exit;
    }
    $('.base-money').each(function(){
        salaly=$(this).val();
        if(!salaly){
            salaly=0;
            count=count+1;
        }
        sum=sum+parseInt(salaly);
    });
    minasBorder=TaxBorder-sum;
    moneySpace=minasBorder/count;
    timeH=Math.floor(moneySpace/wage);
    $('.result-sum').text(sum);
    $('.Bminas').text(minasBorder);
    $('.time-m').text(timeH);
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
