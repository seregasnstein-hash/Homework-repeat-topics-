function gameGuessTheLetter() {
  const letters = ["a", "b", "c", "d", "e", "f", "g"];

  const letter = letters[Math.floor(Math.random() * letters.length)];
  let counter = 0;
  console.log(letter);
  do {
    let playerLetter =
      prompt(`Угадайте и введите букву из указанных: ('a', 'b', 'c', 'd', 'e', 'f', 'g') 
у вас 3 попытки`).toLowerCase();

    if (playerLetter === null) {
      alert("Игра отменена");
      return;
    }

    if (letters.includes(playerLetter)) {
      if (playerLetter === letter) {
        alert(`Вы угадали букву "${letter}" поздравляем!`);
        break;
      } else {
        counter++;
        alert(`Неправильно!
У вас осталось попыток: ${3 - counter}`);
      }
    } else {
      alert(
        `Угадайте и введите букву из указанных: ('a', 'b', 'c', 'd', 'e', 'f', 'g')`,
      );
    }
    if(counter === 3){
        alert(`Вы проиграли, загаданная буква ${letter}`)
    }
  } while (counter !== 3);
}

gameGuessTheLetter();
