const asyncIconFont = () => {
    let options = {};

    const observe = (o) => {
        options = o;
        (('IntersectionObserver' in window &&! sessionStorage[options.selector]) ? fnIconFontObserver : fnIconIconFontDomLink)();
    }

    const fnIconIconFontDomLink = () => {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = options.src;
        document.head.appendChild(link);
    }

    const fnIconFontObserver = () => {
        let fas = document.querySelectorAll(options.selector);
        let observer = new IntersectionObserver((entry, observer) => {
            if (entry[0].intersectionRatio > 0) {
                fnIconIconFontDomLink();
                sessionStorage[options.selector] = true;
                observer.disconnect();
            }
        });
        fas.forEach(fa => {
            observer.observe(fa);
        });
    }

    return { observe };
}


asyncIconFont().observe({ 'src': '/include/scss/fontawesome/font-awesome.min.css', 'selector': '.fa' })