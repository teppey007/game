$(function () {
    setInterval(()=>{
        $('#ball').css('left',Math.random()*450 +'px');
        $('#ball').css('top',Math.random()* 450 +'px');
    },2000)    

    let point = 0;

    $('#ball').on('click',()=>{
        point += 100;
        $('#point').html(point);
    })    



})

