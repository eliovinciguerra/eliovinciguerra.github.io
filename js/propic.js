window.addEventListener('load', function () {
    var imageLarge = document.getElementById("image-large");
    imageLarge.src = "images/propic/propic.png";

    var imageSmall = document.getElementById("image-small");
    imageSmall.src = "images/propic/propic.png";
});

window.addEventListener('resize', function() {
    if (window.innerWidth >= 992) {
        document.getElementById("image-small").style.display = 'none';
        document.getElementById("image-large").style.display = 'block';
    } else {
        document.getElementById("image-small").style.display = 'block';
        document.getElementById("image-large").style.display = 'none';
    }
});

window.dispatchEvent(new Event('resize'));