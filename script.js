const menuToggle = document.querySelector('.js-global-sidebar-nav__toggle');
const searchToggle = document.querySelector('.js-wbsk-sidebar-search__open');
const panelCloses = document.querySelectorAll('.mh-panel__close');
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('.form-feedback');

menuToggle?.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

searchToggle?.addEventListener('click', () => {
    document.body.classList.toggle('search-open');
});

panelCloses.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.classList.remove('menu-open', 'search-open');
    });
});

const newsletterToggle = document.querySelector('.js-gbl-nl__toggle');
const newsletterClosed = document.querySelector('.js-gbl-nl__closed');
const newsletterExpanded = document.querySelector('.js-gbl-nl__expanded');

newsletterToggle?.addEventListener('click', () => {
    if (newsletterClosed && newsletterExpanded) {
        newsletterClosed.style.display = 'none';
        newsletterExpanded.style.display = 'flex';
        newsletterToggle.blur();
    }
});

contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
        formFeedback.textContent = 'Please complete all fields before sending.';
        formFeedback.style.color = '#dc2626';
        return;
    }

    formFeedback.textContent = `Thanks, ${name}! Your message is ready to send.`;
    formFeedback.style.color = '#16a34a';
    contactForm.reset();
});

const slider = document.querySelector(".top-bar-slider");
const slides = document.querySelectorAll(".top-message");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
    slider.style.transform = `translateX(-${i * 100}%)`;
}

next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// // Auto Slide
// setInterval(() => {
//     index = (index + 1) % slides.length;
//     showSlide(index);
// }, 3000);
