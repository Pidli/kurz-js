let elmsPanel = document.querySelectorAll(".panel");

for (let i = 0; i < elmsPanel.length; i++) {
    elmsPanel[i].addEventListener("click", (e) => {
        /*
        if (!e.currentTarget.classList.contains("kocka")) {
            e.currentTarget.classList.add("kocka");
        }else{
            e.currentTarget.classList.remove("kocka");
        }
        */
        

        //funkce toggle zkontorluje zda je dana class pritomna, pokud tma neni tak ji prida pokud tma je tak ji odebere
        e.currentTarget.classList.toggle("kocka");
    });
}