// JAVASCRIPT LOGIC FOR LONGEST WORD 

const longestWordInput = document.querySelector('.longest-word-input')
const longestWordSubmitBtn = document.querySelector('.title-case-btn')
const longestWordOutput = document.querySelector('.longest-word-output')

// LOGIC FOR THE LONGEST WORD FUNCTION
function printLongestWord(){
  
  // convert the user input to an array
  const splitStr = longestWordInput.value.split(' ')

  // sort the array and return the word with highest length
  const longestStr = splitStr.sort((a,b) =>  b.length - a.length)[0]

  longestWordOutput.innerHTML = 'Longest Word: ' + longestStr
}

function clearLongestWord(){
  longestWordOutput.innerHTML = ''
  printLongestWord();
}

longestWordSubmitBtn.addEventListener('click', clearLongestWord, false)
document.addEventListener('keypress', function (e) {
  if(e.key === 'Enter'){
    printLongestWord()
  }
})