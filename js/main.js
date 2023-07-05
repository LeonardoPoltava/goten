// head
document.querySelector(".header__btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector('.contact').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
})
document.querySelector(".mobile-nav__btn").addEventListener("click", function (e) {
    e.preventDefault();
    navigation.style.display = 'none';
    burgerButton.classList.remove('header__burger--active');
    header.classList.remove('header--active');
    document.querySelector('.contact').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
})
// Get all buttons with data-tab attribute
const buttons = document.querySelectorAll('.bases-tabs__elem[data-tab]');

// Add click event listener to each button
if(buttons.length) {
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the data-tab value of the clicked button
            const tabName = this.getAttribute('data-tab');

            // Get the block with the corresponding data-tab value
            const block = document.querySelector(`section[data-tab="${tabName}"]`);

            // Remove the 'active' class from all buttons and blocks
            buttons.forEach(btn => btn.classList.remove('bases-tabs__elem--active'));
            if(tabName === 'all') {
                document.querySelectorAll('section[data-tab-block]').forEach(blk => blk.style.display = 'grid');
            }
            else {
                document.querySelectorAll('section[data-tab-block]').forEach(blk => blk.style.display = 'none');
                // Add the 'active' class to the clicked button and block
                this.classList.add('bases-tabs__elem--active');
                block.style.display = 'grid';
            }
        });
    });
}
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
// blog
const filterButtons = document.querySelectorAll('.blog-filter__button');
if(filterButtons.length) {
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabName = this.getAttribute('data-category');
            const blocks = document.querySelectorAll(`.blog-list__elem`);

            filterButtons.forEach(btn => btn.classList.remove('active'));
            blocks.forEach(post => {
                if (tabName === 'all' || post.dataset.category === tabName) {
                    post.style.display = 'grid';
                } else {
                    post.style.display = 'none';
                }
            });
            this.classList.add('active');
        });
    });
}
const blogNav = document.querySelector(".blog-nav");
if(blogNav) {
    blogNav.addEventListener("click", (event) => {
        event.preventDefault();
        if(event.target.classList.contains("blog-nav__elem")) {
            let targetId = event.target.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    })
}
