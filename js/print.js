$(document).ready(function(){
    $('.slider').each(function(){
        var owl = $("#slide-show", this);
        owl.owlCarousel({
            loop:false,
            nav:false,
            margin:0,
            responsiveClass:true,
            items:4,
            dots:true,
            responsive:{
                0:{
                    items:1,
                },
                475:{
                    items:2,
                },
                767:{
                    items:2,
                },
                768:{
                    items:3,
                },
                1000:{
                    items:4,
                }
            },
            onTranslated : callback
        });
        let owlData = owl.data('owlCarousel');
        $('.btn-next',this).click(function() {
            owl.trigger('next.owl.carousel');
        });
        $('.btn-pre',this).click(function() {
            owl.trigger('prev.owl.carousel');
        });
        callback();
        function callback(){
            if($('.owl-item', owl).eq(0).hasClass('active')){
                $('.btn-pre').addClass('g');
            }else{
                $('.btn-pre').removeClass('g');
            }
            if($('.owl-item',owl).eq(-1).hasClass('active')){
                $('.btn-next').addClass('g');
            }else{
                $('.btn-next').removeClass('g');
            }
        };
    });
    $('.header__nav-bar-icon').click(function()
    {
        $('.header__mobile').addClass("show-menu");
        $('.header__mobile').removeClass("hide-menu-");
        $('.header__mobile').removeClass("hide-menu");
        $('.filler').addClass("filler-black");
    });
    $('.close').click(function(){
        $('.header__mobile').removeClass("show-menu");
        $('.header__mobile').addClass("hide-menu-");
        $('.header__mobile').addClass("hide-menu");
        $('.filler').removeClass("filler-black");
    });
    $('.filler').click(function(){
        $('.header__mobile').removeClass("show-menu");
        $('.header__mobile').addClass("hide-menu-");
        $('.header__mobile').addClass("hide-menu");
        $('.filler').removeClass("filler-black");
    });

    $('.header__mobile').each(function(){
        $('.m-menu-1').click(function (e) { 
            $('.m-menu-2',this).toggle();
        });
    })
})