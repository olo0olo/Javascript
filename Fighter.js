/*3.  Two fighters, one winner.
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
Solution:
 function declareWinner(fighter1, fighter2, firstAttacker) { 
    return "Write your code here";
}*/


class Fighter {
    constructor (name, health, damagePerAttack){
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;

    }
    

}

function declareWinner(fighter1, fighter2, firstAttacker) { 
        
    if (firstAttacker == fighter2.name) [fighter1, fighter2] = [fighter2, fighter1];
     while (fighter1.health >= 0 && fighter2.health >= 0){
    fighter2.health -= fighter1.damagePerAttack;
    //console.log (fighter2.name +' ' + fighter2.health);
    if (fighter2.health <= 0) break;
    fighter1.health -= fighter2.damagePerAttack;
    //console.log (fighter1.name + ' ' + fighter1.health);

   }
        
    return fighter1.health <= 0 ? fighter2.name: fighter1.name;
}


console.log(declareWinner(new Fighter('Вася',10,2),new Fighter('Петя',5,4),'Вася') + '=' + 'Вася');
console.log(declareWinner(new Fighter('Вася',10,2),new Fighter('Петя',5,4),'Петя') + '=' + 'Петя');
console.log(declareWinner(new Fighter('Вася',20,5),new Fighter('Петя',5,4),'Петя') + '=' + 'Вася');
console.log(declareWinner(new Fighter('Вася',30,3),new Fighter('Петя',20,5),'Вася') + '=' + 'Петя');
console.log(declareWinner(new Fighter('Вася',30,3),new Fighter('Петя',20,5),'Петя') + '=' + 'Петя');