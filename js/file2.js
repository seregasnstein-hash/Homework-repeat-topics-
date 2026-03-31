function lunch() {
  const food = prompt(`Выберите из списка: 
        1 - пицца;
        2 - баурсак;
        3 - бургер;
        4 - салат;`).toLowerCase();

  switch (food) {
    case "1":
    case "пицца":
      alert(`Вы выбрали пиццу.
Цена: 3000 тг.`);
      break;
    case "2":
    case "баурсак":
      alert(`Вы выбрали баурсак.
Цена: 50 тг.`);
      break;
    case "3":
    case "бургер":
      alert(`Вы выбрали бургер.
Цена: 2000 тг.`);
      break;
    case "4":
    case "салат":
      alert(`Вы выбрали салат.
Цена: 1400 тг.`);
      break;
    default:
      alert(`Такого блюда в меню нет`);
  }
}
lunch();
