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

    if(nScroll > $('.bg-trending').offset().top-450){

        $('.chat-bot').css({
            'opacity': 1,
            'transition': .7 + 's'
        });

        $('.title-trending').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's'
        });

        $('.bg-trending .kelas').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': 1 + 's'
        });

        $('.polkadot-trending').css({
            'opacity': 1,
            'left': 150,
            'transition': 1 + 's',
            'transition-delay': .3 + 's'
        });
    }

    else if(nScroll < $('.bg-trending').offset().top+100){

        $('.chat-bot').css({
            'opacity': 0,
            'transition': .7 + 's'
        });

        $('.title-trending').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': .7 + 's'
        });

        $('.bg-trending .kelas').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': 1 + 's'
        });

        $('.polkadot-trending').css({
            'opacity': 0,
            'left': 0,
            'transition': 1 + 's'
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
            'margin-top': 30 + 'px',
        });

        $('.polkadot-join').css({
            'opacity': 1,
            'left': 30 + 'px',
            'transition': .7 + 's',
            'transition-delay': .7 + 's'
        });
                
        } 

    else if(nScroll < $('.bg-join').offset().top+100){

        $('.join').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': .7 + 's'
        });

        $('.text-join').css({
            'opacity': 0,
            'margin-top': 50,
            'transition': .7 + 's',
        });

        $('.icon-join i').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': .7 + 's',
        });

        $('.btn-join').css({
            'opacity': 0,
            'margin-top': 80,
            'transition': .7 + 's',
        });

        $('.polkadot-join').css({
            'opacity': 0,
            'left': 0 + 'px',
            'transition': .7 + 's',
        });
                
        } 

    if(nScroll > $('.bg-kelas').offset().top-450){

        $('.bg-kelas .title-trending').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': .7 + 's',
        });

        $('.category').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': 1 + 's',                
            'transition-delay': .3 + 's'
        });

        $('.kategori-konten').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': 1 + 's',                
            'transition-delay': .5 + 's'
        });

        $('.bg-kelas .kelas').css({
            'opacity': 1,
            'transform': 'translateY('+ 0 +'px)',
            'transition': 1 + 's'
        });

        $('.polkadot-kelas').css({
            'opacity': 1,
            'left': 30,
            'transition': 1 + 's',
            'transition-delay': .3 + 's'
        });
    }

    else if(nScroll < $('.bg-kelas').offset().top+100){

        $('.bg-kelas .title-trending').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': .7 + 's',
        });

        $('.category').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': 1 + 's',      
        });

        $('.kategori-konten').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': 1 + 's',      
        });

        $('.bg-kelas .kelas').css({
            'opacity': 0,
            'transform': 'translateY('+ 100 +'px)',
            'transition': 1 + 's'
        });

        $('.polkadot-kelas').css({
            'opacity': 0,
            'left': 0,
            'transition': 1 + 's',
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
    $(".category").click(function(){
        var val = $(this).attr("data-filter");
        
        $(this).addClass('active').siblings().removeClass('active');

        if (val == "all"){
            $(".kelas-center").show(700);
        } else {
            $(".kelas-center").not("."+val).hide(700);
            $(".kelas-center").filter("."+val).show(700);
        } 
    })
});

var drop_btn = document.querySelector(".drop-btn span");
var tooltip = document.querySelector(".tooltip");
var menu_wrapper = document.querySelector(".wrapper");
var menu_bar = document.querySelector(".menu-bar");

drop_btn.onclick = (()=>{
    menu_wrapper.classList.toggle("show");
    tooltip.classList.toggle("show");
});