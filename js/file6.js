function multiplicationTable() {
  let number = +prompt("Введите число(1-9): ");

  if (!isNaN(number) && number >= 1 && number <= 9) {
    for (let i = 1; i <= 10; i++) {
      document.write(`${number} * ${i} = ${number * i}<br>`);
    }
  }else{
    alert('Введите число!');
  };
};

multiplicationTable();
