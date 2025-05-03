const cookie = {
    name: "Chocolate chip",
    isGlutenFree: true,
    "+Yummy": true,
    eatCookie: function(){
        console.log("I ma eating "+ this.name);
    }
 };

//cookie.name = "chip chocolate";
// cookie.isGlutenFree = true;
// console.log(cookie["+Yummy"]);
// console.log(cookie.name, cookie.isGlutenFree);
// console.log(cookie);
cookie.eatCookie();

class Cookie{

    constructor(name, isGlutenFree){
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    eatCookie(){ 
            console.log("I am eating "+ this.name);
    }
}

const myCookie = new Cookie("Iced Oatmeal",false);
//console.log(myCookie);
console.log(myCookie["name"]);
myCookie.eatCookie();