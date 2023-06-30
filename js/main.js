// Get all buttons with data-tab attribute
const buttons = document.querySelectorAll('.bases-tabs__elem[data-tab]');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Get the data-tab value of the clicked button
        const tabName = this.getAttribute('data-tab');

        // Get the block with the corresponding data-tab value
        const block = document.querySelector(`[data-tab="${tabName}"]`);

        // Remove the 'active' class from all buttons and blocks
        buttons.forEach(btn => btn.classList.remove('bases-tabs__elem--active'));
        document.querySelectorAll('[data-tab-block]').forEach(blk => blk.classList.remove('bases-icons__list--active'));

        // Add the 'active' class to the clicked button and block
        this.classList.add('bases-tabs__elem--active');
        block.classList.add('bases-icons__list--active');
    });
});
// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        clickable: true,
        renderCustom: function (swiper, current, total) {
            return '<span class="current">' + current + '</span>' + total;
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// navigation
const burgerButton = document.querySelector('.header__burger');
const navigation = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');

burgerButton.addEventListener('click', function () {
    if (navigation.style.display === 'flex') {
        navigation.style.display = 'none';
        burgerButton.classList.remove('header__burger--active');
        header.classList.remove('header--active');
    } else {
        navigation.style.display = 'flex';
        header.classList.add('header--active');
        burgerButton.classList.add('header__burger--active');
    }
});
