let elmsButton = document.querySelectorAll("button");

elmsButton.forEach((elmButton) => {
    elmButton.addEventListener("click", (e) => {
        let hash = e.currentTarget.dataset.barvaPozadi;
        let elmBody = document.querySelectorAll("body")[0];
        elmBody.style.backgroundColor = hash;
    });
});