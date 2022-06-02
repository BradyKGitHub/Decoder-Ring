// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
let answer = ''
input = input.toLowerCase()
const decodeKey = {
  11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
  12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
  13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
  14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
  15: "v", 25: "w", 35: "x", 45: "y", 55: "z",}

const encodeKey = {
  a: 11, b: 21, c: 31, d: 41, e: 51,
  f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
  l: 13, m: 23, n: 33, o: 43, p: 53, 
  q: 14, r: 24, s: 34, t: 44, u: 54, 
  v: 15, w: 25, x: 35, y: 45, z: 55,
}
if(encode===true){
  for(let i = 0; i < input.length; i++){
    let letter = input[i]
    let number = encodeKey[letter]
    if(letter === ' '){
      number = " "
    }
    answer += number
  }
}else {
  checkSpaces = input.split(" ")
let isEven = checkSpaces.every((word)=>word.length%2===0)
if(!isEven) 
{return false}
  for(let i = 0; i <input.length; (input[i] == " "? i++: i+=2)){

    let num = input[i]+input[i+1]
let letter = decodeKey[num]
if(letter === undefined)answer += " "
else{
  answer +=letter
}
  }
}
return answer
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
