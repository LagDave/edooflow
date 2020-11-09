$(document).ready(function() {
    // verify
    var verify = $('.--otp');

    function goToNextInput(e) {
        var key = e.which,
            t = $(e.target),
            sib = t.next('input');

        if (key != 9 && (key < 48 || key > 57)) {
            e.preventDefault();
            return false;
        }

        if (key === 9) {
            return true;
        }

        if (!sib || !sib.length) {
            sib = verify.find('input').eq(0);
        }
        sib.select().focus();
    }

    function onKeyDown(e) {
        var key = e.which;

        if (key === 9 || (key >= 48 && key <= 57)) {
            return true;
        }

        e.preventDefault();
        return false;
    }

    function onFocus(e) {
        $(e.target).select();
    }

    verify.on('keyup', 'input', goToNextInput);
    verify.on('keydown', 'input', onKeyDown);
    verify.on('click', 'input', onFocus);

    // input mask
    $("#phone").mask("(999) 999-9999");

    //sidebar
    $('.l-sidebar__toggle').on('click', function(event) {
        toggleSidebar();
    });

    function toggleSidebar(type) {
        if (type == "close") {
            //close language
            $('.l-sidebar').removeClass('--open');
        } else {
            //open language
            $('.l-sidebar').toggleClass('--open');
        }
    }

    //topbar settings
    $('.--caret').on('click', function(event) {
        toggleCaret();
    });

    function toggleCaret(type) {
        if (type == "close") {
            //close aside
            $('.--caret').removeClass('--now');
            $('.c-userbox__settings').removeClass('--open');
        } else {
            //add aside visibility
            $('.--caret').toggleClass('--now');
            $('.c-userbox__settings').toggleClass('--open');
        }
    }

    $('.l-page__main').on('click', function() {
        toggleCaret('close');
        toggleSidebar('close');
    })

    //language
    $('.c-language__toggle--icon').on('click', function(event) {
        toggleLanguage();
    });

    function toggleLanguage(type) {
        if (type == "close") {
            //close language
            $('.c-language').removeClass('--open');
        } else {
            //open language
            $('.c-language').toggleClass('--open');
        }
    }

    //explanation
    $('.c-practice__child--explanation-toggle').on('click', function() {
        $(this).parent().parent().toggleClass('--open');
    });

    //profile expand
    $('.c-profiles__module--info').on('click', function() {
        $(this).toggleClass('--now');
        $(this).parent().parent().parent().toggleClass('--open');
    });

    //swiper slider
    $('.c-hero').each(function() {
        var id = $(this).find('.swiper-container').attr('id');
        var next = $(this).find('.swiper-button-next').attr('id');
        var prev = $(this).find('.swiper-button-prev').attr('id');

        var swiper = new Swiper('#' + id, {
            slidesPerView: 'auto',
            navigation: {
                nextEl: '#' + next,
                prevEl: '#' + prev,
            },
        });

    });
})