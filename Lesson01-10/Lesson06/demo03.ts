class Animal{
    private name:string;
    public constructor(theName:string){
        this.name = theName;
    }
    public move(distanceInMeters:number = 0){
        console.log(`${this.name} move ${distanceInMeters}m.`)
    }
}

class Snake extends Animal {
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters)
    }
}

class Horse extends Animal {
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters = 45){
        console.log("Galloping...")
        super.move(distanceInMeters)
    }
}

let sam = new Snake("Sammy the Python")
let tom:Animal = new Horse('Tommy the Palomino');

sam.name
sam.move()
tom.move(34)