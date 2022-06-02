// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    input = input.toLowerCase()
    let result = ''
    if(shift===0 || shift>25 ||shift < -25|| !shift) {return false};
    for(let i = 0; i < input.length; i++){
      let charCode = input.charCodeAt(i)
      if (charCode === 32){
        charCode = " "
      }
      if (charCode <= 96 || charCode >= 123) {
        charCode = input[i];
      } else {
          if(encode) //encoding
            charCode += shift;
          if(!encode) //decoding
            charCode -= shift;
        if (charCode <= 96) charCode += 26;
        if (charCode >= 123) charCode -= 26;
        charCode = String.fromCharCode(charCode);
      }
      result += charCode;
    }
    return result; 
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
