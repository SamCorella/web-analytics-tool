function trackPageView() {
    // Capture page url
    const url = window.location.pathname;

    // Use local storage to track page views
    if (!localStorage.getItem("pagesViewed")) {
        localStorage.setItem("pagesViewed", JSON.stringify([]));
    }
    const pages = JSON.parse(localStorage.getItem("pagesViewed"));

    // Pages are tracked even if they have been viewed before
    pages.push(url);
    localStorage.setItem("pagesViewed", JSON.stringify(pages));
    console.log(`Tracking page view: ${url}`);
}

trackPageView();