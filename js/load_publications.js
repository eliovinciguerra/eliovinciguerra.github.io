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
                // Rimuove eventuali bottoni esistenti per evitare duplicazioni
                const existingButton = paragraph.nextElementSibling;
                if (existingButton && existingButton.classList.contains("expand-btn")) {
                    existingButton.remove();
                }

                if (isSmallScreen) {
                    paragraph.classList.add("compress-text");
                    paragraph.style.whiteSpace = "nowrap";
                    paragraph.style.overflow = "hidden";
                    paragraph.style.textOverflow = "ellipsis";

                    // Crea il bottone per espandere/comprimere
                    const expandButton = document.createElement("button");
                    expandButton.className = "expand-btn";
                    expandButton.style.display = "block";  // Impostiamo il bottone come blocco
                    expandButton.style.marginTop = "10px"; // Aggiunge uno spazio tra il paragrafo e il bottone
                    expandButton.style.width = "100%"; // Impostiamo la larghezza del bottone uguale a quella del paragrafo
                    expandButton.style.textAlign = "center";  // Centra il contenuto all'interno del bottone

                    // Crea l'immagine della freccia (aggiorna il percorso con il tuo relativo)
                    const arrowImage = document.createElement("img");
                    arrowImage.src = "./images/logos/arrow-down-image.png";  // Usa il percorso relativo per l'immagine freccia giù
                    arrowImage.alt = "Freccia giù";
                    arrowImage.style.width = "20px"; // Puoi regolare la dimensione dell'immagine
                    arrowImage.style.display = "inline"; // Lascia l'immagine come inline per il centro

                    expandButton.appendChild(arrowImage);

                    expandButton.onclick = function () {
                        paragraph.classList.toggle("expanded");

                        if (paragraph.classList.contains("expanded")) {
                            paragraph.style.whiteSpace = "normal";
                            paragraph.style.overflow = "visible";
                            paragraph.style.textOverflow = "clip";
                            arrowImage.src = "./images/logos/arrow-up-image.png";  // Cambia l'immagine in freccia su
                        } else {
                            paragraph.style.whiteSpace = "nowrap";
                            paragraph.style.overflow = "hidden";
                            paragraph.style.textOverflow = "ellipsis";
                            arrowImage.src = "./images/logos/arrow-down-image.png";  // Torna alla freccia giù
                        }
                    };

                    // Inserisce il bottone sotto il paragrafo
                    paragraph.after(expandButton);
                } else {
                    // Rimuove qualsiasi stile di compressione su schermi grandi
                    paragraph.classList.remove("compress-text", "expanded");
                    paragraph.style.whiteSpace = "normal";
                    paragraph.style.overflow = "visible";
                    paragraph.style.textOverflow = "clip";
                }
            });
        }

        // Applica la funzione al caricamento della pagina
        applyCompression();

        // Riadatta il contenuto quando la finestra viene ridimensionata
        window.addEventListener("resize", applyCompression);