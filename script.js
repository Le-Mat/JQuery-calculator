let strScreen = '';

$('.btn').on('click',function() {
    let sign = $(this).text();
    if (sign == '=' || sign == 'C' ) 
    { 
        result(sign);
    }
    else { 
        strScreen += sign;
        $('.screen').text(strScreen); }
    sign = '';
    

})

function result(sign) {
    if (sign == 'C'){
        $('.screen').text('');
        strScreen = '';
    }
    else {
        let res = eval(strScreen);
        $('.screen').text(res);
        strScreen = res;
    }
}