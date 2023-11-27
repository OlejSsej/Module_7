const userName = prompt("Введите имя ");
const userBirth = prompt("Введите год рождения ");

 if (!isNaN(userBirth) && (!(userName === ''))) { 
  alert(`${userName}: ${2023-userBirth}`)
} else {
  alert("Год не число или пустое имя");
}

