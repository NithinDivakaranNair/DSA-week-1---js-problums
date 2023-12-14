
//O(n2) timecomplexity

// function same(arr1,arr2){
//     if(arr1.length!=arr2.length){
//         return false;
//     }
//     for(i=0;i<arr1.length;i++){
//         let correctIndex=arr2.indexOf(arr1[i]**2)
//         console.log(correctIndex);
//         if(correctIndex==-1){
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }
// console.log(same([1,2,3,4],[4,1,7,9]))


//O(n) timecomplexity
function same(arr1,arr2){
    if(arr1.length!=arr2.length){
        return false;
    }
    let frequencyCounter1={};
    let frequencyCounter2={};
    for(let val of arr1){
        frequencyCounter1[val]=(frequencyCounter1[val]||0)+1;
    }
    for(let val of arr2){
        frequencyCounter2[val]=(frequencyCounter2[val]||0)+1;
    }
    for(let key in frequencyCounter1){
if(!(key**2 in frequencyCounter2 )){
    return false;
}
if(frequencyCounter2[key]!=frequencyCounter1[key**2]){
    return false
}
    
} 
    return true;
}
console.log(same([1,2,3],[1,4,9]));