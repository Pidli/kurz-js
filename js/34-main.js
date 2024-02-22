console.log(document);
document.title = "Muj novy Titulek";

//zobrazit do title cas v sekundach jak dlouho uz uzivatel na nasi strance je
let counter = 1;
setInterval(() => {
    document.title = counter + "s"; 
    counter++;
}, 1000);