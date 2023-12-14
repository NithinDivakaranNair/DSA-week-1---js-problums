function add(n){
    return n*(n+1)/2
}
let t1=performance.now();
add(1000)
let t2=performance.now();
console.log(`time taken for compplete:${(t2-t1)/1000} seconds` )