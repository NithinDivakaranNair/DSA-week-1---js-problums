function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    }
  
    let first = 0;
    let second = 1;
  
 for(let i=1;i<n;i++)
 {
   var result=first+second
    first=second;
second=result;
 }
  
    return result;
  }
console.log(fibonacci(9));