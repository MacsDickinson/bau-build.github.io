$(window).scroll(function() {
    setMenuStuck();
    setActiveContent();
    $('.site-title').css('margin-top', ((parseInt($(window).scrollTop()) / 3) + 72) + 'px');
});

function setMenuStuck() {
    if ($("#masthead").length > 0) {
        if ($(window).scrollTop() > $("#masthead").outerHeight()) {
            $('.menu.main').addClass('stuck');
        } else {
            $('.menu.main').removeClass('stuck');
        };
        if ($(window).scrollTop() > $("#masthead").outerHeight()) {
            $('.side.menu').addClass('stuck');
        } else {
            $('.side.menu').removeClass('stuck');
        };
    } else {
        $('.menu.main').addClass('stuck');
        $('.side.menu').addClass('stuck');
    }
}

function setActiveContent() {
    $('.side.menu li span').each(function() {
        var elementClicked = $(this).attr("href");
        var target = $(elementClicked).offset().top;
        var height = $(elementClicked).outerHeight();

        if ($(window).scrollTop() >= target && $(window).scrollTop() < target + height) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
    if ($('.side.menu li span.active').length == 0) {
        $('.side.menu li span').first().addClass('active');
    };
}
$(function() {
    setActiveContent();
    setMenuStuck();

    $(document).on('click', '.side.menu li a', function(e) {
        e.preventDefault();

        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 500);

        if (history != null)
            history.pushState(null, '', '#/docs' + elementClicked);
        return false;
    });
});