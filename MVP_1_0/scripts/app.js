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




class Tamagochi {

    constructor(name){
        this.name= name;

        this.age=0;
        this.hunger=5;
        this.sleep=5;
        this.boredom=5;
        this.isAlive=true;
        this.state=["child", "teenager","adult"];
    }


}


$("#enter__button").on("click", function test(event) {

    const $curInput = $(".screen").children("input");

    console.log($curInput);

    const test = new Tamagochi($curInput.val());

    console.log(test);
    
})


/* const $curInput = $(".screen").children("input");

console.log($curInput.text());




const test = new Tamagochi(); */