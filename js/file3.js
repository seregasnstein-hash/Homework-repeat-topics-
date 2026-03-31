function numCheck() {
  const num = +prompt("Введите число: ");

  isNaN(num)
    ? alert(`Введите число!`)
    : num === 0
      ? alert("Ваше число 0.")
      : num > 0
        ? alert(`Ваше число ${num} - положительное`)
        : alert(`Ваше число ${num} - отрицательное.`);
}
numCheck();
