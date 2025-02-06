document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var navbarLinks = document.querySelectorAll(".navbar a, #color-mode-toggle");
    var timeoutId;

    navbarToggler.addEventListener("click", function () {
        if (!navbarCollapse.classList.contains("show")) {
            timeoutId = setTimeout(function () {
                if (navbarCollapse.classList.contains("show")) {
                    navbarToggler.click();
                }
            }, 5000);
        } else {
            clearTimeout(timeoutId);
        }
    });

    document.addEventListener("click", function (event) {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click();
            }
        }
    });

    navbarLinks.forEach(function (element) {
        element.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click();
            }
        });
    });
});