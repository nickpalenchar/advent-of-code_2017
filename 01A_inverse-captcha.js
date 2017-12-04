function inverseCaptcha_clever(input){
  return input.split("")
  .map(val => parseInt(val,10))
  .reduce((acc, val, i, arr) => val === (arr[i+1] === undefined ? arr[0]:arr[i+1]) ? acc+val : acc, 0);
}
