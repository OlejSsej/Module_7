 const userName = prompt("Введите имя ");
 const userBirth = prompt("Введите год рождения ");

 let ageText = "";
 let userAge = 2023-userBirth;
 let lastNum = userAge % 10;

switch (lastNum) {
  case 1:
    ageText = `${userAge} год`;
    break;
  case 2:
    ageText = `${userAge} года`;
    break;
  case 3:
    ageText = `${userAge} года`;
    break;
  case 4:
    ageText = `${userAge} года`;
    break;
  default:
    ageText = `${userAge} лет`;
    break;
}
  

if (!isNaN(userAge) && (!(userBirth === ''))) { 
  alert(`${userName}: ${ageText}`)
} else {
  alert("Год не число или пустое имя");
}



