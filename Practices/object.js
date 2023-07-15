const object={
    name:"Mounika",
    surname:"Sangishetty",
    course:"Fullstack 2.0",
    role: "student"
}
//console.log(object);

const obj1={
    name:"Mounika",
    surname:"Sangishetty",
    course:"Fullstack 2.0",
    role: "student"
}
obj1["attendedclasses"]=25;
//console.log(obj1);
obj1.attendedclasses=26;
//console.log(obj1);

const obj2=new Object();
    obj2.username="mounika_sangishetty";
    obj2.emailid="mounikakarnati666@gmail.com";
    obj2.mobileno=9999999990;
    obj2.logincounts=50;
    //console.log(obj2);

    const profile={
        name:"mounika_sangishetty",
        emailid:"mounikakarnati666@gmail.com",
        mobileno:9999999990
    }
    const obj3=Object.create(profile);
    //console.log(obj3);
    //console.log(obj3.mobileno);
    //console.log(Object.getPrototypeOf(obj3));

    const obj4=Object.create({});
    Object.defineProperty(obj4,"book",{
        //icon: '📘',
        get: () => '📘',
        enumerable: true
    })
    //console.log(obj4);
    //console.log(Object.getPrototypeOf(obj4));
    //console.log(obj4.book);

    //for(let k in obj4){
    //    console.log("value is:",k);
    //}

    const obj5={
        comics:"marvel",
        pen:"🖊️",
        printComic: function(){
            this.pen="🖊️🗒️",
            console.log(this);
            return this;
        }
    }
    //console.log(obj5);
    //console.log(obj5.printComic());
    console.log(obj5.printComic().printComic().printComic());
