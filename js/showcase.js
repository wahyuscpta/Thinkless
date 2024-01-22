window.addEventListener("load", function(){
    $('#btn-bar').css({
        'opacity': 1,
        'transition': .7 + 's',
    });

    $('.logo').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's',
        'transition-delay': .1 + 's' 
    });

    $('nav ul').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's' 
    });

    $('.sign-up').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's' ,
        'transition-delay': .5 + 's'
    });

    $('.sign-in').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's' ,
        'transition-delay': .3 + 's'
    });

    $('.title-banner').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's' ,
        'transition-delay': .3 + 's' ,
    });

    $('.text-banner h1').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'line-height': 1.5 ,
        'transition': 1 + 's',
        'transition-delay': .5 + 's' ,
    });

    $('.text-banner p').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's' ,
        'transition-delay': .7 + 's' ,
    });

    $('.btn-banner').css({
        'opacity': 1,
        'margin-top': 0 + 'px',
        'transition': .7 + 's' ,
    });

    $('.img-banner img').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's' ,
        'transition-delay': .5 + 's' ,
    });

    $('.border-image').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's' ,
        'transition-delay': .7 + 's' ,
    });

    $('.char-img').css({
        'opacity': 1,
        'z-index': 1,
        'margin-top': 0,
        'transition': .7 + 's' ,
        'transition-delay': .9 + 's' ,
    });

    $('.member-banner').css({
        'opacity': 1,
        'z-index': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's' ,
        'transition-delay': 1 + 's' ,
    });

    $('.discuss-banner').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's' ,
        'transition-delay': 1 + 's' ,
    });

    $('.icon-banner i').css({
        'opacity': 1,
        'transform': 'translateY('+ 0 +'px)',
        'transition': .7 + 's' ,
        'transition-delay': .7 + 's' ,
    });

    $('.polkadot-banner').css({
        'opacity': 1,
        'right':  -30 + 'px',
        'transition': .7 + 's' ,
        'transition-delay': 1 + 's' ,
    });

    $('.polkadot-banner img').css({
        'opacity': 1,
        'transform': 'rotate(90deg)',
        'transition': .7 + 's' ,
        'transition-delay': 1 + 's' ,
    });

})

$(window).scroll(function(){
var nScroll = $(this).scrollTop();

    if(nScroll > $('.bg-trending').offset().top-450){

        $('.chat-bot').css({
            'opacity': 1,
            'transition': .7 + 's'
        });

        $('.title-bg-trending').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's'
        });

        $('.trending-1').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': 1 + 's'
        });

        $('.trending-2').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': 1 + 's'
        });

        $('.trending-3').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': 1 + 's'
        });

        $('.trending-4').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': 1 + 's'
        });

        $('.polkadot-trending').css({
            'opacity': 1,
            'right': 30 + 'px',
            'transition': .7 + 's',
            'transition-delay': .3 + 's'
        });
    }

    else if(nScroll < $('.bg-trending').offset().top+100){

        $('.chat-bot').css({
            'opacity': 0,
            'transition': .7 + 's'
        });

        $('.title-bg-trending').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': .7 + 's'
        });

        $('.trending-1').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': 1 + 's'
        });

        $('.trending-2').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': 1 + 's'
        });

        $('.trending-3').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': 1 + 's'
        });

        $('.trending-4').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': 1 + 's'
        });

        $('.polkadot-trending').css({
            'opacity': 0,
            'right': 0 + 'px',
            'transition': .7 + 's',
            'transition-delay': .5 + 's'
        });
    }

    if(nScroll > $('.bg-work').offset().top-450){

        $('.title-work').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's'
        });

        $('.work').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': 1 + 's'
        });

        $('.polkadot-work').css({
            'opacity': 1,
            'left': 30 + 'px',
            'transition': .7 + 's',
            'transition-delay': .3 + 's'
        });
        
    }

    else if(nScroll < $('.bg-work').offset().top+100){

        $('.title-work').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': .7 + 's'
        });

        $('.work').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': 1 + 's'
        });

        $('.polkadot-work').css({
            'opacity': 0,
            'left': 0 + 'px',
            'transition': .7 + 's',
            'transition-delay': .3 + 's'
        });
        
    }

    if(nScroll > $('.bg-footer').offset().top-450){

        $('.polkadot-footer').css({
            'opacity': 1,
            'left': 30 + 'px',
            'transition': .7 + 's'
        });

        $('.footer h3').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's'
        });

        $('.footer p').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's',
            'transition-delay': .3 + 's'
        });

        $('.footer ul li a').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's',
            'transition-delay': .3 + 's'
        });

        $('.footer ul li i').css({
            'opacity': 1,
            'margin-top': 20 + 'px',
            'transition': .7 + 's',
        });

        $('.copyright').css({
            'transition-delay': .5 + 's',
            'transition': .7 + 's',
            'opacity': 1,
        });
                
    } 

    else if(nScroll < $('.bg-footer').offset().top+100){

        $('.footer h3').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': .7 + 's'
        });

        $('.footer p').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': .7 + 's',
        });

        $('.footer ul li a').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': .7 + 's',
        });

        $('.footer ul li i').css({
            'opacity': 0,
            'margin-top': 100 + 'px',
            'transition': .7 + 's',
        });

        $('.copyright').css({
            'opacity': 0,
            'transition': .7 + 's',
        });                
    } 
});

$(document).ready(function(){
    $(".icon-title-1").click(function(){
        $(".saved-1 path").toggleClass("fill-color");
    });

    $(".icon-title-2").click(function(){
        $(".saved-2 path").toggleClass("fill-color");
    });

    $(".icon-title-3").click(function(){
        $(".saved-3 path").toggleClass("fill-color");
    });

    $(".icon-title-4").click(function(){
        $(".saved-4 path").toggleClass("fill-color");
    });

    $(".icon-title-5").click(function(){
        $(".saved-5 path").toggleClass("fill-color");
    });

    $(".icon-title-6").click(function(){
        $(".saved-6 path").toggleClass("fill-color");
    });

    $(".love-1").click(function(){
        $(".love-1 path").toggleClass("fill-color-love");
    });

    $(".love-2").click(function(){
        $(".love-2 path").toggleClass("fill-color-love");
    });

    $(".love-3").click(function(){
        $(".love-3 path").toggleClass("fill-color-love");
    });

    $(".love-4").click(function(){
        $(".love-4 path").toggleClass("fill-color-love");
    });

    $(".love-5").click(function(){
        $(".love-5 path").toggleClass("fill-color-love");
    });

    $(".love-6").click(function(){
        $(".love-6 path").toggleClass("fill-color-love");
    });
});