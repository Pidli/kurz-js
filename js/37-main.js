//RGB, red-green-blue
//rgb() 0-255

let cervena = Math.floor(Math.random() * 256);
let zelena = Math.floor(Math.random() * 256);
let modra = Math.floor(Math.random() * 256);

let body = document.querySelectorAll("body")[0];
console.log("rgb(" + cervena + "," + zelena + "," + modra + ")");
body.style.backgroundColor = "rgb(" + cervena + "," + zelena + "," + modra + ")";


//hash #5FD5A1
// 0-9, A-F

let mnozinaZnaku = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let hash = "#";
for (let i = 0; i < 6; i++) {
    let nahodnyIndex = Math.floor(Math.random() * mnozinaZnaku.length);
    hash += mnozinaZnaku[nahodnyIndex];
}
console.log(hash);
let h1 = document.querySelectorAll("h1")[0];
h1.style.color = hash;