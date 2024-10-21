let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header nav a [href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

ScrollReveal().reveal('#home', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('#about', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('#certifications', {
    origin: 'right',
    duration: 2000,
    distance: '20%'
});

var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 10000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        1188: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});

function toggleTableMicrosoft() {
    const Microsoft = document.querySelector('.service-box-microsoft');
    const table = document.querySelector('.service-box-microsoft table');
    if (table.style.display === "none" || table.style.display === "") {
        Microsoft.style.height = "730px";
        setTimeout(() => {
            table.style.display = "table";
        }, 500); // 2000 milliseconds = 2 seconds
    } else {
        Microsoft.style.height = "70px";
        table.style.display = "none";
    }
}

function toggleTableAmazon() {
    const Amazon = document.querySelector('.service-box-amazon');
    const table = document.querySelector('.service-box-amazon table');
    if (table.style.display === "none" || table.style.display === "") {
        Amazon.style.height = "270px";
        setTimeout(() => {
            table.style.display = "table";
        }, 500); // 2000 milliseconds = 2 seconds
    } else {
        Amazon.style.height = "70px";
        table.style.display = "none";
    }
}

function toggleTableCisco() {
    const Cisco = document.querySelector('.service-box-cisco');
    const table = document.querySelector('.service-box-cisco table');
    if (table.style.display === "none" || table.style.display === "") {
        Cisco.style.height = "270px";
        setTimeout(() => {
            table.style.display = "table";
        }, 500); // 2000 milliseconds = 2 seconds
    } else {
        Cisco.style.height = "70px";
        table.style.display = "none";
    }
}

function toggleTableGoogle() {
    const Google = document.querySelector('.service-box-google');
    const table = document.querySelector('.service-box-google table');
    if (table.style.display === "none" || table.style.display === "") {
        Google.style.height = "240px";
        setTimeout(() => {
            table.style.display = "table";
        }, 500); // 2000 milliseconds = 2 seconds
    } else {
        Google.style.height = "70px";
        table.style.display = "none";
    }
}






