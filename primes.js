const Primes = {
	isPrime(n) {
		for (x = 2; x <= n; x++) {
			if (n % x == 0) {
				return false;
			}
			return true;
		}
	},

	filterPrimes(arr) {

		if (arr < 0) {
			return 0
		}

		return arr.filter(el => isPrime(el));

	},

	primeNumbers(num) {
		if (num < 0) {
			return 0
		} else {
			const array = [...Array(num).fill(0).map((el, i) => i)]

			const isPrime = n => {
				for (let i = 2; i < n; i++) {
					if (n % i === 0) {
						return false
					}
				}
				return n > 1

			}

			return array.filter(el => isPrime(el)).length;
		}
	}
}