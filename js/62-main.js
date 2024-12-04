function vypisA () {
    return new Promise((argSplneno, argNesplneno) => {
        setTimeout(() => {
            if(Math.random() < 0.2) {
                argNesplneno("Nepovedlo se A");
                return;
            }

            console.log("AAA");
            argSplneno("Hotovo A");
            return;
        }, 1000 * Math.random() * 5)      
    });
}

function vypisB () {
    return new Promise((argSplneno, argNesplneno) => {
        setTimeout(() => {
            if(Math.random() < 0.2) {
                argNesplneno("Nepovedlo se B");
                return;
            }
            console.log("BBB");
            argSplneno("Hotovo B");
            return;
        }, 1000 * Math.random() * 5)      
    });
}

function vypisC () {
    return new Promise((argSplneno, argNesplneno) => {
        setTimeout(() => {
            if(Math.random() < 0.2) {
                argNesplneno("Nepovedlo se C");
                return;
            }
            console.log("CCC");
            argSplneno("Hotovo C");
            return;
        }, 1000 * Math.random() * 5)      
    });
}

/*
vypisA().then((splneno, nesplneno) => {
    console.log(splneno);
    console.log(nesplneno);
    return vypisB();
}).then((splneno, nesplneno) => {
    console.log(splneno);
    console.log(nesplneno);
    return vypisC();
}).then((splneno, nesplneno) => {
    console.log(splneno);
    console.log(nesplneno);
});
*/


vypisA().then((splneno) => {
    console.log(splneno);
    return vypisB();
}).then((splneno) => {
    console.log(splneno);
    return vypisC();
}).then((splneno) => {
    console.log(splneno);
}).catch((nesplneno) => {
    console.log(nesplneno);
});
