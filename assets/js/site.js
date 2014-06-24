$(window).scroll(function() {
    setActiveContent();
    $('.site-title').css('margin-top', ((parseInt($(window).scrollTop()) / 3) + 72) + 'px');
});

function setActiveContent() {
    $('.side.menu li a').each(function() {
        var elementClicked = $(this).attr("href");
        var target = $(elementClicked).offset().top;
        var height = $(elementClicked).outerHeight();

        if ($(window).scrollTop() >= target && $(window).scrollTop() < target + 10 + height) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });
    if ($('.side.menu li.active').length == 0) {
        $('.side.menu li').first().addClass('active');
    };
}
$(function() {
    setActiveContent();

    // Set menu widths if window is resized
    $(window).resize(function() {
        $('.menu.stuck').each(function() {
            $(this).width($(this).parent().width())
        })
    });

    $(document).on('click', '.navbar-default a', function(e) {
        $('#mainnav-collapse-1', $(this).closest('.navbar')).removeClass('in');
    });
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