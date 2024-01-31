//2 Do the below programs in arrow functions.
//a.Print odd number in an array
var odn = [];
var zoom = (angle)=>{
    for(var i=0; i<angle.length; i++){
        if(angle[i]%2 != 0){
            odn.push(angle[i])
        }

    }
    return odn;
}
console.log(zoom([21,22,33,44,55,66,77]))

//b. convert all the strings to title caps in a string array
var writer = (str)=>{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log(writer("i am your brain"));

// c. sum of all numbers in an array
var sum = 0;
var add = (arr)=>{
    for(var i=0; i<arr.length; i++){
        sum = sum+arr[i]
    }
    return sum
}
console.log(add([7,8,6]));

//d. Return all the prime numbers in an array
var checkPrime = (num)=>{
    for (var i = 2; i <= num; i++){
      if(num % i === 0)return false
            
      }
      return true;
   }
 console.log(checkPrime([14,15,16,17]));

//e.Return all the palindromes in an array
var st1 = "madein";
var st2 = "aaabbb";
var findPlindromes = (user)=>{
    if(user === user.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
}
console.log(findPlindromes(st1))
console.log(findPlindromes(st2))