$(document).ready(function(){
    
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
});
