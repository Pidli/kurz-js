let elmZralok = document.querySelectorAll(".zralok")[0];

console.log(elmZralok.innerText);

elmZralok.innerText = "Toto je <strong>novy</strong> string.";

let elmManta = document.querySelectorAll(".manta")[0];

elmManta.innerHTML = "Toto je <strong>novy</strong> string.";

let counter = 0;
setInterval(() => {
    elmZralok.innerText = counter + "s";
    counter++;
}, 1000);

let elmButton = document.querySelectorAll("button")[0];
let elmZelva = document.querySelectorAll(".zelva")[0];
elmButton.addEventListener("click", () => {
    elmZelva.innerHTML += "<div class='kolecko'></div>";
    //elmZelva.innerHTML = elmZelva.innerHTML + "<div class='kolecko'></div>";
});

