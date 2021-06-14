// JAVASCRIPT FOR THE TITLE CASE CHALLENGE TEMPLATE

const titleCaseInput = document.querySelector('.title-case-input')
const titleCaseBtn = document.querySelector('.title-case-btn')
const titleCaseOutput = document.querySelector('.title-case-output')

// LOGIC FOR THE TITLE-CASE FUNCTION
function printTitleCase(){
  // get the input from user and convert data type to array data type
  let userInput = titleCaseInput.value.split(' ').map((item) => {
    // get the first letter from each word and capitalize
    // then add the capitalized letter to the remaining letters of the word
    return item[0].toUpperCase() + item.slice(1)
  })

  // join the words together back into a string
  titleCaseOutput.innerHTML = 'Output: ' + userInput.join(' ')
}

function clearTitleCase(){
  titleCaseOutput.innerHTML = ''
  printTitleCase();
}

titleCaseBtn.addEventListener('click', clearTitleCase, false)
document.addEventListener('keypress', function (e) {
  if(e.key === 'Enter'){
    printTitleCase();
  }
})