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
    updateStats(curScreen);
    
} */

const checkScreen = function checkScreen(event) {

    if (event.target.id !== "enter__button") {

        if (event.target.id === "right__button") {

            if (curScreen === "home"){

                curScreen= screens[2];
                changeScreen(curScreen);
                updateStats(curScreen);
                
            }else if (curScreen === "feed"){
                curScreen= screens[3];
                changeScreen(curScreen);
                updateStats(curScreen);
                
            }else if (curScreen === "sleep"){
                curScreen= screens[4];
                changeScreen(curScreen);
                updateStats(curScreen);
                
            }else if (curScreen === "play"){
                curScreen= screens[1];
                changeScreen(curScreen);
                updateStats(curScreen);
                
            }
            
            
        } else if(event.target.id === "left__button"){
            
            if (curScreen === "home"){

                curScreen= screens[4];
                changeScreen(curScreen);
                updateStats(curScreen);
                
            }else if (curScreen === "play"){
                curScreen= screens[3];
                changeScreen(curScreen);
                updateStats(curScreen);
                
            }else if (curScreen === "sleep"){
                curScreen= screens[2];
                changeScreen(curScreen);
                updateStats(curScreen);
                
            }else if (curScreen === "feed"){
                curScreen= screens[1];
                changeScreen(curScreen);
                updateStats(curScreen);
                
            }

            
        }


        
    } else {

        if (curScreen === "start") {
            test.setName();
            curScreen= screens[1];
            startTamagochi();
            updateStats(curScreen);
            
        } else if (curScreen === "home"){
            updateStats(curScreen);
            
        }else if (curScreen === "feed"){
            test.feed(1);
            updateStats(curScreen);
            
        }else if (curScreen === "sleep"){
            test.sleep(1);
            updateStats(curScreen);
            
        }else if (curScreen === "play"){
            test.play(1);
            updateStats(curScreen);
            
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

const changeScreen = function changeScreen(screenOn) {

    //console.log(screenOn);
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
    console.log($name.text());
    $name.text(test.name);
    console.log(test.name);
    /* const $age = $(`.${screenOn}`).children("h2:last-of-type");
    $age.text(`AG. ${test.age}`); */

    updateAge(screenOn);
    
    const $progresses = $(`.${screenOn}`).find("progress");
    //console.log($progresses);
    for (let i = 0; i < $progresses.length; i++) {
        //console.log($progresses.eq(i).attr("class"));
        $progresses.eq(i).val(test[`${$progresses.eq(i).attr("class")}`]);
        //console.log(test[`${$progresses.eq(i).attr("class")}`]);   
    }
}

const updateAge = function updateAge(screenOn) {
    const $age = $(`.${screenOn}`).children("h2:last-of-type");
    $age.text(`AG. ${test.age}`);
    
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

    /* const ageTime = setInterval(() => {test.ageOverTime(); updateAge(curScreen); }, 1000);
    const hungerTime = setInterval(() => test.feed(-1), 1000);
    const boredomTime = setInterval(() => test.play(-1), 1000);
    const sleepnessTime = setInterval(() => test.sleep(-1), 1000);
 */
    
    
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

$("#home__button").on("click", () => {curScreen= screens[1]; changeScreen(curScreen); updateStats(curScreen)});

$("#right__button").on("click", checkScreen);

$("#left__button").on("click", checkScreen);



/* const $curInput = $(".screen").children("input");

console.log($curInput.text());




const test = new Tamagochi(); */

//======================================= UPDATE =========================


const test = new Tamagochi();