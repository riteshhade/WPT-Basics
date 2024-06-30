//Fibonacci series:-
function fibonacci(n) {
  let a=0,b=1,temp;
  while(n>0)
  {
    temp=a+b;
    a=b;
    b=temp;
    n--;
    console.log(a);
  }
  return a;
}
console.log( "fibonacci(10): "+fibonacci(10));
console.log("===========================");

//Square of a number:-
function square(num) {
  return num * num;
}
console.log(square(5));
console.log("===========================");

//Prime number:-
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));
console.log("===========================");

//table of a number
function table(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
table(5);
console.log("===========================");


//palindrome number
function isPalindrome(num) {
  const str = num.toString();
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(121));
