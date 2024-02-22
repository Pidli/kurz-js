console.log(localStorage.getItem("barva-pozadi"));
console.log(localStorage.getItem("barva-nadpisu"));

let body = document.querySelectorAll("body")[0];
body.style.backgroundColor = localStorage.getItem("barva-pozadi");
let nadpis = document.querySelectorAll("h1")[0];
nadpis.style.color = localStorage.getItem("barva-nadpisu");

let tlacitkoSubmit = document.querySelectorAll("[name=barva-submit]")[0];
console.log(tlacitkoSubmit);

tlacitkoSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let inputBarvaPozadi = document.querySelectorAll("#kocka")[0];
    let inputBarvaNadpisu = document.querySelectorAll("#slon")[0];

    console.log(inputBarvaPozadi.value);
    console.log(inputBarvaNadpisu.value);

    let body = document.querySelectorAll("body")[0];
    body.style.backgroundColor = inputBarvaPozadi.value;
    localStorage.setItem("barva-pozadi", inputBarvaPozadi.value);

    let nadpis = document.querySelectorAll("h1")[0];
    nadpis.style.color = inputBarvaNadpisu.value;
    localStorage.setItem("barva-nadpisu", inputBarvaNadpisu.value);

    let form = document.querySelectorAll("#form-zmeny-barvy")[0];
});

