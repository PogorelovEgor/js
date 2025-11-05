const sum = prompt("Ведите размер депозита");
let rate = 7;
let step = 2;
const housCost = 13500;
let final;
final = sum * Math.pow(1 + rate / 100, step);
if (final > housCost) {
  console.log(`Вы можете купить дом. Остаток ${final-housCost}`);
} else {
  console.log(`Вам ещё не хватает денег. Вам ещё не зватает ${housCost - final}`);
}
