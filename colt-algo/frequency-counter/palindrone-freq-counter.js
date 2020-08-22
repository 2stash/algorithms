
function anagramNaive(arr1, arr2) {
  let counterArr1 = arr1.split('').reverse().join('');
  for(let i = 0; i < arr1.length;i++){
    if(counterArr1[i] !== arr2[i]){
      console.log(counterArr1[i])
      console.log(arr2[i])
      return false
    } else {
      console.log(counterArr1[i])
      console.log(arr2[i])
    }
  }
  
  return true
}

function frequencyCounter(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  } 
  let counterArr1 = {};
  let counterArr2 = {};
  let count;
  for(let i=0;i< arr1.length; i++){
    counterArr1[i]=arr1[i];
  }
  for(let i=arr2.length-1;i >= 0;i-- ){
    count = arr2.length-1 -i;
    counterArr2[count]=arr2[i];
  }

  for(let key in counterArr1){
    if(counterArr1[key] !== counterArr2[key]){
      console.log(counterArr1[key])
      console.log(counterArr2[key])
      console.log(key)
      return false;
    }
    
  }

  console.log(counterArr1)
  console.log(counterArr2)
  return true;
}



const arr1 = "aaajfieifjaaa"
const arr2 = "aaaxxerrrraaa"

console.log(frequencyCounter(arr1,arr2))