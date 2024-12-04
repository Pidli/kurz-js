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


//async/await

async function vypisABC() {
    try {
        const uspechA = await vypisA();
        console.log(uspechA);
        const uspechB = await vypisB();
        console.log(uspechB);
        const uspechC = await vypisC(); 
        console.log(uspechC);
    }catch(chyba) {
        console.log(chyba);
    }
}

vypisABC();