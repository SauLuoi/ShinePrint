$(document).ready(function(){
    $('.slider').each(function(){
        let container = $(this);
        var owl = $("#slide-show", container);
        owl.owlCarousel({
        navigation : false,
        items:4,
        });
        let owlData = owl.data('owlCarousel');
        $('.btn-next',container).click(function(ev){
            ev.preventDefault();
            owlData.next();
        });
        $('.btn-pre',container).click(function(ev){
            ev.preventDefault();
            owlData.prev();
        });
    });

    $('.icon-bars').click(function(){
        $('.menu__mobile').addClass("show-menu");
        $('.menu__mobile').removeClass("hide-menu");
        $('.menu__mobile').removeClass("hide-menu-");
        $('.main-container').addClass("filler-black");
    });
    $('.close-menu').click(function(){
        $('.menu__mobile').removeClass("show-menu");
        $('.menu__mobile').addClass("hide-menu-");
        $('.menu__mobile').addClass("hide-menu");
        $('.main-container').removeClass("filler-black");
    });


    //menu mobile

    $('.btn-search').click(function(){
        $('.search').toggle();
    });

    //scroll window
    var header = document.getElementsByClassName('.header-nav');
    var scrollTop = header.offsetTop;

    function scroll(){
        window.pageYOffset>= scrollTop ? header.addClass("scroll") : header.removeClass("scroll");
    }
    window.onscroll = function(){scroll()};


    $('.menu__mobile-ul-li').click(function(){
        let u=$(this);
        $('.menu__mobile-ul-ul',u).toggle();
    });
});