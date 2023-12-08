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

console.log(adventurer.roll(6));