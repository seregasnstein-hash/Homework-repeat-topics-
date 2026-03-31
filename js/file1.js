function timesOfDay() {
  const nowHour = +prompt("Который сейчас час?(0-23): ");

  if (!isNaN(nowHour) && nowHour >= 0 && nowHour <= 23) {
    if (nowHour >= 0 && nowHour <= 5) {
      alert("Ваше время суток - ночь!");
    } else if (nowHour >= 6 && nowHour <= 11) {
      alert("Ваше время суток - утро!");
    } else if (nowHour >= 12 && nowHour <= 17) {
      alert("Ваше время суток - день!");
    } else {
      alert("Ваше время суток вечер");
    }
  }else{
    alert("Введите корректные данные (0-23)");
  }
}
timesOfDay();