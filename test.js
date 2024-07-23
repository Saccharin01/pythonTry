const arrowFunc = (a,b,c) => {
  let result
  if(a+b === c || a+b>c){
  result = a+b}
    else{
    result = a+c || c
    }
  return result
}


console.log(arrowFunc(7,4,1))