const table = {
  fire: ["grass"],
  water: ["fire"],
  grass: ["water"],
  electric: ["water"]
};

const calculateDamage = (yourType, opponentType, attack, defense) =>
  Math.ceil(
    50 *
      (attack / defense) *
      (table[`${yourType}`].indexOf(opponentType) !== -1
        ? 2
        : table[`${opponentType}`].indexOf(yourType) !== -1 ||
          yourType === opponentType
        ? 0.5
        : 1)
  );
