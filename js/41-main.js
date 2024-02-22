let elmsPanel = document.querySelectorAll(".panel");
for (let i = 0; i < elmsPanel.length; i++) {
    elmsPanel[i].addEventListener("click", (e) => {

        for (let j = 0; j < elmsPanel.length; j++) {
            elmsPanel[j].classList.remove("active");
        }

        e.currentTarget.classList.add("active");
    });
}