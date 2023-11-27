const userName = prompt("Введите имя ");
const userAge = prompt("Введите ваш возраст ");

let creditInput = "";

if (!isNaN(userAge) && (userName !== '')) {
  if (userAge < 18) {
    alert("Кредит не одобрен");
  } else if (userAge >= 18 && userAge < 21) {
    creditInput = prompt(`Максимальная сумма кредита 50.000\nВведите сумму кредита кратную 1000`);
  } else if (userAge >= 22 && userAge < 35) {
    creditInput = prompt(`Максимальная сумма кредита 400.000\nВведите сумму кредита кратную 1000`);
  } else if (userAge >= 36 && userAge <= 65) {
    creditInput = prompt(`Максимальная сумма кредита 1.000.000\nВведите сумму кредита кратную 1000`)  ;
  } else {
    alert("Некорректный ввод данных");
  } 

  if (creditInput % 1000 == 0){
    alert(`${userName}, вам одобрен кредит кредит на сумму ${creditInput}`)
    } else {
    alert(`Вы ввели неверное число, мы можем выдать вам кредит на сумму ${creditInput -= creditInput % 1000}`)
    }
 
}else {
  alert("Год не число или пустое имя");
}








