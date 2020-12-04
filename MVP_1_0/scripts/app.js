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
        this.sleepness=6;
        this.boredom=7;
        this.isAlive=true;
        this.state=["child", "teenager","adult"];
    }


    setName = function setName() {

        const $curInput = $(".screen__start").children("input");
        this.name = $curInput.val();
        $curInput.val("");
        console.log(this);
        
    }

    feed = function feed (amount) {
        this.hunger+=amount;
        console.log(this.hunger);
        this.checkDeath(this.hunger, "hunger");
    }


    sleep = function sleep (amount) {
        this.sleepness+=amount;
        console.log(this.sleepness);
        this.checkDeath(this.sleepness, "sleepness");
        
    }


    play = function play (amount) {
        this.boredom+=amount;
        console.log(this.boredom);
        this.checkDeath(this.boredom, "boredom");
        
    }

    ageOverTime = function ageOverTime() {
        this.age++;
        (this.age === 25 ? this.evolve(1) : null);
        (this.age === 75 ? this.evolve(2) : null);
        console.log(this.age);
        this.checkDeath(this.age, "age");
        
    }

    evolve = function evolve(index) {

        const $imgArr = $("aside").children("img");

        for (let i = 0; i < $imgArr.length; i++) {
            $imgArr.eq(i).attr("src", evolutionImgs[index]); 
        }

    }

    checkDeath = function checkDeath(value, description) {

        console.log(value);
        if ( description === "age" && value > 100 ) {

            this.die(description);
            
        }else if(description !== "age"){

            if (value > 10 || value < 0) {

                this.die(description);
                
            }   
        }
    }

    die(descriptor){

        for (let i = 0; i < intervalsArr.length; i++) {
            clearInterval(intervalsArr[i]);
            
        }

        changeScreen(screens.indexOf("home"));



        /* clearInterval(inageTime);

        clearInterval(hungerTime);
        clearInterval(boredomTime);
        clearInterval(sleepnessTime); */

        console.log("died of " + descriptor);

        popUpMessage("YOUOOUO let it DIEEE!")

    }


}


const screens = ["start", "home", "feed", "sleep", "play"];
let curScreen = screens[0];

const intervalsArr = [];

evolutionImgs = ["images/poketowerghost.gif", "images/haunter.gif", "images/gengar.gif"];

//======================================= FUNCTIONS =========================

const checkScreenEnter = function checkScreenEnter(event) {

    if (curScreen === "start") {
        test.setName();
        curScreen= screens[1];
        startTamagochi();
        updateScreen(curScreen);
        
    } else if (curScreen === "home"){
        updateScreen(curScreen);
        
    }else if (curScreen === "feed"){
        test.feed(-1);
        updateScreen(curScreen);
        
    }else if (curScreen === "sleep"){
        test.sleep(1);
        updateScreen(curScreen);
        
    }else if (curScreen === "play"){
        test.play(1);
        updateScreen(curScreen);   
    }

}

const checkScreenSides = function checkScreenSides(event) {

    if (event.target.id === "right__button") {

        if (curScreen === "home"){

            console.log(screens.indexOf("home"));
            const nextScreen = screens.indexOf("home")+1;
            changeScreen(nextScreen);
            
        }else if (curScreen === "feed"){

            const nextScreen = screens.indexOf("feed")+1;
            changeScreen(nextScreen);
            
        }else if (curScreen === "sleep"){
            
            const nextScreen = screens.indexOf("sleep")+1;
            changeScreen(nextScreen);
            
        }else if (curScreen === "play"){
            
            const nextScreen = screens.length - screens.indexOf("play");
            changeScreen(nextScreen);
            
        }
        
        
    } else if(event.target.id === "left__button"){
        
        if (curScreen === "home"){

            const nextScreen = screens.length - screens.indexOf("home");
            changeScreen(nextScreen);
            
        }else if (curScreen === "play"){
            
            const nextScreen = screens.indexOf("play")-1;
            changeScreen(nextScreen);
            
        }else if (curScreen === "sleep"){
            
            const nextScreen = screens.indexOf("sleep")-1;
            changeScreen(nextScreen);
            
        }else if (curScreen === "feed"){
            
            const nextScreen = screens.indexOf("feed")-1;
            changeScreen(nextScreen);
            
        }

        
    }
    
    
}

