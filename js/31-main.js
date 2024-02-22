//"a"
//"aa"
//"aaa"
//"aaaa"
//"aaaaa"


let stringA = "a";
setInterval(() => {
    console.log(stringA);
    stringA += "a";
    //stringA = stringA + "a";
    
    //stringA++; //toto je spatne
}, 1000);