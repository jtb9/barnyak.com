export function scrollToTop() {
    try {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: This makes the scroll smooth
        });
    }
    catch (e) {

    }
}
