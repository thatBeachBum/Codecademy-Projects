//JS Program utilizing nested switch statemets and logical operators

var user = prompt("There are some nice waves off the coast today! Do you want surf, swim, or chill?").toUpperCase();

switch(user) {
    case 'SURF':
        var surfBoard = prompt("Did you bring a long or short surf board?").toUpperCase();
        if (surfBoard === 'LONG' || surfBoard === 'SHORT'){
            console.log("Cowabunga, dude!");
        } else {
            console.log("Better find a boogie board!");
        };    
        break;
    case 'SWIM':
        var towel = prompt("Did you remember to bring a towel?").toUpperCase();
        var weather = prompt("Is it sunny out?").toUpperCase();
        if (towel === 'YES' && weather === 'YES') {
            console.log("Go dive in!");
        } else {
            console.log("Better grab that towel, dude!");
        };
        break;
    case 'CHILL':
        var sandCastle = prompt("Do you know how to build a sand castle?").toUpperCase();
        if (sandCastle != 'YES') {
            console.log("Let's go practice!");
        } else {
            console.log("You're one rad dude!");
        };
        break;
    default:
        console.log("You can always stay home and watch a movie...");
};
