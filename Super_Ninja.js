class Ninja {
    constructor(name, health, speed =3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name)
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.strength)
    }
    drinksake(){
        this.health = this.health + 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed =3, strength=3, wisdom = 20) {
        super("Kay", health=200, speed =10, strength=10);
        this.wisdom = wisdom;
    }

    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
    speakWisdom(){ this.drinksake();
        console.log("The fat cat sat on the last cast.")
    
    }
}
const Kay = new Sensei()
Kay.speakWisdom()
Kay.showStats()

