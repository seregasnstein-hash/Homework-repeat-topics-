function guessTheNumber() {
  const num = Math.floor(Math.random() * 20) + 1;
  console.log(num);
  let num2 = 0;

  while (num2 !== num) {
    num2 = +prompt("Введите число от 1 до 20 включительно");

    if (!isNaN(num2)) {
      if (num2 === num) {
        alert(`Вы угадали число: ${num}`);
      } else if (num2 > num) {
        alert("Ваше число больше!");
      } else {
        alert("Ваше число меньше!");
      }
    } else {
      alert(`Введите число от 1 до 20!`);
    }
  }
}

guessTheNumber();
