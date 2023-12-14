function remove(arr){
    let ass=[]

    for(i=0;i<arr.length;i++){
        let valid = true;
for(j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]){
        valid=false
        break
    }
}
if(valid==true){
    ass.push(arr[i])
}}
console.log(ass);
for(let i=0;i<ass.length-1;i++){
    for(let j=0;j<ass.length-1-i;j++){
        if(ass[j]>ass[j+1]){
          let  temp=ass[j]
            ass[j]=ass[j+1]
            ass[j+1]=temp
        }
    }
}

    

    return ass
}
console.log(remove([2,34,4,2,5,5,6,8]));