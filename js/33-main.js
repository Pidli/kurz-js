let tonda = {
    krestniJmeno: "Tonda",
    prijmeni: "Truong",
    "rok narozeni": 1992,
    maSourozence: true,
    hobby: ["baskytara", "plavani", "programovani", "foceni"],
    pracovniNotebook: {
        ram: 16,
        zaruka: false,
        display: "oled",
        vybava: ["ctecka otisku", "webkamera", "usb C"]
    }
};

console.log(tonda);

//pristup k hodnote
console.log(tonda["krestniJmeno"]);
console.log(tonda.krestniJmeno);

console.log(tonda["rok narozeni"]);
//console.log(tonda."rok narozeni"); //toto nefunguje

//objekt > pole
console.log(tonda.hobby);
console.log(tonda.hobby[2]);

//objekt > objekt > pole
console.log(tonda.pracovniNotebook.vybava[0]);


//zmena hodnoty
console.log(tonda);
tonda["krestniJmeno"] = "Tony";
console.log(tonda);
tonda.krestniJmeno = "Antonio";
console.log(tonda);

//zmena webkamery na hdmi
tonda.pracovniNotebook.vybava[1] = "hdmi";
console.log(tonda);

//pridani vlastnosti/klice
tonda.zamestnani = "lektor";
console.log(tonda);
