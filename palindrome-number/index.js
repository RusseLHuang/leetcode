
const palindromeNumber = (num) => {
  const numString = num.toString();
  for (let i=0; i< numString.length / 2; i++) {
    if (numString[i] != numString[numString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const num = 1221;
const result = palindromeNumber(num);
console.log(result)
