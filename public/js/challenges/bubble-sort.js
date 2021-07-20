// JAVASCRIPT DOCUMENT FOR THE BUBBLE SORT ALGORITHM CHALLENGE

const maxLimit = document.querySelector('.bubble-max-limit')
const maxRange = document.querySelector('.bubble-max-range')
const generateNumbersBtn = document.querySelector('.bubble-generate-number-button')
const sortNumberBtn = document.querySelector('.bubble-sort-number-button')
const displayGeneratedNumbers = document.querySelector('.bubble-generated-numbers')
const displaySortedNumbers = document.querySelector('.bubble-sorted-result')


// function for generating random numbers
function randomArray(length,max){
  return [... Array(length)].map(() => Math.round(Math.random() * max))
}

function numberGenerator() {
  let maxLimitNumb = parseInt(maxLimit.value, 10);
  let maxRangeNumb = parseInt(maxRange.value, 10);
  let getRandom = randomArray(maxLimitNumb, maxRangeNumb);

  if(maxLimitNumb <= 10 && maxRangeNumb <= 999){
  
    sortNumberBtn.classList.add('show-challenge-button')

    sortNumberBtn.addEventListener('click', () => {
      let newArr = [...getRandom]
        for(let i = 0; i < newArr.length - 1; i++){
          for(let j = 0; j < newArr.length - 1 - i; j++){
            if(newArr[j] > newArr[j + 1]){
              [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]]
            }
          }
        }
        displaySortedNumbers.innerHTML = `<p class="sorted-numbers-result">${newArr}</p>`;
    }, false)
  
    displayGeneratedNumbers.innerHTML = `<p class="generated-numbers-final">${getRandom}</p> ` ;

    sortNumberBtn.classList.add('show-challenge-button')
  } else {
    displayGeneratedNumbers.innerHTML = `<p class="generated-numbers-final-failure">Enter array length less than 10</p> ` ;

    setTimeout(() => {
      displayGeneratedNumbers.innerHTML = ""
    }, 3000)
  }
}

generateNumbersBtn.addEventListener('click', numberGenerator, false)