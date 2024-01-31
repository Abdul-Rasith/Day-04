// 1. do the below programs in anonymous function and IIFE
// a. Print odd number in an array
// Anonymous 
var od = [];
var zoo = function foo(ar){
    for(var i=0; i<ar.length; i++){
        if(ar[i]%2 != 0){
            od.push(ar[i])
        }

    }
    return od;
}
console.log(zoo([1,2,3,4,5,6,7]))
// IIFE:
var od = [];
(function foo(ar){
    for(var i=0; i<ar.length; i++){
        if(ar[i]%2 != 0){
           console.log(od.push(ar[i]))
        }
    }
    })(1,2,3,4,5,6,7)

//b.convert all the strings to title caps in a string array
var letter = function(str){
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log(letter("i am your friend"))

// IIFE
  var result = (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
})("MUDRA IS MY AREA");

console.log(result);

// c. sum of all numbers in an array
var sum = 0;
var add = function(arr){
    for(var i=0; i<arr.length; i++){
        sum = sum+arr[i]
    }
    return sum
}
console.log(add([1,2,5]));
// IIFE (C)
var sum = 0;
var res = (function(arr){
    for(var i=0; i<arr.length; i++){
        sum = sum+arr[i]
    }
    return sum
})([1,2,9])
console.log(res);



//d. Return all the prime numbers in an array
var checkPrime = function (num){
    for (let i = 2; i <= num; i++){
      if(num % i === 0)return false
            
      }
      return true;
   }
 console.log(checkPrime([12,13,14,15,16]));
// IIFE(D)
var checkPrime = (function(num){
    for (let i = 2; i <= num; i++){
      if(num % i === 0)return false
            
      }
      return true;
   })([18,13,14,15,16])
 console.log(checkPrime)


 //e. Return all the palindromes in an array
var str1 = "madam";
var str2 = "aaabbb";
var findPlindromes = function (user){
    if(user === user.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
}
console.log(findPlindromes(str1))
console.log(findPlindromes(str2))
//IIFE(E)
var str1 = "madam";
var str2 = "aaabbb";
var findPlindromes = (function (user){
    if(user === user.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
})(str2)
console.log(findPlindromes)

////
// f. Retrun median of two sorted arrays of the same size.
var getMedian = function (ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;

    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2){
   console.log("Median is "+ getMedian(ar1, ar2, n1));
}
else{
    console.log("Doesn't work for arrays of unequal size");
}
//
//g. Remove duplicate from an array
var getUnique = function (arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
let eve = [1,1,2,3,2,3];
getUnique(eve)
//IIFE(G)
var getUnique = (function (arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
})
let sUm = [1,2,1,2,1,3];
getUnique(sUm)
// h.Rotate an array by k times
var nums = [1,2,3,4,5,6,7];
k =3
var ress = function(nums, k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
      console.log(ress)
    }
//IIFE(H)
var ress = (function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })