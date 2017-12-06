var fibonacci = function(n)
{
	if (n==0)
	{
		return 0;
	}
	if ((n==1)||(n==2))
	{
		return 1;
	}
	else
	{
		return (fibonacci(n-1) + fibonacci(n-2));
	}
}

var gcd = function(a,b)
{
	if ((b % a)==0)
	{
		return a;
	}
	if ((a%b) == 0)
	{
		return b;
	}
	if (a>b)
	{
		return gcd(a-b,b);
	}
	return gcd(a,b-a);
}

console.log("Fib is: "+fibonacci(3));
console.log("GCD is: "+gcd(30,30));
