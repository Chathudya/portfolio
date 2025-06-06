const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (successMessage) {
            successMessage.style.display = "block";
        }
    });
}
