# This function returns a list of prime numbers up to a given limit.
def get_primes(limit):
    primes = []
    for num in range(2, limit + 1):
        if all(num % i != 0 for i in range(2, num)):
            primes.append(num)
    return primes

print(get_primes(100))