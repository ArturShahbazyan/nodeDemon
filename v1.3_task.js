function avengers(heros, villians) {
  let herosKeys = Object.keys(heros);
  let villainsKeys = Object.keys(villains);

  let isAttack = true;
  let attackId;

  const randAvenger = (avengersKeys) =>
    avengersKeys[Math.floor(Math.random() * avengersKeys.length)];

  const wonHeros = (keys) => {
    alert("Heros won");
    console.log(`${heros[keys[0]].name}[${Math.floor(heros[keys[0]].health)}] ${
      heros[keys[1]].name
    }[${Math.floor(heros[keys[1]].health)}] ${heros[keys[2]].name}[${Math.floor(
      heros[keys[2]].health
    )}]
        `);
    clearInterval(attackId);
  };

  const wonVillians = (keys) => {
    alert("Villians won");
    console.log("Villians won");
    console.log(`${villians[keys[0]].name}[${Math.floor(
      villians[keys[0]].health
    )}] ${villians[keys[1]].name}[${Math.floor(villians[keys[1]].health)}] ${
      villians[keys[2]].name
    }[${Math.floor(villians[keys[2]].health)}]
        `);
    clearInterval(attackId);
  };

  const toHarm = (attacker, victim) => {
    const victimHealth = Math.floor(victim.health);
    const attackerHealth = Math.floor(attacker.health);
    console.log(
      `${attacker.name}[${attackerHealth}] hits ${victim.name}[${victimHealth}] with a power of ${attacker.power}`
    );

    victim.health -= attacker.power;

    if (victim.health <= 0) {
      console.log(victim.name + ":", "is dead!");
      return "dead";
    }
  };

  const attack = (attacker) => {
    isAttack = !isAttack;

    const heroKey = herosKeys[Math.floor(Math.random() * herosKeys.length)];
    const villainKey =
      villainsKeys[Math.floor(Math.random() * villainsKeys.length)];

    if (herosKeys.length === 3 || villainsKeys.length === 3) {
      if (herosKeys.length > villainsKeys.length) {
        wonHeros(herosKeys);
        return;
      } else {
        wonVillians(villainsKeys);
        return;
      }
    }

    if (isAttack) {
      console.log(attacker.name, "attacked", villains[villainKey].name);
      if (toHarm(attacker, villains[villainKey]) === "dead") {
        villainsKeys = villainsKeys.filter((key) => key !== villainKey);
      }
    } else {
      console.log(attacker.name, "attacked", heros[heroKey].name);
      if (toHarm(attacker, heros[heroKey]) === "dead") {
        herosKeys = herosKeys.filter((key) => key !== heroKey);
      }
    }

    clearInterval(attackId);

    if (herosKeys.length !== 3 || villainsKeys.length !== 3) {
      attackId = setInterval(() => {
        if (isAttack) {
          attack(villians[randAvenger(villainsKeys)]);
        } else {
          attack(heros[randAvenger(herosKeys)]);
        }
      }, (1 / attacker.speed) * 5);
    }
  };

  attack(villians[randAvenger(villainsKeys)]);
}

fighter = (name) => {
  return {
    name: name,
    speed: Math.floor(Math.random() * 5) + 1,
    health: 100,
    power: (Math.random() * 10).toFixed(1),
  };
};

const heros = [
  fighter("hero1"),
  fighter("hero2"),
  fighter("hero3"),
  fighter("hero4"),
  fighter("hero5"),
  fighter("hero6"),
  fighter("hero7"),
  fighter("hero8"),
  fighter("hero9"),
  fighter("hero10"),
];

const villains = [
  fighter("villain1"),
  fighter("villain2"),
  fighter("villain3"),
  fighter("villain4"),
  fighter("villain5"),
  fighter("villain6"),
  fighter("villain7"),
  fighter("villain8"),
  fighter("villain9"),
  fighter("villain10"),
];

avengers(heros, villains);
