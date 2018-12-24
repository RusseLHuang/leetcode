function solution(A) {
  var n = A.length;
  var L = new Array(n + 1);
  L[0] = -1;
  var i;
  for (i = 0; i < n; i++) {
    L[i + 1] = A[i];
  }
  var count = 0;
  var pos = n % 2 == 0 ? Math.floor(n / 2) + 1 : Math.ceil((n / 2));
  candidate = L[pos];

  for (i = 1; i <= n; i++) {
    if (L[i] == candidate)
      count = count + 1;
  }

  if (count >= pos)
    return candidate;
  return (-1);
}

const data = [2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 6];
const result = solution(data);

const SMSMessage = (msg, k) => {
  let i = 0;
  const MSG = [];
  const split = msg.split(' ');
  while (i < split.length) {
    let j = i + 1;
    let concatString = split[i];
    if (concatString.length > k) return -1;

    for (; j < split.length; j++) {
      let temp = concatString + " " + split[j];
      if (temp.length > k) {
        break;
      }

      concatString = temp;
    }

    MSG.push(concatString);
    i = j;
  }

  return MSG.length;
}
const msg = "abc ddeafaef asdaw awidijij aowjda";
const k = 15;
const result2 = SMSMessage(msg, k);

const goSouth = (i, j) => {

}

const goWest = () => {

}

const draw = (row, col) => {
  // South
  for (let k = 0; k < row; k++) {
    if (row) {

    }
  }
}

const fn = (tiles) => {
  const clone = new Array(tiles.length).fill(null).map(() => new Array(tiles[0].length).fill(null));
  const row = tiles.length;
  const col = tiles[0].length;
  let country = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (clone[i][j] == true) { // visited
        continue;
      }

      const stack = [];
      stack.push([i, j]);
      country++;

      // Until there are no neighbours anymore
      while (stack.length > 0) {
        const vertices = stack.pop();
        const tempRow = vertices[0];
        const tempCol = vertices[1];
        clone[tempRow][tempCol] = true;

        if (tempCol < col - 1 && tiles[tempRow][tempCol] == tiles[tempRow][tempCol + 1] && clone[tempRow][tempCol + 1] != true) { // East
          stack.push([tempRow, tempCol + 1]);
        } 

        if (tempCol > 0 && tiles[tempRow][tempCol] == tiles[tempRow][tempCol - 1] && clone[tempRow][tempCol - 1] != true) { // West
          stack.push([tempRow, tempCol - 1]);
        } 

        if (tempRow < row - 1 && tiles[tempRow][tempCol] == tiles[tempRow + 1][tempCol] && clone[tempRow + 1][tempCol] != true) { // South
          stack.push([tempRow + 1, tempCol]);
        }

        if (tempRow > 0 && tiles[tempRow][tempCol] == tiles[tempRow - 1][tempCol] && clone[tempRow][tempCol - 1] != true) { // North
          stack.push([tempRow - 1, tempCol]);
        }         
      }
    }
  }

  return country;
}

console.time("test");
const d = [[5, 4, 4,3], [4, 3, 4,3], [3, 2, 4,3], [2, 2, 2,1], [3, 3, 4,1], [1, 4, 4,2], [4, 1, 1,2]];
const r = fn(d);
console.timeEnd("test");
console.log(r)