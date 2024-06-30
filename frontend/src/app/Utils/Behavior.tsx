export function scrollToTop(hook: any) {
    try {
        //hook.scrollTo("top");
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: This makes the scroll smooth
        });
    }
    catch (e) {

    }
}
