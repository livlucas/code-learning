#! /usr/bin/python
# -*- coding: utf-8 -*-

def fact(n):
	fact = 1
 
	while n > 0:
		fact = fact * n
		n -= 1
	return (fact)

 
print fact(10)