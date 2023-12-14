//time complexcity=O(n2), space complexcit=O(1)

// function sumpair(arr) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===0){
//                 return[arr[i],arr[j]]
//             }
//         }
//     }
    
// }
// console.log(sumpair([-1,-3,0,3,2,1]))    


function sumpair(arr){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let sum = arr[left]+arr[right];
        if(sum===0){
            return [arr[left],arr[right]]
        }else if(sum>0){
            right--;
console.log('rrr',right);
        }else{
            left++;
            console.log('lll',left);
        }
    }

}
console.log(sumpair([-4,-3,-2,-1,0,1,4,2,3,10])) 