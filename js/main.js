$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали', 
        after_label: 'Со скинали'
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true, 
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
    });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active')
    });
    /* Настройка селект переназначили класс блока, вроде не сложно */
    $('.select_checked').on('click', function(){
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function(){
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $("a[href^='#']").click(function (){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -150 + "px" });
        return false;
    });
    $('[type="tel"]').mask("+7 (999) 999-99-99");
    /* Карта */
    var reviews = $('.reviews');
    var reviewsTop =  reviews.offset().top;
    $(window).bind('scroll', function() {
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5e493115e64cff510bdcb9a390ad7148d87fd258a756a61c1210e1f74de95f98&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
            $(window).unbind('scroll')
        }
    });
});