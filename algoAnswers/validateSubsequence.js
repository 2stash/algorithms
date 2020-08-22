function isValidSubsequence(array, sequence) {
  // Write your code here.
  arrIdx = 0;
  seqIdx = 0;



  while(seqIdx < sequence.length && arrIdx < array.length){
    //  console.log(seqIdx , arrIdx)
    if(sequence[seqIdx] === array[arrIdx]) seqIdx++;
    arrIdx++;

  }
  console.log(seqIdx , sequence.length)
	if(seqIdx === sequence.length){
    return true;
  } else {
    return false
  }
}


const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence =  [1, 6, -1, 10];

console.log(isValidSubsequence(array,sequence));