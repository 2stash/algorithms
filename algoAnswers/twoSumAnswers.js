function twoNumberSumLoop(array, targetSum) {
  // Write your code here.
  let answerArray = [];

  for (let i = 0; i < array.length ; i++){
    for(let j= i +1; j < array.length; j++ ){
      if(array[i] + array[j] === targetSum){
        answerArray.push(array[i], array[j])
        return answerArray
      }
    }
  }
  return []
}

function twoNumberSumSort(array, targetSum) {
  // Write your code here.
  let left = 0;
  let right = array.length-1;
  let answerArray = []
  array.sort(function(a,b) {return a-b})
  while(left < right){
  if(array[left] + array[right]===targetSum){
    answerArray.push(array[left], array[right])
    return answerArray
  } 
  else if(array[left] + array[right] < targetSum){
    left++;
  }
  else {
    right--;
  }
}
  return []
}



function twoNumberSumHash(array, targetSum) {
  // Write your code here.
  // make a has table
  // delta variable of current i subtracted from target sum
  // 
  hashTable = {}
  let val = 0;
  let delta = 0;
  let deltaIdx;
  let answerArray = [];

  for (let i = 0; i < array.length;i++){
  val = array[i];
  delta = targetSum - val;
  deltaIdx = hashTable[delta]
  console.log(val, delta)

    if(deltaIdx !== undefined){
      answerArray.push(val, delta)
      return answerArray
    }

    hashTable[val] = i;
    
    console.log(hashTable)
  }
  return []
}

let arrayCheck =[3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;


console.log(twoNumberSumHash(arrayCheck,targetSum))