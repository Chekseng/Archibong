// JAVASCRIPT SHEET FOR THE MERGE SORT ALGORITHM CHALLENGE

const maxLimit = document.querySelector('.merge-max-limit')
const maxRange = document.querySelector('.merge-max-range')
const generateNumbersBtn = document.querySelector('.merge-generate-number-button')
const sortNumberBtn = document.querySelector('.merge-sort-number-button')
const displayGeneratedNumbers = document.querySelector('.merge-generated-numbers')
const displaySortedNumbers = document.querySelector('.merge-sorted-result')

function randomArray(length,max){
  return [... Array(length)].map(() => Math.round(Math.random() * max))
}

// function generalMergeSort(){

//   let maxLimitNumb = parseInt(maxLimit.value, 10);
//   let maxRangeNumb = parseInt(maxRange.value, 10);
//   let getRandom = randomArray(maxLimitNumb, maxRangeNumb);
  
//   function merge(left, right) {
//     let arr = []
//     // Break out of loop if any one of the array gets empty
//     while (left.length && right.length) {
//         // Pick the smaller among the smallest element of left and right sub arrays 
//         if (left[0] < right[0]) {
//             arr.push(left.shift())  
//         } else {
//             arr.push(right.shift()) 
//         }
//     }
    
//     // Concatenating the leftover elements
//     // (in case we didn't go through the entire left or right array)
//     const finalMerge = [ ...arr, ...left, ...right ]
    
//     displaySortedNumbers.innerHTML = `<p class="sorted-numbers-result">${finalMerge}</p>`;
//   }


//   function mergeSort() {
//     const newArr = [...getRandom];
//     const half = newArr.length / 2
    
//     // Base case or terminating case
//     if(newArr.length < 2){
//       return newArr 
//     }
    
//     const left = newArr.splice(0, half)
//     return merge(mergeSort(left),mergeSort(newArr))
//   }

//   sortNumberBtn.addEventListener('click', mergeSort, false)



//     sortNumberBtn.classList.add('show-challenge-button')

//     displayGeneratedNumbers.innerHTML = `<p class="generated-numbers-final">${getRandom}</p> ` ;
//     sortNumberBtn.addEventListener('click', merge, false)
// }

generateNumbersBtn.addEventListener('click', generalMergeSort, false)