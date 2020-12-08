function checkyears(year){
 const age = 2020 - year
 if(age<18 ){
    console.log(' minor');
}else if(age >= 18 && age< 36){
    console.log(' youth');
}else{
 console.log ('elder');
}}
checkyears(2015);//minor
checkyears( 1987 );//youth
checkyears(1980);//elder