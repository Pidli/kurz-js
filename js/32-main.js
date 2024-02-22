//chci do conzole vypsat jednou tik a jednou tak
//tik
//tak
//tik
//tak

/*
let counter = 0;
setInterval(() => {
    if (counter % 2 == 0) {
        console.log("tik");
    }else{
        console.log("tak");
    }

    counter++;
}, 1000);
*/

/*
let booleanFlag = true;
setInterval(() => {
    if (booleanFlag == true) {
        console.log("tik");
        booleanFlag = false;
    }else{
        console.log("tak");
        booleanFlag = true;
    }
}, 1000);
*/

let counter = 0;
setInterval(() => {
    if (counter % 3 == 0) {
        console.log("tik");
    } else if (counter % 3 == 1) {
        console.log("tak");
    }else{
        console.log("tok");
    }

    counter++;
}, 1000);