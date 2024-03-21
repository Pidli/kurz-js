let elmKoala = document.querySelector(".koala");
elmKoala.addEventListener("click", (e) => {
    //toto je element, ktery udalost zachytil
    //toto je elemnt, na kterem je pripojeny listener
    console.log(e.currentTarget);
    //toto element, na kterem vznikla udalost
    console.log(e.target);
});