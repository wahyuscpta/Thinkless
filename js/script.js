window.addEventListener("load", function(){
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
        'transform': 'translateY('+ 0 +'px)',
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


    if(nScroll > $('.bg-fitur').offset().top-450){

        $('.chat-bot').css({
            'opacity': 1,
            'transition': .7 + 's' 
        });

        $('.title-fitur').css({
            'opacity': 1,
            'transition': .7 + 's' ,
            'transform': 'translateY('+ 0 +'px)'
        });

        $('.title').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .3 + 's'
        });

        $('.fitur').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .5 + 's'
        });

        $('.polkadot-fitur').css({
            'opacity': 1,
            'transform': 'translateX('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .7 + 's'
        });
    } 

    if(nScroll > $('.bg-job').offset().top-450){

        $('.img-job img').css({
            'opacity': 1,
            'transition': .7 + 's' ,
            'margin-top': 0 + 'px'
        });

        $('.border-job').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .5 + 's',
        });

        $('.more-job').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .7 + 's',
        });

        $('.icon-job i').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .9 + 's',
        });

        $('.title-job').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .3 + 's' ,
        });

        $('.text-job h1').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'line-height': 1.5 ,
            'transition': 1 + 's',
            'transition-delay': .5 + 's' ,
        });

        $('.text-job p').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .7 + 's' ,
        });

        $('.btn-job').css({
            'opacity': 1,
            'margin-top': 100 + 'px',
            'transition': .7 + 's' ,
        });

        $('.polkadot-job').css({
            'opacity': 1,
            'right': -40 + 'px',
            'transition': .7 + 's' ,
            'transition-delay': 1 + 's' ,
        });
            
    } 

    if(nScroll > $('.bg-kelas').offset().top-450){

        $('.title-kelas').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's'
        });

        $('.kelas').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's',
        });

        $('.polkadot-kelas').css({
            'opacity': 1,
            'left': 150 + 'px',
            'transition': .7 + 's',
            'transition-delay': .5 + 's'
        });
                
    } 

    if(nScroll > $('.bg-map').offset().top-450){
        $('.title-teks').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .3 + 's' ,
        });

        $('.text-map h1').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'line-height': 1.5 ,
            'transition': 1 + 's',
            'transition-delay': .3 + 's' ,
        });

        $('.text-map p').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .5 + 's' ,
        });

        $('.btn-map').css({
            'opacity': 1,
            'margin-top': 0 + 'px',
            'transition': .7 + 's' ,
        });

        $('.img-map').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
        });

        $('#member-1').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .3 + 's' ,
        });

        $('#member-2').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .5 + 's' ,
        });

        $('#member-3').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .7 + 's' ,
        });

        $('#member-4').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's' ,
            'transition-delay': .9 + 's' ,
        });
    }
    
    if(nScroll > $('.bg-join').offset().top-450){

        $('.join').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's'
        });

        $('.text-join').css({
            'opacity': 1,
            'margin-top': 0,
            'transition': .7 + 's',
            'transition-delay': .3 + 's'
        });

        $('.icon-join i').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's',
            'transition-delay': .3 + 's'
        });

        $('.btn-join').css({
            'opacity': 1,
            'margin-top': 30,
        });

        $('.polkadot-join').css({
            'opacity': 1,
            'left': 30 + 'px',
            'transition': .7 + 's',
            'transition-delay': .7 + 's'
        });
                
    } 

    if(nScroll > $('.bg-footer').offset().top-450){

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

});