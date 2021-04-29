class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
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

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        if(target instanceof Unit){
            target.res = target.res - this.power;
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if (target instanceof Unit){
            if (target.stat = "power"){
                target.power += this.magnitude
            }
            else {target.res += this.magnitude}
        }
        else {
            throw new Error("Wild donkeys would play better.")
        }
        // reduces target stat by magnitude
    }
}

const one = new Unit("Red Belt Ninja", 3,3,4);
const two = new Unit("Black Belt Ninja", 4,5,4);
const A = new Effect("Hard Algorythm", 2, "Increase Target's Resilience by 3.", "resilience", 3);
const B = new Effect("Unhandled Promise Rejection", 1, "Reduce Target's Resilience by 2", "resilience", -2);
const C = new Effect("Pair Programming", 3,"Increase Target's Power by 2", "power", 2);
A.play(one)
B.play(one)
C.play(one)
one.attack(two)
console.log(one,two,A,B,C)
