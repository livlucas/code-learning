#! /usr/bin/python
# -*- coding: utf-8 -*-

# def prime(n):

# 	i = 2

# 	while i < n:
# 		if n % i == 0:
# 			return False

# 		i += 1

# 	return True


# #test

# print prime(4), prime(131), prime(13), prime(1023)



#flags
def prime_print(n):
	i = 2

	#flag de verificacao
	is_prime = True

	while i < n:
		if n % i == 0:
			is_prime = False

		i += 1

	if is_prime:
		print n, "primo"
	else:
		print n, "nao primo"



#test
prime_print(4), prime_print(131), prime_print(13), prime_print(1023)

print '======='

# break example

def prime_print2(n):
	i = 2

	while i < n:
		if n % i == 0:
			print n, "nao primo"
			break

		i += 1

	if i == n:
		print n, "primo"


#test
prime_print2(4), prime_print2(131), prime_print2(13), prime_print2(1023)