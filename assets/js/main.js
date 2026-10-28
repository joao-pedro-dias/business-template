(function () {

    // Show loading feedback only when core page resources take longer than a brief moment.
    var preloader = document.createElement("div");
    preloader.className = "site-preloader";
    preloader.setAttribute("aria-hidden", "true");
    preloader.innerHTML = '<div class="site-preloader__content" role="status" aria-live="polite"><span class="site-preloader__spinner" aria-hidden="true"></span><span>A carregar…</span></div>';
    document.body.appendChild(preloader);

    var pageLoaded = false;
    var revealPreloaderTimer = window.setTimeout(function () {
        if (!pageLoaded) {
            preloader.classList.add("is-visible");
            preloader.setAttribute("aria-hidden", "false");
        }
    }, 400);

    var preloaderSafetyTimer = window.setTimeout(finishPageLoad, 6000);

    function finishPageLoad() {
        if (pageLoaded) return;
        pageLoaded = true;
        window.clearTimeout(revealPreloaderTimer);
        window.clearTimeout(preloaderSafetyTimer);
        preloader.classList.remove("is-visible");
        preloader.setAttribute("aria-hidden", "true");
        window.setTimeout(function () {
            if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
        }, 220);
    }

    if (document.readyState === "complete") {
        finishPageLoad();
    } else {
        window.addEventListener("load", finishPageLoad, { once: true });
    }

    // Keep the mobile menu icon and accessible label in sync on the home and service pages.
    var mobileNavbar = document.getElementById("navbarNine");
    var mobileNavbarToggler = document.querySelector(".navbar-area.navbar-nine .navbar-toggler");
    if (mobileNavbar && mobileNavbarToggler) {
        mobileNavbar.addEventListener("shown.bs.collapse", function () {
            mobileNavbarToggler.classList.add("active");
            mobileNavbarToggler.setAttribute("aria-expanded", "true");
            mobileNavbarToggler.setAttribute("aria-label", "Fechar menu");
        });
        mobileNavbar.addEventListener("hidden.bs.collapse", function () {
            mobileNavbarToggler.classList.remove("active");
            mobileNavbarToggler.setAttribute("aria-expanded", "false");
            mobileNavbarToggler.setAttribute("aria-label", "Abrir menu");
        });
        document.addEventListener("click", function (event) {
            var clickedToggler = event.target.closest(".navbar-area.navbar-nine .navbar-toggler");
            if (!clickedToggler) return;
            window.setTimeout(function () {
                var isExpanded = mobileNavbar.classList.contains("show");
                clickedToggler.classList.toggle("active", isExpanded);
                clickedToggler.setAttribute("aria-expanded", isExpanded ? "true" : "false");
                clickedToggler.setAttribute("aria-label", isExpanded ? "Fechar menu" : "Abrir menu");
            }, 0);
        });
    }

    /*=====================================
    Sticky
    ======================================= */
    function updateScrollState() {
        var headerNavbar = document.querySelector(".navbar-area");
        var backToTop = document.querySelector(".scroll-top");
        var scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        if (headerNavbar && scrolled > headerNavbar.offsetTop) {
            headerNavbar.classList.add("sticky");
        } else if (headerNavbar) {
            headerNavbar.classList.remove("sticky");
        }

        if (backToTop) backToTop.style.display = scrolled > 50 ? "flex" : "none";
        if (document.body.classList.contains("home-page")) {
            document.body.classList.toggle("has-scrolled", scrolled > 120);
        }
    }

    window.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();

    // Use native scrolling so the browser can interrupt movement and honour reduced motion.
    function slowScroll(target) {
        var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        var behavior = reduceMotion ? "auto" : "smooth";
        if (target === document.body || target === document.documentElement) {
            window.scrollTo({ top: 0, behavior: behavior });
        } else if (target) {
            target.scrollIntoView({ behavior: behavior, block: "start" });
        }
    }

    // section menu active
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            if (!val || val.charAt(0) !== '#') continue;
            var refElement = document.querySelector(val);
            if (!refElement) continue;
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelectorAll('.page-scroll.active').forEach(function (activeLink) { activeLink.classList.remove('active'); });
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    }

    window.document.addEventListener('scroll', onScroll);
    
    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();

            const targetId = elem.getAttribute('href'); // Obtém o ID do alvo
            const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

            if (targetElement) {
                slowScroll(targetElement); // Chama a função slowScroll
            }
        });
    });

    // Adiciona evento de clique ao botão "scroll-top"
    var backToTopButton = document.querySelector('.scroll-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            slowScroll(document.body);
        });
    }

    "use strict";

    document.addEventListener("DOMContentLoaded", function() {
        const currentYear = new Date().getFullYear(); // Obtém o ano atual
        var currentYearElement = document.getElementById("current-year");
        if (currentYearElement) currentYearElement.textContent = `© ${currentYear}`;
    });
    
})();
