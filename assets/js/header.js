const announcementNext = document.querySelector('.announcement-bar__control--next');
const announcementPrev = document.querySelector('.announcement-bar__control--prev');
const announcementSlider = document.querySelector('.announcement-bar__slider');
const announcementSlides = document.querySelectorAll('.announcement-bar__slide');
let announcementIndex = 0;

function updateAnnouncementSlide(index) {
    announcementSlider.style.transform = `translateX(-${index * 100}%)`;
}

announcementNext?.addEventListener('click', () => {
    announcementIndex = (announcementIndex + 1) % announcementSlides.length;
    updateAnnouncementSlide(announcementIndex);
});

announcementPrev?.addEventListener('click', () => {
    announcementIndex = (announcementIndex - 1 + announcementSlides.length) % announcementSlides.length;
    updateAnnouncementSlide(announcementIndex);
});
