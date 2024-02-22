//selectovani
let h1 = document.querySelectorAll("h1")[0];

//pripojit posluchac, speficikovat udalost a arrow funkci
h1.addEventListener("click", () => {
    h1.style.backgroundColor = "pink";
})


let paragrafy = document.querySelectorAll("p");

for (let i = 0; i < paragrafy.length; i++) {
    paragrafy[i].addEventListener("mouseover", (e) => {
        //paragrafy[i].style.backgroundColor = "green"; //toto nelze pouzit
        //currentTarget je element na kterem je posluchac a spustila se udalost
        e.currentTarget.style.color = "green"
    });
}