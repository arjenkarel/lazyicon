const fnFalink = () => {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/include/scss/fontawesome/font-awesome.min.css';
    document.head.appendChild(link);
}


const fnFaObserver = () => {
    let fas = document.querySelectorAll('.fa');
    let observer = new IntersectionObserver((entry, observer) => {
        if (entry[0].intersectionRatio > 0) {
            fnFalink();
            observer.disconnect();
        }
    });
    fas.forEach(fa => {
        observer.observe(fa);
    });
}

(('IntersectionObserver' in window) ? fnFaObserver : fnFalink)();