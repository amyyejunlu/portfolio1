(function () {
    var STORAGE_KEY = 'portfolio-transition';
    var DURATION = 320;
    var PROJECT_PAGES = ['kajabi.html', 'bloomineers.html', 'cat.html', 'knows.html'];

    try {
        var kind = sessionStorage.getItem(STORAGE_KEY);
        if (kind === 'open' || kind === 'close') {
            document.documentElement.classList.add('page-enter-' + kind);
            sessionStorage.removeItem(STORAGE_KEY);
        }
    } catch (e) {}

    var reducedMotion = false;
    try {
        reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    var useNativeViewTransition = 'startViewTransition' in document && !reducedMotion;

    function isModifiedClick(event) {
        return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    }

    function fileName(href) {
        if (!href) return '';
        return href.split('?')[0].split('#')[0].split('/').pop();
    }

    function navigate(href, kind) {
        if (reducedMotion || useNativeViewTransition) {
            window.location.href = href;
            return;
        }
        try {
            sessionStorage.setItem(STORAGE_KEY, kind);
        } catch (e) {}
        document.documentElement.classList.add(kind === 'close' ? 'page-leaving-close' : 'page-leaving-open');
        window.setTimeout(function () {
            window.location.href = href;
        }, DURATION);
    }

    document.addEventListener('click', function (event) {
        var link = event.target.closest && event.target.closest('a[href]');
        if (!link || isModifiedClick(event) || link.getAttribute('target') === '_blank') {
            return;
        }

        var name = fileName(link.getAttribute('href'));
        var openingProject = PROJECT_PAGES.indexOf(name) !== -1;
        var closingHome = name === 'index.html' && (
            link.getAttribute('aria-label') === 'Close' ||
            /close-btn/.test(link.className)
        );

        if (!openingProject && !closingHome) {
            return;
        }

        if (useNativeViewTransition) {
            return;
        }

        event.preventDefault();
        navigate(link.href, openingProject ? 'open' : 'close');
    });
})();
