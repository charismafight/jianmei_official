/**
 * Created by Xiec on 2018/4/10.
 */
$(function () {
    initFirstSwp();
});

/**
 * 首页第一个轮播//effect: 'fade',
 */
function initFirstSwp() {
    var swiper = new Swiper('.swiper-container1', {
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
		watchSlidesProgress : true,
		watchSlidesVisibility : true,
    });

    var swiper2 = new Swiper('#swiper_container_case', {
        initialSlide: 1,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
		watchSlidesProgress : true,
		watchSlidesVisibility : true,
		loop:true,
    });

    var swiper3 = new Swiper('#swiper_container_brand', {
        slidesPerView: "auto",
        loop: false,
        spaceBetween: 16,
		watchSlidesProgress : true,
		watchSlidesVisibility : true,
    });

    var swiper4 = new Swiper('#swiper_container_team', {
        slidesPerView: "auto",
        loop: false,
        spaceBetween: 11,
		watchSlidesProgress : true,
		watchSlidesVisibility : true,
    });

    var swiper5 = new Swiper('#swiper_container_adv', {
        pagination: {
            el: '#swiper_pagination_adv',
            bulletClass : 'my_bullet_adv',
            bulletActiveClass: 'my_bullet_active_adv'
        },
		watchSlidesProgress : true,
		watchSlidesVisibility : true,
    });

    //   var swiper6 = new Swiper('#swiper_container_1', {
    //     direction : 'vertical',
    //       autoplay:true,
    //      slidesPerView : 1,
    //      loop:true,
    // });
    var swiper6 = new Swiper('#swiper_container_1', {
        direction : 'vertical',
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
         slidesPerView : 3,
         loop:true,
    });

}