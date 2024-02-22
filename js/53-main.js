let den = "utery";
let stupne = Math.floor(Math.random() * 30);

let obycejnyString = "Dneska je " + den + " a je " + stupne +" stupnu";
console.log(obycejnyString);

//back-tick ``
let templateString = `Dneska je ${den} a je ${Math.floor(Math.random() * 30)} stupnu`;
console.log(templateString);

