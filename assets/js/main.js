/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close");


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    });
};

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    });
};

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
};
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});
/*==================== experiences TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        console.log(target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("experiences__active");
        });

        target.classList.add("experiences__active");

        tabs.forEach(tab => {
            tab.classList.remove("experiences__active");
        });
        tab.classList.remove("experiences__active");

    });
});
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = (modalClick) => {
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener('click', () => {
       modal(index);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
  cssMode: true,
  loop:true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop:true,
    grabCursor: true,
    spaceBetween:48,

    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView :2,
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        };
    });
};
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Kiểm tra chế độ theme hiện tại
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Kiểm tra nếu người dùng đã chọn chế độ theme trước đó
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Nếu người dùng đã chọn chế độ theme trước đó
if (selectedTheme) {
  // Thêm class dark-theme nếu chế độ dark đã được chọn trước đó
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  // Thêm class uil-moon (biểu tượng mặt trăng) nếu chế độ dark đã được chọn trước đó
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
} else {
  // Nếu đây là lần đầu mở trang, thực hiện các bước sau:
  // Thêm class dark-theme vào thẻ body
  document.body.classList.add(darkTheme);
  // Thêm class uil-moon (biểu tượng mặt trăng) vào nút chuyển đổi theme
  themeButton.classList.add(iconTheme);
  // Lưu chế độ theme và biểu tượng hiện tại vào localStorage
  localStorage.setItem('selected-theme', 'dark');
  localStorage.setItem('selected-icon', 'uil-moon');
}

// Xử lý sự kiện khi người dùng nhấp vào nút chuyển đổi theme
themeButton.addEventListener('click', () => {
  // Thêm hoặc loại bỏ class dark-theme trên body
  document.body.classList.toggle(darkTheme);
  // Thêm hoặc loại bỏ class uil-moon (biểu tượng mặt trăng) trên nút chuyển đổi theme
  themeButton.classList.toggle(iconTheme);
  // Lưu chế độ theme và biểu tượng hiện tại vào localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của việc gửi biểu mẫu

    // Lấy giá trị từ các trường nhập liệu
    const name = document.querySelector('#nameInput').value;
    const email = document.querySelector('#emailInput').value;
    const phone = document.querySelector('#phoneInput').value;
    const message = document.querySelector('#messageInput').value;

    // Gửi dữ liệu đến server hoặc thực hiện các xử lý khác ở đây
    // Ví dụ: sử dụng fetch API để gửi dữ liệu đến một URL xử lý biểu mẫu
    fetch('url_xu_ly_bieu_mau', {
        method: 'POST',
        body: JSON.stringify({ name, email, phone, message }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        // Xử lý phản hồi từ server sau khi gửi biểu mẫu
    })
    .catch(error => {
        // Xử lý lỗi nếu có
    });

    // Xóa nội dung đã nhập sau khi gửi
    document.querySelector('#nameInput').value = '';
    document.querySelector('#emailInput').value = '';
    document.querySelector('#phoneInput').value = '';
    document.querySelector('#messageInput').value = '';
});
