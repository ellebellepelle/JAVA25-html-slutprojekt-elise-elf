


// en js-fil för att mina bilder ska kunna förstoras.

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".thumb").forEach(img => {
        img.addEventListener("click", function () {
            this.classList.toggle("stor");
        });
    });
});
