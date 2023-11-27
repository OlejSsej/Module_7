const word = prompt('Введите слово для проверки на палиндром');

formattedStr = word.toLowerCase();
length = formattedStr.length;

let reverseStr = '';

for (let i = length-1 ; i >= 0; i--){
  reverseStr += formattedStr[i];
}


if (reverseStr === formattedStr) {
  alert(`Слово "${word}" является палиндромом`);
} else {
  alert(`Слово "${word}" не является палиндромом`);
}

