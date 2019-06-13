$(document).ready(function () {
    if ($('#interests-box')) {
        let colors = ['#090088', '#930077', '#bb7171', '#a64942', '#009975', '#71a0a5', '#004a2f', '#103c42','#d61d4e','#6b8c42'];
        for (let i = 1; i < 10; i++) {
            let item = $('#interests-box li:nth-child(' + i + ') span');
            item.css('background-color', colors[Math.floor(Math.random() * colors.length)]);
        }

        setInterval(function () {
            $('#interests-box li span').removeClass('active');
            let rnd = Math.floor(Math.random() * 9);
            let item = $('#interests-box li:nth-child(' + rnd + ') span');
            item.css('background-color', colors[Math.floor(Math.random() * colors.length)]);
        }, 100);
    }
    if($('#box1')){
        $('#box1').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000
        });
    }
    if($('#box1')){
        $('#box2').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000
        });
    }
    if($('#box3')){
        $('#box3').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000
        });
    }
});
$('#button').click(function(){
    $(this).toggleClass('clicked');
    $('#menu').toggleClass('active');
    $('body').toggleClass('overlay');
});