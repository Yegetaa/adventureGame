const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }, 
    subCompanion: {
        name: "Frank",
        type: "Flea",
        inventory: ["small hat", "sunglasses"]
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}

//Loop that logs each item in Robin's inventory 
for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);    
}

//check the "dice rolls" method
console.log(adventurer.roll(6));

//Part 2: Class
//create a character class that has name, health that is standardize to a max of 100,
// and an empty inventory array. Every character should also be able to make rolls. 

class Character {
    constructor (name) {
        this.name = name
        this.health = 100;
        this. inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}

//Now re-create Robin 

const robin = new Character ("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

//Note: Not only does this allow us to create standardized objects for each character,
// it also ensures that they all have common properties and methods such as roll.

//have companion roll dice
console.log(robin.companion.roll());
console.log(robin.companion.companion.roll());
