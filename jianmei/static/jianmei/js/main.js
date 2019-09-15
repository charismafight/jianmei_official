$(function () {
    //装修计算效果
    var $controlBar = $('#control-bar');
    var $fixedBarWrap = $('#fixed-bar-wrap');
    $controlBar.click(function () {
        var bottomVal = $fixedBarWrap.css('bottom');
        if (bottomVal === '-372px') {
            $fixedBarWrap.stop(true, true).animate({'bottom': 0}).addClass('open');
        } else {
            $fixedBarWrap.stop(true, true).animate({'bottom': '-372px'}).removeClass('open');
        }
    })

    //下拉效果
    var $hasArrow = $('.head-nav .has-arrow');
    var $dropNav = $('.drop-wrap .drop-nav');

    $hasArrow.hover(function () {
        $(this).addClass('hover').siblings('.has-arrow').removeClass('hover');
        $dropNav.eq($(this).index() - 1).show().siblings('.drop-nav').hide();
    }, function () {
        $(this).removeClass('hover');
        $dropNav.eq($(this).index() - 1).hide();
    })
    $dropNav.hover(function () {
        $(this).show();
        $hasArrow.eq($(this).index()).addClass('hover');
    }, function () {
        $(this).hide();
        $hasArrow.eq($(this).index()).removeClass('hover');
    })


    $('.al-tab li').hover(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.al-tab-body').eq($(this).index()).show().siblings().hide();
    })
    $('.normal-tab li').hover(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).parent('.normal-tab').next('.normal-wrap').children('.normal-body').eq($(this).index()).show().siblings().hide();
    })

    // 右侧浮动
    // $(window).scroll(function () {
    //     var scrollTop = $(window).scrollTop();
    //     var $windowHeight = $(window).innerHeight();
    //     scrollTop > $windowHeight ? $(".fixed-menu-wrap").fadeIn(200) : $(".fixed-menu-wrap").fadeOut(200);
    // });
    $('#scrollUp').click(function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 1000);
    });


    $('.fixed-tip').hover(function () {
        $(this).children('.fixed-tip-hd').hide().next('.fixed-tip-bd').stop(true, true).fadeIn(100);
    }, function () {
        $(this).children('.fixed-tip-hd').stop(true, true).fadeIn(100).next('.fixed-tip-bd').hide();
    })
    $('.fixed-tip-bd').mouseleave(function () {
        $(this).hide();
        $(this).prev('.fixed-tip-hd').show();
    })
    $('.fixed-tip .close-btn').click(function (e) {
        e.preventDefault();
        $(this).closest('.fixed-tip').hide();
    })
});