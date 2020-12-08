  function takearray(array){
    const element = array;
    let arrayEven=[]
    let arrayOdd=[] 
    let arrayChars=[]
    var i=0;
    for (let i = 0; i < array.length; i++) { 
  const element = array[i];
  console.log(element);
      }
      if(typeof element ==='string'){
      arrayChars.push(array[i]);
      console.log(arrayChars);
      }
    else if(element%2===0){
      arrayEven.push(array[i]);
      console.log(even);
    }
    else if(element %2!==0){
      arrayOdd.push(array[i]);
      console.log(arrayOdd);
}
let object ={
  arrayEven:even=[],
  arrayOdd:odd=[],
  arrayChars:chars=[]
}
console.log(object);

}


  
console.log(takearray([1,2,3,4,5, 'a', 'b']))