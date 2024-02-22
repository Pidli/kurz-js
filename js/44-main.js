let elmsButton = document.querySelectorAll("button");

elmsButton.forEach((elmButton) => {
    elmButton.addEventListener("click", (e) => {
        let barva = e.currentTarget.dataset.filtr;

        let vsechnyPanely = document.querySelectorAll(".panel");
        vsechnyPanely.forEach((panel) => {
            panel.classList.remove("active");
        });

        let panely = document.querySelectorAll("."+barva);
        panely.forEach((panel) => {
            panel.classList.add("active");
        });
    });
});