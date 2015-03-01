$(document).ready(function(){
    //bxSlider init
    $('.bxslider').bxSlider({
        auto: true,
        controls: false,
        speed: 800
    });

    //User-menu
    $('.mobile-menu-hamburger').click(function() {
        $('#user-menu').slideToggle('fast');
    });

    //Main menu
    $('.selectable-menu').click(function() {
        $('.drop-down.active').not($(this).find('.drop-down')).removeClass('active').slideUp('fast');
        $(this).find('.drop-down').toggleClass('active').slideToggle('fast');
    });
});
