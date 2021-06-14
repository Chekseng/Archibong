// JAVASCRIPT DOCUMENT FOR THE PALINDROME CHALLENGE TEMPLATE

const palindromeInput = document.querySelector('.palindrome-input')
const palindromeSubmitBtn = document.querySelector('.palindrome-submit-btn')
const palindromeOutput = document.querySelector('.palindrome-output')

// FUNCTION WITH THE PALINDROME LOGIC
function printPalindrome(){

  // grab the input of the user
  let setStr = palindromeInput.value;

  // create a regular expression to handle spaces and non alphanumeric characters
  let reg = /[\W_]/g;

  // apply the regular expression to the grabbed input and covert it to lowercase
  let newStr = setStr.toLowerCase().replace(reg, '')

  // reversed the new String
  let reversedStr = newStr.split('').reverse().join('')

  // conditional statement to check if new string is equal to reversed string
  if(reversedStr === newStr){
    palindromeOutput.innerHTML = "<p class='palindrome-success'>The Above String Is A Palindrome</p>"
  } else {
    palindromeOutput.innerHTML = "<p class='palindrome-error'>The Above String Is Not A Palindrome</p>"
  }

}

// function to prevent appending already existing output
function clearPalindromeSubmit(){
  printPalindrome();
}

palindromeSubmitBtn.addEventListener('click', clearPalindromeSubmit, false)

// bind the submit button to the enter key
document.addEventListener('keypress', function (e) {
  if(e.key === 'Enter'){
    printPalindrome();
  }
})