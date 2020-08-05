const asyncIconFont = ()=>{

    const fnIconIconFontDomLink = () => {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/include/scss/fontawesome/font-awesome.min.css';
        document.head.appendChild(link);
    }


    const fnIconFontObserver = () => {
        let fas = document.querySelectorAll('.fa');
        let observer = new IntersectionObserver((entry, observer) => {
            if (entry[0].intersectionRatio > 0) {
                fnIconIconFontDomLink();
                observer.disconnect();
            }
        });
        fas.forEach(fa => {
            observer.observe(fa);
        });
    }

    (('IntersectionObserver' in window) ? fnFaObserver : fnIconIconFontDomLink)();

}

