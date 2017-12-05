function corruptionChecksum(data){
  let rows = data.split('\n');
  return rows.reduce((acc, row) => acc + diffLargestAndSmallest(row), 0);
}

function diffLargestAndSmallest(row){
  row = row.split('\t').map(val => parseInt(val, 10));

  // edge case: all values are the same
  if (row.every((val, i, arr) => val === (arr[i+1]||val))) {
    return [row[0], row[0]];
  }

  let largeSmall = row.reduce((acc, val) => {
    // largest candidiate
    if (val > acc[0]) {
      return [val, acc[1]];
    }
    // smallest value
    if (val < acc[1]) {
      return [acc[0], val];
    }
    return acc;
  },[-Infinity, Infinity]);
  
  return largeSmall[0] - largeSmall[1];
}
