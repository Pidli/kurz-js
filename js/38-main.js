function zmenBarvu () {
    //RGB, red-green-blue
    //rgb() 0-255

    let cervena = Math.floor(Math.random() * 256);
    let zelena = Math.floor(Math.random() * 256);
    let modra = Math.floor(Math.random() * 256);

    let body = document.querySelectorAll("body")[0];
    console.log("rgb(" + cervena + "," + zelena + "," + modra + ")");
    body.style.backgroundColor = "rgb(" + cervena + "," + zelena + "," + modra + ")";    
}


let tlacitko = document.querySelectorAll("#button-color")[0];
console.log(tlacitko);

tlacitko.addEventListener("click", () => {
    zmenBarvu();
});