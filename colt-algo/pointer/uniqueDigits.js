

function uniqueValues(arr){
    console.log(arr)
    let mainPointer = 0;
    let rabbitPointer = 1;
    let counter = 1;
    let rounds = 0;
    while(rabbitPointer < arr.length){
        if(arr[mainPointer] === arr[rabbitPointer]){
            // console.log(arr[mainPointer])
            rabbitPointer ++;
            
        } else {
            mainPointer = rabbitPointer;
            rabbitPointer ++;
             
            counter ++;
        }
        
        // console.log(`rounds is equal to ${rounds}`)
        // console.log(`counter is equal to ${counter}`)
        // console.log(`mainPointer is equal to ${mainPointer}`)
        // console.log(`rabbitPointer is equal to ${rabbitPointer}`)
        // console.log(arr)
        // console.log('---------------------------------------------------')

    }
    return counter;
}

const arr = [-3,2,5,6,4,1,1,3,9]
arr.sort();


function uniqueValues2(arr){
    let mainPointer = 0;
    let rabbitPointer = 1;

    if(arr.length===0){
        return 0
    }
    while(rabbitPointer < arr.length){
        if(arr[rabbitPointer] !== arr[mainPointer]){
            mainPointer ++;
            arr[mainPointer] = arr[rabbitPointer]
        } else {
            rabbitPointer++;
        }
    }
    
    return mainPointer
}
console.log(uniqueValues2(arr))