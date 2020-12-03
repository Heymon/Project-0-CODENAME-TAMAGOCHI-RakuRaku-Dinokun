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
    }


    sleep = function sleep (amount) {
        this.sleepness+=amount;
        console.log(this.sleepness);
        
    }


    play = function play (amount) {
        this.boredom+=amount;
        console.log(this.boredom);
        
    }

    ageOverTime = function ageOverTime() {
        this.age++;
        console.log(this.age);
        
    }


}


const screens = ["start", "home", "feed", "sleep", "play"];
let curScreen = screens[0];

//======================================= FUNCTIONS =========================

/* const goHome = function goHome() {

    curScreen= screens[1]; 
    changeScreen(curScreen); 
    updateScreen(curScreen);
    
} */

const checkScreen = function checkScreen(event) {

    if (event.target.id !== "enter__button") {

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


        
    } else {

        if (curScreen === "start") {
            test.setName();
            curScreen= screens[1];
            startTamagochi();
            updateScreen(curScreen);
            
        } else if (curScreen === "home"){
            updateScreen(curScreen);
            
        }else if (curScreen === "feed"){
            test.feed(1);
            updateScreen(curScreen);
            
        }else if (curScreen === "sleep"){
            test.sleep(1);
            updateScreen(curScreen);
            
        }else if (curScreen === "play"){
            test.play(1);
            updateScreen(curScreen);
            
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

    const $progresses = $(`.${screenOn}`).find("progress");
    //console.log($progresses);
    for (let i = 0; i < $progresses.length; i++) {
        //console.log($progresses.eq(i).attr("class"));
        $progresses.eq(i).val(test[`${$progresses.eq(i).attr("class")}`]);
        //console.log(test[`${$progresses.eq(i).attr("class")}`]);   
    }
    
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

    const ageTime = setInterval(() => {test.ageOverTime(); updateAge(curScreen);}, 10000);
    const hungerTime = setInterval(() => {test.feed(-1); updateStats(curScreen);}, 10000);
    const boredomTime = setInterval(() => {test.play(-1); updateStats(curScreen);}, 5000);
    const sleepnessTime = setInterval(() => {test.sleep(-1); updateStats(curScreen);}, 30000);

    
    
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

$("#home__button").on("click", () => {curScreen= screens[1]; changeScreen(curScreen); updateScreen(curScreen)});

$("#right__button").on("click", checkScreen);

$("#left__button").on("click", checkScreen);



/* const $curInput = $(".screen").children("input");

console.log($curInput.text());




const test = new Tamagochi(); */

//======================================= UPDATE =========================


const test = new Tamagochi();