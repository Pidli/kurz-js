let poleBarev = ["modra", "cervena", "zluta", "zelena"];

console.log(poleBarev);

//push
poleBarev.push("ruzova");
console.log(poleBarev);


//pop
let odstranenaPosledniPolozka = poleBarev.pop();
console.log(poleBarev);

//unshitf
poleBarev.unshift("hneda");
console.log(poleBarev);

//shift
let odstarnenaPRvniPolozka = poleBarev.shift();
console.log(poleBarev);

//splice
poleBarev.splice(2, 1);
console.log(poleBarev);
