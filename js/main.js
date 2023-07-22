// head
if(document.querySelector(".header__btn")) {
    document.querySelector(".header__btn").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector('.contact').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    })
}
if(document.querySelector(".mobile-nav__btn")) {
    document.querySelector(".mobile-nav__btn").addEventListener("click", function (e) {
        e.preventDefault();
        navigation.style.display = 'none';
        burgerButton.classList.remove('header__burger--active');
        header.classList.remove('header--active');
        document.querySelector('.contact').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    })
}
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
                this.classList.add('bases-tabs__elem--active');
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
// contact form sending

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const quoteForm = document.querySelectorAll('.quote-form');
    const formContent = document.querySelector('.contact-form__content');
    const loader = document.getElementById('loader');
    const successMessage = document.getElementById('success-message');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Предотвращаем отправку формы по умолчанию

            // Отображаем индикатор загрузки (loader)
            loader.style.display = 'block';
            formContent.style.display = 'none';

            // Создаем объект FormData и добавляем данные формы
            const formData = new FormData(form);

            // Создаем новый объект XMLHttpRequest
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/mail.php'); // Путь к серверному скрипту

            // Обработчик события загрузки
            xhr.onload = function() {
                // Проверяем статус ответа сервера
                if (xhr.status === 200) {
                    // Скрываем индикатор загрузки (loader)
                    loader.style.display = 'none';

                    // Отображаем сообщение об успешной отправке
                    successMessage.style.display = 'flex';

                    // Очищаем форму после успешной отправки
                    form.reset();
                } else {
                    // Обработка ошибки отправки
                    // Можно отобразить соответствующее сообщение или выполнить другие действия при ошибке
                }
            };

            // Отправляем запрос
            xhr.send(formData);
        });
    }
    if(quoteForm.length) {
        quoteForm.forEach(function(elem) {
            elem.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(elem);
                const xhr = new XMLHttpRequest();
                xhr.open('POST', '/quote.php');
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        // Create the notification block
                        const notificationBlock = createNotification();

                        removeNotification(notificationBlock);

                        elem.reset();
                    }
                };
                xhr.send(formData);
            });
        })
    }
});

// Function to create the notification block
function createNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';

    const img = document.createElement('img');
    img.src = 'images/checkmark.svg';
    img.width = 65;
    img.height = 65;
    img.alt = '';

    const span = document.createElement('span');
    span.className = 'notification__text';
    span.textContent = 'Request was sent successfully';

    notification.appendChild(img);
    notification.appendChild(span);

    document.body.appendChild(notification);

    return notification;
}

// Function to remove the notification block after 3 seconds
function removeNotification(notification) {
    setTimeout(function() {
        if (notification && notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3200);
}


// cookie

let cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: true,                   // default: true
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'We use cookies!',
                description: 'This website collects cookies to deliver better user experience. We collect cookies to analyze our website traffic and performance. We do not track you across other sites. You can see our <a href="/privacy-notice.html">Privacy Notice</a>' +
                    '',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Customize Selection',
                    role: 'settings'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow the website to remember the choices you have made in the past',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to our policy on cookies and your choices, please contact us.',
                    }
                ]
            }
        }
    }
});
