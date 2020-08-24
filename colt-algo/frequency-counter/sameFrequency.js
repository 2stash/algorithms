function sameFrequency(num1,num2){
  let number1 = num1.toString();
  let number2 = num2.toString();
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  console.log(number1)
  console.log(number2)
 for(let val of number1){
  frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
 }

 for (let val of number2){
   frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
 }
 for(let key in frequencyCounter1){
   if(frequencyCounter2[key] !==frequencyCounter1[key]){
     return false
   }
 }
 console.log(frequencyCounter1, frequencyCounter2)
return true

}


const num11 = 12345321;
const num22 = 54321123;

console.log(sameFrequency(num11,num22))