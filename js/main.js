function openNav() {
    $('header.gbl-header.main-header.main-header--logged-out.js-gbl-header.ng-scope').css({
        'position': 'relative',
        'top': '0'
    });
    $('.sub-header-nav.main-header--logged-out.ng-scope').css({'position': 'relative', 'top': '0'});
    document.getElementById("mySidenav").style.width = "40%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    $('header.gbl-header.main-header.main-header--logged-out.js-gbl-header.ng-scope').css({'position': 'fixed'});
    $('.sub-header-nav.main-header--logged-out.ng-scope').css({'position': 'fixed', 'top': ''});

    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}
$(document).mouseup(function (e) {
    var container = $(".sidenav");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        closeNav();
    }
});
$(document).ready(function () {
    $('.slick-track').slick({
        dots: true,

    });
    $('.slick-track2').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true

    });

    $('.topic_library_show').click(function (e) {
        //  calls for the parent wrapper so we can grab anything within
        var wrapper = $(this).parents(".topic_library_wrapper").first();

        wrapper.find('button.card__action.action__more-info--open.md-button.md-ink-ripple.m-10').toggleClass('topic_library_hide');
        wrapper.find('p.content__body__description').toggleClass('topic_library_hide');
        wrapper.find('ol.card-progress__lesson-listings').toggleClass('topic_library_hide');
        wrapper.find('button.more_info.card__action.md-button.md-ink-ripple').removeClass('topic_library_show');
        wrapper.find('button.more_info.card__action.md-button.md-ink-ripple').addClass('topic_library_hide');
    });
    $('button.card__action.action__more-info--open.md-button.md-ink-ripple.m-10').click(function (e) {
        var wrapper = $(this).parents(".topic_library_wrapper").first();
        wrapper.find('button.card__action.action__more-info--open.md-button.md-ink-ripple.m-10').toggleClass('topic_library_hide');
        wrapper.find('p.content__body__description').toggleClass('topic_library_hide');
        wrapper.find('ol.card-progress__lesson-listings').toggleClass('topic_library_hide');
        wrapper.find('button.more_info.card__action.md-button.md-ink-ripple').toggleClass('topic_library_show');
    });
});