document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("color-mode-toggle");
    const colorModeText = document.getElementById("color-mode-text");
    const body = document.body;

    if (body.classList.contains("dark-mode")) {
        colorModeText.textContent = "Light Mode";
    } else {
        colorModeText.textContent = "Dark Mode";
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            colorModeText.textContent = "Light Mode";
        } else {
            colorModeText.textContent = "Dark Mode";
        }
    });
});

function updateImageSources() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const images = document.querySelectorAll('img[data-dark-src]');

    images.forEach(img => {
        const darkSrc = img.getAttribute('data-dark-src');
        const lightSrc = img.getAttribute('src');
        
        if (isDarkMode) {
            if (!img.hasAttribute('data-original-src')) {
                img.setAttribute('data-original-src', lightSrc);
            }
            img.setAttribute('src', darkSrc);
        } else {
            const originalSrc = img.getAttribute('data-original-src');
            if (originalSrc) {
                img.setAttribute('src', originalSrc);
            }
        }
    });
}

window.addEventListener('load', updateImageSources);

const darkModeObserver = new MutationObserver(updateImageSources);
darkModeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });