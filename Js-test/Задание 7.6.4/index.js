for (let i = 0; i < 3; i += 1){
  let game = ''
  for (let j = 0; j < 3; j += 1){
    if ((i+j) % 2 === 0){
      game += 'x ';
    }
    else{
      game += 'o ';
    }
  }
  console.log(game);
}

