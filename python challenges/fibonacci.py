#! /usr/bin/python
# -*- coding: utf-8 -*-

#functions
def fib(i):
	prev = 0
	current = 1
	fib = 1
	
	if i < 2:
		return 1

	while i > 1:
		fib = prev + current
		prev = current
		current = fib		

		i -= 1
		#print fib, prev, current, i

	return fib	

#test area
print fib(1), fib(2), fib(3), fib(4), fib(5), fib(6), fib(7), fib(8)
