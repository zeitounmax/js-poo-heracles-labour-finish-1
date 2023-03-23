/* Fighter class definition */
const  MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
      this.name = name;
      this.strength = strength;
      this.dexterity = dexterity;
      this.life = MAX_LIFE;
    }
    
    
    fight(opponent) {
      opponent.takeDamage(this.strength);
    }
  
    takeDamage(strength) {
      this.life -= strength;
    }
  
    isAlive() {
      return this.life > 0;
    }


fight(defender) {
    const damage = Math.floor(Math.random () * this.strength) + 1 ;
    const mitigation = Math.max(0, defender.dexterity - damage);
    const actualDamage = damage - mitigation;
    defender.life = Math.max(0, defender.life - actualDamage);
}

}

  
  module.exports = Fighter;