const startTamagochi = function startTamagochi() {

    const $start = $(".screen__start");
    $start.removeClass("on");
    $start.addClass("off");

    const $home = $(".home");
    $home.removeClass("off");
    $home.addClass("on");

    startTime();
    
}

const changeScreen = function changeScreen(indexOfScreen) {

    curScreen= screens[indexOfScreen];

    //console.log(screenOn);
    const $screens = $(".screen");
    for (let i = 0; i < $screens.length; i++) {
        if ($screens.eq(i).hasClass (curScreen)) {
            $screens.eq(i).removeClass("off");
            $screens.eq(i).addClass("on");
            
        } else {
            $screens.eq(i).removeClass("on");
            $screens.eq(i).addClass("off");

        }   
    }

    updateScreen(curScreen);
}

const updateScreen = function updateScreen(screenOn) {

    const $name = $(`.${screenOn} h2`).first();
    //same as
    //const $name = $(`.${screenOn} h2:first-child`); for this situatioan cuz :first-child could return an array of all first childs
    //console.log($name);
    $name.text(test.name);

    updateAge(screenOn);
    

    updateStats(screenOn);
}

const updateAge = function updateAge(screenOn) {
    const $age = $(`.${screenOn}`).children("h2:last-of-type");
    $age.text(`AG. ${test.age}`);
    
}

const updateStats = function updateStats(screenOn) {

    const $meters = $(`.${screenOn}`).find("meter");
    //console.log($meters);
    for (let i = 0; i < $meters.length; i++) {
        //console.log($meters.eq(i).attr("class"));
        $meters.eq(i).val(test[`${$meters.eq(i).attr("class")}`]);
        //console.log(test[`${$meters.eq(i).attr("class")}`]);   
    }
    
}

const popUpMessage = function popUpMessage(message) {

    //const $message = $(`<h1 class='pop__up'>${message} <br> Start Over ?</h1>`);

    const $message = $(`<section class="pop__up">
                            <img src="images/pikachu_wing.gif" alt="Death">
                            <div class="nes-balloon from-left">
                                <p>${message} <br> Start Over ?</p>
                            </div>
                        </section>`);

    const $home = $(".home").append($message);

    const stylings ={

        position: "absolute",
        margin: "auto",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        "z-index": "3"
    };

    $message.css(stylings);
    console.log($message);
    console.log($message.children("section"));
    setTimeout(() => $message.addClass("poped__up"), 500);

    
}


/* let time = 10;

function example() {
    time--;
    console.log(time);
    if (time === 0) {
        clearInterval(timer)   
    }
}

const timer = setInterval(example, 100); */

const startTime = function startTime() {

    const ageTime = setInterval(() => {test.ageOverTime(); updateAge(curScreen);}, 1000);//25min
    intervalsArr.push(ageTime);
    const hungerTime = setInterval(() => {test.feed(1); updateStats(curScreen);}, 10000);
    intervalsArr.push(hungerTime);
    const boredomTime = setInterval(() => {test.play(-1); updateStats(curScreen);}, 5000);
    intervalsArr.push(boredomTime);
    const sleepnessTime = setInterval(() => {test.sleep(-1); updateStats(curScreen);}, 12000);
    intervalsArr.push(sleepnessTime);

    /* 15000 25min
       10000 
       5000 
       12000 20min */
    
}

//======================================= EVENT LISTENERS =========================

$("#enter__button").on("click", checkScreenEnter);

$("#home__button").on("click", () => changeScreen(screens.indexOf("home")));

$("#right__button").on("click", checkScreenSides);

$("#left__button").on("click", checkScreenSides);



/* const $curInput = $(".screen").children("input");

console.log($curInput.text());




const test = new Tamagochi(); */

//======================================= UPDATE =========================


const test = new Tamagochi();