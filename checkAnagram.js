function checkAnagram(str1,str2){
    let lookup={};
    if(str1.length!==str2.length){
        return false;
    }
    for(let i=0;i<str1.length;i++){
        let char=str1[i];
     lookup[char]=(lookup[char] || 0)+1;

 // lookup[char]?lookup[char]++:lookup[char]=1;
    }
  
    for(let i=0;i<str2.length;i++){
        let char=str2[i];
        if(!lookup[char]){
            return false;
        }else{
        lookup[char]= lookup[char]-1;
        }
    }
    return true;
}
console.log(checkAnagram('anagram','nagwram'))