function stopPropagation(event) {
    event.stopPropagation();
}

window.onload = function() {
    document.getElementById("imageModal").style.display = "none";
    document.getElementById("imageModal").style.visibility = "hidden";
};

function openModal(imageSrc, description) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("imageModal").style.visibility = "visible";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal(event) {
    const modal = document.getElementById("imageModal");
    const modalContent = document.querySelector(".modal-content-wrapper");

    if (event.target === modal || event.target.classList.contains("close") || event.target === document.getElementById("modalText")) {
        modal.style.display = "none";
        modal.style.visibility = "hidden";
    }
}