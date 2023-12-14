function linearsearch (arr,n) {
    for(i=0;i<arr.length;i++){
        if(arr[i]==n){
            return i
        }
       
    }
    return-1
}
console.log(linearsearch([2,4,5,6,7,8,9],5));