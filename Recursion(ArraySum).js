// function sum(arr,start=0){
//     if(start===arr.length){
// return 0;
//     }
//     return arr[start]+sum(arr,(start+1))
// }
// console.log(sum([2,3]))

function sum(arr){
    if(arr.length===0){
        return 0;
    }
    return arr[0]+sum(arr.slice(1))
}
console.log(sum([1,2,3,4,5,6]))
