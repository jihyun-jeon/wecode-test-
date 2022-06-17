function even() {
  const arrNum = [];
  for (let i = 1; i <= 50; i += 1) {
    arrNum.push(i);
  }

  return arrNum.filter((el) => el % 2 === 0);
}

console.log(even());
