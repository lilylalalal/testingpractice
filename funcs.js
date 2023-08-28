function isFive(num) {
  // Your code here
  if(num === 5)
  {return true}
  else{
    return false
  }
}

function isOdd(number) {
  // Your code here
if (typeof number != "number"){
  throw Error("please input numbers. ")}
  else{

  if (number % 2 ==0){
return false
  }else{return true}
}
}

function myRange(min, max, step = 1) {
  // Your code here
  let list = []
  for (i=min; i<= max; i+= step ) {
    list.push(i)

  }return list


}


module.exports = { isFive, isOdd, myRange };

