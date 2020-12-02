console.log("app.js load");


//make tamagochi class
    //properties: 
        //name
        //age
        //hunger
        //sleep
        //boredom
        //isAlive
        //state[child, teenager, adult]
    //

    //method
        //startmeters
        //feed
        //put to sleep
        //play
        //die




//======================================= VARIABLES =========================

class Tamagochi {

    constructor(){
        this.name= "";

        this.age=0;
        this.hunger=5;
        this.sleep=5;
        this.boredom=5;
        this.isAlive=true;
        this.state=["child", "teenager","adult"];
    }


    setName = function setName() {

        const $curInput = $(".screen").children("input");
    
        this.name = $curInput.val();

        $curInput.val("");
    
        console.log(this.name);
        console.log(this);
        
    }


}


const screens = ["start", "home", "feed", "sleep", "play"];
let curScreen = screens[0];

//======================================= FUNCTIONS =========================

const checkScreen = function checkScreen(event) {

    if (curScreen === "start") {
        test.setName();
        
    } else if (curScreen === "home"){
        
    }else if (curScreen === "feed"){
        
    }else if (curScreen === "sleep"){
        
    }else if (curScreen === "play"){
        
    }
    
}





//======================================= EVENT LISTENERS =========================

$("#enter__button").on("click", checkScreen);

/* const $curInput = $(".screen").children("input");

console.log($curInput.text());




const test = new Tamagochi(); */

//======================================= UPDATE =========================


const test = new Tamagochi();