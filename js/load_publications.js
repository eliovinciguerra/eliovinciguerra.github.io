const container = document.querySelector("#publications_list");

publications.forEach(pub => {
    const wrapper = document.createElement("div");
    wrapper.className = "timeline-wrapper";

    const yearDiv = document.createElement("div");
    yearDiv.className = "timeline-yr";
    yearDiv.innerHTML = `<span>${pub.year}</span>`;

    const infoDiv = document.createElement("div");
    infoDiv.className = "timeline-info";
    infoDiv.innerHTML = `
        <h3><span>${pub.title}</span> <small class="small-text">${pub.status}</small></h3>
        <p class="compress">${pub.reference}</p>
    `;

    wrapper.appendChild(yearDiv);
    wrapper.appendChild(infoDiv);
    container.appendChild(wrapper);
});

function applyCompression() {
    const isSmallScreen = window.innerWidth < 580;

    document.querySelectorAll(".compress").forEach(paragraph => {
        const existingButton = paragraph.nextElementSibling;
        if (existingButton && existingButton.classList.contains("expand-btn")) {
            existingButton.remove();
        }

        if (isSmallScreen) {
            paragraph.classList.add("compress-text");
            paragraph.style.whiteSpace = "nowrap";
            paragraph.style.overflow = "hidden";
            paragraph.style.textOverflow = "ellipsis";

            const expandButton = document.createElement("button");
            expandButton.className = "expand-btn";
            expandButton.style.display = "block";
            expandButton.style.marginTop = "10px";
            expandButton.style.width = "100%";
            expandButton.style.textAlign = "center";

            const arrowImage = document.createElement("img");
            arrowImage.src = "./images/arrows/arrow_down.png";
            arrowImage.setAttribute("data-dark-src", "./images/arrows/arrow_down_dark.png");
            arrowImage.alt = "Read more";
            arrowImage.style.width = "20px";
            arrowImage.style.display = "inline";

            expandButton.appendChild(arrowImage);

            expandButton.onclick = function () {
                paragraph.classList.toggle("expanded");

                if (paragraph.classList.contains("expanded")) {
                    paragraph.style.whiteSpace = "normal";
                    paragraph.style.overflow = "visible";
                    paragraph.style.textOverflow = "clip";
                    arrowImage.src = "./images/arrows/arrow_up.png";
                    arrowImage.setAttribute("data-dark-src", "./images/arrows/arrow_up_dark.png");
                } else {
                    paragraph.style.whiteSpace = "nowrap";
                    paragraph.style.overflow = "hidden";
                    paragraph.style.textOverflow = "ellipsis";
                    arrowImage.src = "./images/arrows/arrow_down.png";
                    arrowImage.setAttribute("data-dark-src", "./images/arrows/arrow_down_dark.png");
                }

                updateImageSources();
            };

            paragraph.after(expandButton);
        } else {
            paragraph.classList.remove("compress-text", "expanded");
            paragraph.style.whiteSpace = "normal";
            paragraph.style.overflow = "visible";
            paragraph.style.textOverflow = "clip";
        }
    });
}

applyCompression();

window.addEventListener("resize", applyCompression);