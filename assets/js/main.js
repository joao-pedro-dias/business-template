(function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }

        // show or hide the back-to-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // Function to slow down the scroll
    function slowScroll(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 60; // Ajuste de 60 pixels
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, 1000);
            window.scrollTo(0, run);

            if (timeElapsed < 1000) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // section menu active
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
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
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        slowScroll(document.body); // Scroll suave para o topo
    });

    "use strict";

    document.addEventListener("DOMContentLoaded", function() {
        const currentYear = new Date().getFullYear(); // Obtém o ano atual
        document.getElementById("current-year").textContent = `© ${currentYear}`; // Atualiza o texto
    });
    
})();
