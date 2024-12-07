// navbar code 
$(document).ready(function () {
    $('.menu_btn').click(function () {
        console.log('Hi')
        $('.slide_nav').addClass('active');
        // $('.menu_btn').css('visibility', 'hidden');
    });
    $('.close_btn').click(function () {
        $('.slide_nav').removeClass('active');
        $('.menu_btn').css('visibility', 'visible');

    });
});
// end 
// typed js code 
let typed = new Typed('.multitext', {
    strings: ['CODER', 'DESIGNER', 'DEVELOPER'],
    typeSpeed: 150,
    backSpeed: 160,
    loop: true // Changed 'auto' to 'true'
});

let typede = new Typed('.mult', {
    strings: ['WEB DESIGNER', 'WEB DESIGNER', 'WEB DESIGNER'],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true // Changed 'auto' to 'true'
});

// 3rd sec tab 
  
$('.tabs .tab:first-child').addClass('active');
$('.tab-content:first-child').addClass('active');

// Click event for tabs
$('.tabs .tab').click(function () {
    let tabId = $(this).data('tab');

    // Remove active class from all tabs and contents
    $('.tabs .tab').removeClass('active');
    $('.tab-content').removeClass('active');

    // Add active class to the clicked tab and its content
    $(this).addClass('active');
    $('#' + tabId).addClass('active');
});
//  page loader 
// loader code 
document.addEventListener("DOMContentLoaded", () => {
    const spinnerWrapper = document.querySelector('.swiper-wrapper');

    if (spinnerWrapper) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                spinnerWrapper.classList.add('hidden');
            }, 500); // Adjust delay as needed
        });
    }
});
