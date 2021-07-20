// JAVASCRIPT SHEET FOR THE MERGE SORT ALGORITHM CHALLENGE

const maxLimit = document.querySelector('.quick-max-limit')
const maxRange = document.querySelector('.quick-max-range')
const generateNumbersBtn = document.querySelector('.quick-generate-number-button')
const sortNumberBtn = document.querySelector('.quick-sort-number-button')
const displayGeneratedNumbers = document.querySelector('.quick-generated-numbers')
const displaySortedNumbers = document.querySelector('.quick-sorted-result')

function randomArray(length,max){
  return [... Array(length)].map(() => Math.round(Math.random() * max))
}

function generateQuickSort(){
  let maxLimitNumb = parseInt(maxLimit.value, 10);
  let maxRangeNumb = parseInt(maxRange.value, 10);
  let getRandom = randomArray(maxLimitNumb, maxRangeNumb);

  if(maxLimitNumb <= 10 && maxRangeNumb <= 999){
    sortNumberBtn.classList.add('show-challenge-button')

    const quickSort = () => {
      let newArr = [...getRandom]
      if(newArr.length === 1){
        return newArr
      }

      const pivot = newArr[newArr.length - 1]
      let leftArr = []
      let rightArr = []

      for(let i = 0; i < newArr.length - 1; i++){
        if(newArr[i] < pivot){
          leftArr.push(newArr[i])
        } else {
          rightArr.push(newArr[i])
        }
      }

      if(leftArr.length > 0 && rightArr.length > 0){
        newArr = [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
        displaySortedNumbers.innerHTML = `<p class="sorted-numbers-result">${newArr}</p>`;
      } else if (leftArr.length > 0){
        newArr = [...quickSort(leftArr), pivot]
        displaySortedNumbers.innerHTML = `<p class="sorted-numbers-result">${newArr}</p>`;
      } else {
        newArr = [pivot, ...quickSort(rightArr)]
        displaySortedNumbers.innerHTML = `<p class="sorted-numbers-result">${newArr}</p>`;
      }

    }

    sortNumberBtn.addEventListener('click', quickSort, false)
  }

  displayGeneratedNumbers.innerHTML = `<p class="generated-numbers-final">${getRandom}</p> ` ;
}

generateNumbersBtn.addEventListener('click', generateQuickSort, false)
