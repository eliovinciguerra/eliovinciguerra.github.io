function sendEmail(event) {
    event.preventDefault();

    let subject = encodeURIComponent(document.getElementById("subject").value);
    let body = encodeURIComponent(document.getElementById("body").value);
    let mailtoLink = `mailto:elio.vinciguerra@phd.unict.it?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
}