//1) zakaznik musi nakoupit aleposn za 500, aby se aplikovala sleva jinak se cena nezmeni
//2) maximalni vyse slevy nesmi prekrocit 1000Kč, pokud je sleva vyssi nez 1000, tak se odečte pouze 1000

function spocitejFinalniCenu (argCenaNakupu, argProcentualniSleva) {
    
    if (argCenaNakupu < 500) {
        return argCenaNakupu;
    }
    
    let sleva = (argProcentualniSleva/100) * argCenaNakupu;

    if (sleva > 1000) {
        sleva = 1000;
    }

    let cenaNakupuPoSleve = argCenaNakupu - sleva;

    return cenaNakupuPoSleve;
}





console.log(spocitejFinalniCenu(5432, 25));
console.log(spocitejFinalniCenu(12570, 13));
console.log(spocitejFinalniCenu(6545, 9));
console.log(spocitejFinalniCenu(435, 30));