let userInput = prompt("Введите число:");
let number = +userInput; 

if (!isNaN(number)) { 
  alert(`Число: ${number}\nКвадрат числа: ${number*number}\nКуб числа: ${number*number*number}`);
} else {
  alert("Вы ввели не число!");
}

