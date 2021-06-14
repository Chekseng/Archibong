// THE JAVASCRIPT SCRIPT FOR ANAGRAM CHALLENGE TEMPLATE

const anagramInputOne = document.querySelector('.anagram-input-one')
const anagramInputTwo = document.querySelector('.anagram-input-two')
const anagramSubmitBtn = document.querySelector('.anagram-submit')
const anagramOutput = document.querySelector('.anagram-output')

// LOGIC TO IMPLEMENT THE ANAGRAM FUNCTION
function printAnagram(){
  // the regular expression pattern to remove all alpha-numeric characters
  let reg = /[\W_]/g;

  // convert all patterns to strings
  let setStrOne = anagramInputOne.value.toString();
  let setStrTwo = anagramInputTwo.value.toString();

  // remove all non alpha-numeric character
  let newStrOne = setStrOne.toLowerCase().replace(reg, '')
  let newStrTwo = setStrTwo.toLowerCase().replace(reg, '')

  // sort the strings in alphabetical order
  let sortOne = newStrOne.split('').sort().toString();
  let sortTwo = newStrTwo.split('').sort().toString()

  // conditional statement to check if the strings match
  if(sortOne === sortTwo){
    anagramOutput.innerHTML = '<p class="anagram-output-one">The Above Strings Are Anagrams</p>'
  } else {
    anagramOutput.innerHTML = '<p class="anagram-output-two">The Above Strings Are Not Anagrams</p>'
  }
}

// Click eventlistener added to submit button
anagramSubmitBtn.addEventListener('click', printAnagram, false)

// keypress eventlistener added to enter button
document.addEventListener('keypress', function (e) {
  if(e.key === 'Enter'){
    printAnagram();
  }
})