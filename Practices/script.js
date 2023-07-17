let myHeros=["thor","spiderman"];
let dcHeros=["batman","black adam","superman"];

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.mounika=function(){
    console.log(`mounika present in all objects`);
}
Array.prototype.heymounika=function(){
    console.log(`mounika says hello`);
}
myHeros.mounika();

const User={
    name: "top name",
    email: "topuser@gmail.com"
}

const Teacher={
    makeVideos: true
}

const TeachingSupport={
    isAvailable: false
}

const TSAssistant={
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=User;
//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);

//goal: set truevalue of string

String.prototype.truelength=function(){
    console.log(`true length is: ${this.trim().length}`);
}

let myname="mounika    ";