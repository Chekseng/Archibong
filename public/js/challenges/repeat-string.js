// JAVASCRIPT FOR THE REPEAT STRING CHALLENGE

const repeatInputString = document.querySelector('.repeat-string-input-one')
const repeatInputNumber = document.querySelector('.repeat-string-input-two')
const repeatStringSubmitBtn = document.querySelector('.repeat-string-submit')
const repeatStringOutput = document.querySelector('.repeat-string-output')
const demo = document.querySelector('.demo')

// LOGIC FOR THE REPEAT STRING FUNCTION
function printRepeatString(){
  // grab both user inputs from input fields
  let repeatStringValue = repeatInputString.value;
  let repeatNumberValue = parseInt(repeatInputNumber.value, 10)

  // define an empty string variable to hold the operation
  let output = ''

  // conditional statement to check edge cases
  if(repeatNumberValue > 9){
    output = '<p class="repeat-error">The Number Must Be Between 0 - 9</p>'
    setTimeout(() => {
      repeatStringOutput.innerHTML = ''
    }, 2000)
  } else {
    for(let i = 0; i < repeatNumberValue; i++){
      output += `<li style="repeat-string-list-item">${repeatStringValue}</li>` + ' '
    }
  }


  repeatStringOutput.innerHTML = output;
}

repeatStringSubmitBtn.addEventListener('click', printRepeatString, false)

document.addEventListener('keypress', function (e) {
  if(e.key === 'Enter'){
    printRepeatString();
  }
})