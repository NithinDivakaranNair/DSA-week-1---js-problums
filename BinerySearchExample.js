function binerysearch(arr,n){
let start=0;
let end=arr.length-1
let middle=Math.floor((start+end)/2)
while((n!==arr[middle])&&start<=end){

    if(n<arr[middle]){
       end=middle-1;
    }else{
        start=middle+1;
    }
    middle=Math.floor((start+end)/2)
}
return arr[middle]=n?middle:-1

}
console.log(binerysearch([3,6,7,23,56,66,78,88,100],23));