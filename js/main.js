// sliders
const swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    slidesPerGroup: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    }
});
const swiperMobile = new Swiper(".mobile-slider", {
    spaceBetween: 20,
    slidesPerView: 2,
    slidesPerGroup: 3,
});

//Developments
$('.right__side-circle').click(function () {
    $('.consultation').addClass('consultation--active');
    $('.right__side-circle').css('z-index', '2');
    $('#phone').css('z-index', '-1');
    $('.consultation-person').css('z-index', '2');
});
$(document).mouseup(function (e) {
    $('.consultation').removeClass('consultation--active');
});
// $('.button').click( function() {
//     $('.right__side-circle').css('z-index', '0');
//     $('.left__side-logo a').css('z-index', '0');
//     $('.button').css('z-index', '0');
// });
// $('.popup-close').click( function() {
//     $('.right__side-circle').css('z-index', '2');
//     $('.left__side-logo a').css('z-index', '2');
//     $('.button').css('z-index', '2');
// });
// $(document).mouseup( function (e) { 
// 	var popup = $('.left__side-feedback');
// 	if (e.target != popup[0] && popup.has(e.target).length === 0){
//         $('.right__side-circle').css('z-index', '2');
//         $('.left__side-logo a').css('z-index', '2');
//         $('.button').css('z-index', '2');
// 	}
// });