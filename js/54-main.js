//zde vytvorime instanci nejakeho audio souboru
let backgroundMusic = new Audio("./audio/battle-march-action-loop-6935.mp3");

//zamerime tlacitko play
let tlacitkoPlay = document.querySelector(".play");
//po kliknuti chceme audio stopu prehrat
tlacitkoPlay.addEventListener("click", () => {
    //toto nam bude prehravat audio porad dokola 
    backgroundMusic.loop = true;
    //toto spusti prehravani audia
    backgroundMusic.play();
});

//druhe tlacitko pro zastaveni hudby
let tlacitkoPause = document.querySelector(".pause");
tlacitkoPause.addEventListener("click", () => {
    backgroundMusic.pause();
});