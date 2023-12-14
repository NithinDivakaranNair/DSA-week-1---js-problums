// function lettercount(count){
//     let result={};
//     for(let i=0;i<count.length;i++){
//         var char=count[i].toLowerCase();
        
//       if(result[char]>0){
//             result[char]++;

//            }else{
//             result[char]=1;
          
//           }
//     }
//     return result;
// }
// console.log(lettercount(' hello world HELLO'))



function charcount(str){
    let obj={};

    for(var char of str){
        if(isAlphanimeric(char)){
            char=char.toLowerCase();
            obj[char]=++obj[char]||1;
        }
    }
    return obj;
}
console.log(charcount('hello world'));

function isAlphanimeric(char){
    let code=char.charCodeAt(0);
    if(!(code>47&&code<58)&&!(code>64&&code<91)&&!(code>96&&code<123)){
        return false;


    }
        
      return true;
}
