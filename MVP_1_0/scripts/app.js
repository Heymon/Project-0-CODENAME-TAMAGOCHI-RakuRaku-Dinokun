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
        this.sleep=6;
        this.boredom=7;
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
        curScreen= screens[1];
        changeScreen(curScreen);
        updateStats(curScreen);
        
    } else if (curScreen === "home"){
        updateStats(curScreen);
        
    }else if (curScreen === "feed"){
        
    }else if (curScreen === "sleep"){
        
    }else if (curScreen === "play"){
        
    }
    
}

const changeScreen = function changeScreen(screenOn) {

    console.log(screenOn);
    const $screens = $(".screen");
    for (let i = 0; i < $screens.length; i++) {
        if ($screens.eq(i).hasClass (screenOn)) {
            $screens.eq(i).removeClass("off");
            $screens.eq(i).addClass("on");
            
        } else {
            $screens.eq(i).removeClass("on");
            $screens.eq(i).addClass("off");

        }   
    }
}

const updateStats = function updateStats(screenOn) {

    const $name = $(`.${screenOn} h2`).first();
    //same as
    //const $name = $(`.${screenOn} h2:first-child`); for this situatioan cuz :first-child could return an array of all first childs
    console.log($name);

    $name.text(test.name);
    
    const $age = $(`.${screenOn}`).children("h2:last-of-type");

    console.log($age);

    $age.text(`AG. ${test.age}`);
    
    const $progresses = $(`.${screenOn}`).find("progress");
    console.log($progresses);
    for (let i = 0; i < $progresses.length; i++) {
        console.log($progresses.eq(i).attr("class"));
        $progresses.eq(i).val(test[`${$progresses.eq(i).attr("class")}`]);
        
    }

    
}


/* const $screens = $(".screen");
console.log($screens.eq(0));
console.log($screens.eq(0).removeClass("off"));
$screens.eq(0).removeClass("off");
console.log($screens.eq(0).removeClass("off"));
$screens.eq(0).addClass("on");
$screens.eq(0).addClass("on");
$screens.eq(0).addClass("on"); */

//======================================= EVENT LISTENERS =========================

$("#enter__button").on("click", checkScreen);

/* const $curInput = $(".screen").children("input");

console.log($curInput.text());




const test = new Tamagochi(); */

//======================================= UPDATE =========================


const test = new Tamagochi();