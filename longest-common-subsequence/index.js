
const longestCommonSubsequence = (str1, str2) => {
  const T = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i == 0 || j == 0) {
        T[i][j] = 0;
      } else if (str1[i - 1] == str2[j - 1]) {
        T[i][j] = T[i - 1][j - 1] + 1;
      } else {
        if (T[i - 1][j] > T[i][j - 1]) {
          T[i][j] = T[i - 1][j];
        } else {
          T[i][j] = T[i][j - 1];
        }
      }
    }
  }

  let i = str1.length;
  let j = str2.length;
  const strSubsequence = [];

  while(i > 0 && j > 0) {
    if (str1[i - 1] == str2[j - 1]) {
      strSubsequence.push(str1[i - 1]);
      i--;
      j--;
    } else {
      if (T[i - 1][j] > T[i][j - 1]) {
        i--;
      } else if (T[i - 1][j] < T[i][j - 1]) {
        j--;
      } else {
        i--;
        j--;
      }
    }
  }

  return strSubsequence.reverse().join('');
}

const str1 = "ABCDGH";
const str2 = "AEDFHR";
const result = longestCommonSubsequence(str1, str2);
console.log(result);