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
(adventurer.roll());

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

//Now re-create Robin, Leo, and Frank 

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
(robin.companion.roll());
(robin.companion.companion.roll());

//Part 3: Class Features 

//create an Adventure class that had specific attributes that other characters don't need to have

class Adventurer extends Character {
    constructor (name, role, skills) {
      super(name);
      //Adventures also start with 100 health points 
      //Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      // Adventures have exploration skills that defaults to an empty array if not provided
      this.skills = skills || [];
    };
        // Adventurers have the ability to scout ahead of them.
        scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
        };
        //Adventures have the ability to narrate 
        narration () {
            console.log(`${this.name} is now doing something...`);
        }
  }

  
//create a Companion class with properties and methods specific to the companions
  
class Companion extends Character {
    constructor(name, type){
        super();
        this.name = name;
        this.type = type;
     };
     navigate () {
        console.log(`${this.name} is giving out navigation instruction to ${adventurer}`)
     }
}

//add Robin as an Adventurer and Leo and Frank as companions 
const Robin = new Adventurer ("Robin", "Main Character", ["Climbing, Swimming"])
    console.log(Robin);
const leo = new Companion('Leo', 'cat');
  console.log(leo);
const Frank = new Companion('Frank', 'Flea');
Frank.inventory = ["small hat", "sunglasses"];
    console.log(Frank);
    
// Part 4: Class Uniforms