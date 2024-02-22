console.log(Math.random());
console.log(Math.random() * 15);
console.log(Math.floor(Math.random() * 15));

console.log("--------------------------------------");

//simulace kostky
console.log(Math.ceil(Math.random() * 6));
console.log(Math.floor(Math.random() * 6) + 1);

//vyber nahodne polozky z pole
let mobily = ["iphone", "samsung", "nokia", "huawei", "lg", "nova"];

let nahodnyIndex = Math.floor(Math.random() * mobily.length);

console.log(mobily[nahodnyIndex]);