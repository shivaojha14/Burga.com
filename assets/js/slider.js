// Selectors for hero slider elements. Keep class names unchanged.
const heroDots = document.querySelectorAll('.embla__dot');
const heroSlides = document.querySelectorAll('.hero-slide');
const heroContainer = document.querySelector('.hero-carousel .embla__container');

// Current index and interval handle
let heroIndex = 0;
let autoSlide = null;

// Set slide by index using transform on the embla container.
// Using percentages works because each `.hero-slide` is `min-width: 100%`.
function setHeroSlide(index) {
    if (!heroContainer || heroSlides.length === 0) return;

    // Ensure index stays within bounds (infinite loop via modulo handled by callers)
    const safeIndex = ((index % heroSlides.length) + heroSlides.length) % heroSlides.length;
    heroIndex = safeIndex;

    // Move the container to show the requested slide
    heroContainer.style.transform = `translateX(-${safeIndex * 100}%)`;

    // Update pagination dots' selected state
    heroDots.forEach((dot, dotIndex) => {
        dot.classList.toggle('embla__dot--selected', dotIndex === safeIndex);
    });
}

// Advance to the next slide (wraps to start automatically)
function nextSlide() {
    if (heroSlides.length === 0) return;
    heroIndex = (heroIndex + 1) % heroSlides.length;
    setHeroSlide(heroIndex);
}

// Start autoplay with a 3 second interval. Clear any existing interval first.
function startAutoSlide() {
    // Clear previous interval if present to avoid multiple timers
    if (autoSlide) clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000); // 3000ms per requirements
}

// Reset the autoplay timer after manual navigation.
// This clears the current interval and starts a fresh one, delaying the next
// auto-advance by a full interval.
function resetAutoSlide() {
    if (autoSlide) clearInterval(autoSlide);
    startAutoSlide();
}

// Make pagination dots clickable and reset the timer after manual selection.
if (heroDots && heroDots.length) {
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Move to the selected slide and restart autoplay timing
            setHeroSlide(index);
            resetAutoSlide();
        });
    });
}

// Initialise to first slide and start autoplay if slides exist
setHeroSlide(heroIndex);
startAutoSlide();