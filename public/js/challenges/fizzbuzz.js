const inputField = document.querySelector('.inputtedText')
const submitBtn = document.querySelector('.submitText')
const clearBtn = document.querySelector('.clearText')
const outputText = document.querySelector('.ouput')
const errorOne = document.querySelector('.error-one')
const errorTwo = document.querySelector('.error-two')
const result = document.querySelector('.fizzbuzz-result')

// Logic for the fizzbuzz operation
function printFizzBuzz(){
  // get the value of the input field
  let newNumb = inputField.value;
  
  // convert the input field value to a number
  let convertedNumb = parseInt(newNumb, 10)

  // check if the input field is empty
  if(inputField.value.length = 0){
    errorOne.innerHTML = '<p class="error-ones">Enter A Number'
    setTimeout(() => {
      errorOne.innerHTML = ''
    },2000)

    // check if the input field value if between 0 and 100
  } else if ( convertedNumb <= 100){
    for(let i = 1; i <= convertedNumb; i++){
      if(i % 15 === 0){
        result.innerHTML += '<p class="fizz-first">FizzBuzz</p>'
      } else if ( i  % 5 === 0){
        result.innerHTML += '<p class="fizz-second">Buzz</p>'
      } else if ( i % 3 === 0){
        result.innerHTML += '<p class="fizz-third">Fizz</p>'
      } else {
        result.innerHTML += `<p class="fizz-fourth">${i}</p>`
      }
    }

    // check if input value is greater than 100
  } else if (convertedNumb > 100){
    errorTwo.innerHTML = '<p class="error-below">Value must be 100 and below</p>'
    setTimeout(() => {
      errorTwo.innerHTML = ''
    }, 2000)
    
    // check if the input field value is not a number data type
  } else if (newNumb !== typeof number){
    errorTwo.innerHTML = '<p class="error-below">Enter A Number!!</p>'

    setTimeout(() => {
      errorTwo.innerHTML = ''
    },2000)
  }
}

// Function to prevent new output being appended to already existing output
function clearFizzBuzz(){
  result.innerHTML = ''
  inputField.value = ''
}

// Function to clear all input 
function clearSubmit(){
  result.innerHTML = ''
  printFizzBuzz()
}

// Click EventListener for the submit button
submitBtn.addEventListener('click', clearSubmit, false)

// Click EventListener for the clear button
clearBtn.addEventListener('click', clearFizzBuzz, false)

// bind the submit button to the enter key
document.addEventListener('keypress', function (e) {
  if(e.key === 'Enter'){
    clearSubmit();
  }
})