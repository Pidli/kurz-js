setTimeout(() => {
    console.log("aaaaaaaaaaaaaaaaaa");
    console.log("bbbbbbbbbbbbbbbbbb");
}, 6500);

console.log("ddddddddddddddddddddddddddddddd");

let intervalC = setInterval(() => {
    console.log("cccccccccccccccccc");
}, 500);

console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

setTimeout(() => {
    clearInterval(intervalC);
}, 1000 * 60 * 8.5);