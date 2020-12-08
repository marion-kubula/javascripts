
function fizzBuzz(str1 ,str2){
 let total =str1.length + str2.length;
 console.log(total);
 if(total % 3 ===0 && total %5 !==0){
    console.log('FIZZ');
}
else if(total % 5 ===0 && total %3 !==0){
   console.log('Buzz');
}else{
  console.log ('fizzBuzz');
}
}
fizzBuzz('ab' ,'c')
fizzBuzz('abc' ,'de')
fizzBuzz('marioner', 'mariams');


