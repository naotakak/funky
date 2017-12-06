/***
 Naotaka Kinoshita and Brian Leung
 SoftDev1 Pd7
 K15 - Sequential Progression
 2017-12-07
 ***/

var students = ["Brian", "Naotaka", "Bayan", "Khyber", "Ibnul", "Anish", "Terry"];

var randomStudent = function() {
  var rand = Math.floor(Math.random() * (students.length - 1));
  return students[rand];
}

var fibonacci = function(n) {
	if (n == 0) {
		return 0;
	}
	if ((n == 1)||(n == 2)) {
		return 1;
	}
	else {
		return (fibonacci(n - 1) + fibonacci(n - 2));
	}
}

var gcd = function(a,b) {
	if ((b % a) == 0) {
		return a;
	}
	if ((a % b) == 0) {
		return b;
	}
	if (a > b) {
		return gcd(a - b,b);
	}
	return gcd(a,b - a);
}

console.log("fibonacci(0): " + fibonacci(0));
console.log("fibonacci(1): " + fibonacci(1));
console.log("fibonacci(2): " + fibonacci(2));
console.log("fibonacci(3): " + fibonacci(3));

console.log("gcd(30,30): " + gcd(30,30));
console.log("gcd(1,4): " + gcd(1,4));
console.log("gcd(0,1): " + gcd(0,1));
console.log("gcd(10,15): " + gcd(10,15));

console.log("randomStudent(): " + randomStudent());
console.log("randomStudent(): " + randomStudent());
console.log("randomStudent(): " + randomStudent());
