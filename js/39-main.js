let elmKolecko = document.querySelectorAll(".kolecko")[0];
let jeKolecko = true;

elmKolecko.addEventListener("click", (e) => {
    if (jeKolecko == true) {
        e.currentTarget.style.backgroundColor = "aquamarine";
        e.currentTarget.style.width = "130px";
        e.currentTarget.style.height = "130px";
        e.currentTarget.style.borderRadius = "0%";

        jeKolecko = false;
    } else {
        e.currentTarget.style.backgroundColor = "coral";
        e.currentTarget.style.width = "100px";
        e.currentTarget.style.height = "100px";
        e.currentTarget.style.borderRadius = "50%";

        jeKolecko = true;
    }
});