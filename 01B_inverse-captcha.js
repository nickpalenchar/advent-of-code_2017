function inverseCaptcha2_clever(input){
  
  if(input.length % 2) {
    throw new SyntaxError("input must be an even number of elements");
  }
  
  return input.split("")
  .map(val => parseInt(val,10))
  .reduce((acc, val, i, arr) => {
    console.log("accu is at ", acc);
    let compare = (i + arr.length/2) % arr.length;
    console.log("val ", val, "compare ", compare);
    return val === arr[compare] ? acc+val : acc;
    }
    ,0);
}
