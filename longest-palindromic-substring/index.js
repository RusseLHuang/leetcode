
// Brute force
const longestPalindromicSubstring1 = (str) => {
  let longestIndex = 0;
  let start = 0;
  let end = 1;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const substr = str.substring(i, j + 1);
      const reverseSubstr = [...substr].reverse().join('');

      if (substr === reverseSubstr) {

        if (longestIndex < j - i) {
          longestIndex = j - i;
          start = i;
          end = j + 1;
        }
      }
    }
  }

  return str.substring(start, end)
}

// Longest common substring using expanded center
const longestPalindromicSubstring2 = (str) => {
  let longestLength = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < str.length; i++) {
    const evenLength = expandCenter(str, i, i);
    const oddLength = expandCenter(str, i, i + 1);

    const length = evenLength > oddLength ? evenLength : oddLength;
    if (longestLength < length) {
      longestLength = length;
      left = i - Math.floor(longestLength / 2);
      right = evenLength > oddLength ? i + Math.floor(longestLength / 2) : (i + 1) + Math.floor(longestLength / 2);
    }
  }

  return str.substring(left, right);
}

const expandCenter = (str, left, right) => {
  let L = left;
  let R = right;
  let leftIndex = left;
  let rightIndex = right;

  while (L >= 0 && R <= str.length) {
    const leftStr = str.substring(L, L + 1);
    const rightStr = str.substring(R - 1, R);

    if (leftStr != rightStr) {
      break;
    } else {
      leftIndex = L;
      rightIndex = R;
    }

    L--;
    R++;
  }

  return rightIndex - leftIndex;
}

const str = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
// const str = "ABDAAAADD"
const result = longestPalindromicSubstring2(str);
console.log(result);