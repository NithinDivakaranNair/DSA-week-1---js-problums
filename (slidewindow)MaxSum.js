
//time complexity O(n2)

// function maxsum(arr,count){
//     if(count>arr.length){
//         return null;
//     }
//     var max=-Infinity;
//     for(var i=0;i<arr.length-count+1;i++ ){
//         temp=0;
//         for(var j=0;j<count;j++){
//             temp+=arr[i+j]
//         }
//         if(temp>max){
//             console.log(temp,max)
//             max=temp;
//         }
//     }
//     return max;
// }
// console.log(maxsum([1,2,3,4],2))


// time complexcity O(n)
function maxsum(arr,count){
    let maxsum=0;
    let tempsum=0;
    if(count>arr.length){
        return null;
    }
    for(i=0;i<count;i++){
        maxsum+=arr[i]
    }
    tempsum=maxsum;
    for(i=count;i<arr.length;i++){
        tempsum=tempsum-arr[i-count]+arr[i]
        maxsum=Math.max(tempsum,maxsum)
    }
    return maxsum;
}
console.log(maxsum([1,2,3,4,8],2))