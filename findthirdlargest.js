function largest(arr){
    let firstval=-Infinity;
    let second=-Infinity;
    let third=-Infinity;
    for(i=0;i<arr.length;i++){
        if(arr[i]>firstval){
            third=second
            second=firstval
            firstval=arr[i]
        }else if(arr[i]>second){
            third=second
            second=arr[i]

    }else{
        third=arr[i]
    }
}
return third
}
console.log(largest([3,4,5,6,7]))