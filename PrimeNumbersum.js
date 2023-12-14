function add(arr1) {
    var sum=0
for(i=0;i<arr1.length;i++){
    let flage=0
    for(j=2;j<=Math.sqrt(arr1[i]);j++){
        if(arr1[i]%j==0){
flage=1
break
        }
    }
    if(flage==0){
        sum+=arr1[i]
    }
}

    return sum;
}

// Debugging statements
console.log(add([4, 6, 7, 2, 1, 1, 6]));
