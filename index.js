// First Labour : Heracles vs Nemean Lion
const Fighter = require('./src/Fighter');

const heracles = new Fighter('🧔 Heracles',20, 6);
const lion = new Fighter('🦁 Nemean Lion', 11, 13);


let round = 1;
while (heracles.life > 0 && lion.life > 0) {
  console.log(`Round ${round}:`);
  heracles.fight(lion);
  console.log(`${heracles.name} attack ${lion.name}  his make ${heracles.strength} damage points.`);
  console.log(`${lion.name} has ${lion.life}life points.`);
  if (!lion.isAlive()) {
    console.log(`${heracles.name} has defeat ${lion.name} ! 🏆`);
    break;
  }
  lion.fight(heracles);
  console.log(`${lion.name} attack ${heracles.name}  his make  ${lion.strength} damage points.`);
  console.log(`${heracles.name} has ${heracles.life} life points.`);
  if (!heracles.isAlive()) {
    console.log(`${lion.name} has defeat ${heracles.name} ! 💀`);
break;  
}
round++;
}

