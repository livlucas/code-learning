#! /usr/bin/python
# -*- coding: utf-8 -*-

def prime(n):
	i = 2

	while i < n:
		if n % i == 0:
			return False

		i += 1

	return True

#test
# print prime(4), prime(131), prime(13), prime(1023)

def primes(n):
	x = []
	i = 2
	count = 0


	while count < n:
		if prime(i):
			count += 1
			x.append(i)
		i += 1

	return x	

#test
# print primes(10)			

def primes_to_file(n, path):
	list = primes(n)
	file = open(path, 'w+')
	
	i = 0
	while i < len(list):
		line = str(list[i]) + '\n'
		file.write(line)
		i += 1

	file.close()

#test
#primes_to_file(10, './prime_result.txt')

def primes_search(path, n):
	file = open(path, 'r')

	i = 0
	for line in file:
		i += 1
		if i == n:
			file.close()
			return True

	file.close()
	return False

print primes_search('./prime_result.txt', 10)

