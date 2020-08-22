function getNthFib(n) {
  // Write your code here.
	let lastTwo = [0,1]
	let counter = 3;
	let nextFib = 0;
	while(counter <= n){
    console.log(lastTwo[0], lastTwo[1])
		nextFib = lastTwo[0] + lastTwo[1];
		lastTwo[0] = lastTwo[1];
		lastTwo[1] = nextFib;
		counter++;
	
	}
  return n > 1 ? lastTwo[1] : lastTwo[0]
}

console.log(getNthFib(2))