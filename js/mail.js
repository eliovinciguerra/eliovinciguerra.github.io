function sendEmail(event) {
    event.preventDefault();

    let subject = encodeURIComponent(document.getElementById("subject").value);
    let body = encodeURIComponent(document.getElementById("body").value);
    let mailtoLink = `mailto:s5rpwvvbd8@privaterelay.appleid.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
}
