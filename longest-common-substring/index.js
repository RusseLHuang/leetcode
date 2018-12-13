
const longestCommonSubstring = (str1, str2) => {
  const T = Array(str2.length + 1).fill(null).map(() => {
    return Array(str1.length + 1).fill(null);
  });
  
  for (let i=0; i<str1.length + 1; i++) {
    T[0][i] = 0;
  }

  for (let j=0; j<str2.length + 1; j++) {
    T[j][0] = 0;
  }

  str1 = `0${str1}`;
  str2 = `0${str2}`
  let longestLength = 0;
  let longestColIndex = [];
  let longestRowIndex = [];
  for (let i=1; i<str1.length; i++) {
    for (let j=1; j<str2.length; j++) {
      if (str1[i] == str2[j]) {
        T[i][j] = T[i-1][j-1] + 1;
        if (longestLength < T[i][j]) {
          longestLength = T[i][j];
          longestColIndex = [];
          longestRowIndex = [];
          longestColIndex.push(i);
          longestRowIndex.push(j);
        } else if (longestLength == T[i][j]) {
          longestColIndex.push(i);
          longestRowIndex.push(j);
        }
      } else {
        T[i][j] = 0;
      }
    }
  }

  let allStr = [];
  for (let i=0; i<longestColIndex.length; i++) {
    let col = longestColIndex[i];
    let str = []
    for (let j=0; j<longestLength; j++) {  
      str.push(str1[col--]);
    }

    allStr.push(str.reverse().join(''));
  }

  return allStr;
}

const str1 = "ABCDAF"
const str2 = "ZABCDF"
const result = longestCommonSubstring(str1, str2);
console.log(result);