let elmsLi = document.querySelectorAll("li");

elmsLi.forEach((aktualniLiElement, indexAktualnihoLiElementu) => {
    //aktualniLiElement.style.fontSize = "35px";
    aktualniLiElement.addEventListener("click", (e) => {
        e.currentTarget.style.fontSize = "35px";
    });

    console.log(indexAktualnihoLiElementu);
    //break; //syntatktica chyba forEach nelze breaknout
});