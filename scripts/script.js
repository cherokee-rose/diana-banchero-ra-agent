/* 
    TODO:
        1. Fix the scroll y-coodridinates;
        2. Form validation;
*/


$(document).ready(function(){
    $(window).scroll(function(){
        // scroll navbar on scroll script
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // active link in the navigation bar

        // about section
        if (this.scrollY > 650 && this.scrollY < 1350){
            $("a[href='#about']").addClass("active");
        }else{
            $("a[href='#about']").removeClass("active");
        }

        // serices section
        if (this.scrollY > 1350 && this.scrollY < 1750){
            $("a[href='#services']").addClass("active");
        }else{
            $("a[href='#services']").removeClass("active");
        }

        // contact section
        if (this.scrollY > 1750 && this.scrollY < 2250){
            $("a[href='#contact']").addClass("active");
        }else{
            $("a[href='#contact']").removeClass("active");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 650){
            $('.scroll-up').addClass('show');
        }else{
            $('.scroll-up').removeClass('show');
        }
    });

    // animate the gallery section with changing the background image
    
    var count = 1;
    var url = "";
    
    const phrases = [["Embrace", "Your Passion"], ["Build", "Your Future"], ["Follow", "Your Path"]];
    var text1 = "";
    var text2 = "";

    function updateGallery(){
        if (count == 3){
            count = 1;
        }else{
            count++;
        }

        text1 = phrases[count - 1][1];
        text2 = phrases[count - 1][0];

        url = '../images/gallery_' + String(count);

        $('.gallery').css('background-image', 'url(' + url + '.jpg' + ')');
        $('.gallery-content .text-1').html(text1);
        $('.gallery-content .text-2').html(text2);
    }

    var timeInterval = 4000;
    var currentInterval = setInterval(updateGallery, timeInterval);

    // slide-up script
    $('.scroll-up').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css('scrollBehaviour', 'auto');
    });

    // gallery pictures arrows script
    $('.gallery-content .left-arrow').click(function(){

        // update the gallery

        if (count - 1 == 0){
            count = 2;
        }else{
            count -= 2;
        }

        updateGallery();

        // clear and update the current interval
        clearInterval(currentInterval);
        currentInterval = setInterval(updateGallery, timeInterval);
        
    });

     $('.gallery-content .right-arrow').click(function(){

        updateGallery();

        // clear and update the current interval
        clearInterval(currentInterval);
        currentInterval = setInterval(updateGallery, timeInterval);
        
    });

});