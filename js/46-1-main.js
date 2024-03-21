let elmZebra = document.querySelector(".zebra");

elmZebra.addEventListener("click", (e) => {
    //metoda remove odstrani elment
    e.currentTarget.remove();
});

//chcem odstranit h1
let elmNadpis = document.querySelector("h1");
elmNadpis.remove();