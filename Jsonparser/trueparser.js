function trueParser(input){
   if (!input.startsWith("true")){
    return null;
   }  
   const remaining = input.slice(4)
   return [true,remaining];
}

console.log(trueParser("string@@@%%*"))
