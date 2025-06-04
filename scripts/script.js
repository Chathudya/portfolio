const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const successMessage = document.getElementById("success-message");
        if (successMessage) {
            successMessage.style.display = "block";
        }
    });
}
