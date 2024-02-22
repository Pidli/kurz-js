//vytvorime instanci observera
let instanceObservera = new IntersectionObserver((argPoleVsechHlidanychSekci) => {
    for (let hlidaSekce of argPoleVsechHlidanychSekci) {
        //vlastnost isIntersection rika jeslti element na strance je nebo neni
        //tato vlastnost bravi boolean (true/false)
        if (hlidaSekce.isIntersecting) {
            //.target nam vrati element, na kterem pak muzem pouzivat style, classList, aj
            hlidaSekce.target.classList.add("active");
        }else {
            hlidaSekce.target.classList.remove("active");
        }
    }
}, {
    threshold: 0.3
});



//zamerime vsechny tagy "section"
let poleVsechSekci = document.querySelectorAll("section");
for (let sekce of poleVsechSekci) {
    //zde rimake ze insatnce ma hlidat stav teto sekce
    instanceObservera.observe(sekce);
}