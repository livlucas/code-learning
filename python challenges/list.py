#! /usr/bin/python
# -*- coding: utf-8 -*-

# def count_in_list(n)

# 	numbList = []

# 	i = 0

# 	while i < n:
# 		i += 1 
# 		numbList = i
# 	return numbList

# print count_in_list(5)

# print list of numbers in a list 
# def numList(n):

# 	x = []
# 	i = 0

# 	while i <= n:
# 		x.append(i)
# 		i += 1
# 	print x

# print numList(10)


# # print all even numbers without incrementing the i += 2 
# def numList(n):

# 	x = []
# 	i = 2

# 	while i <= n:
# 		if i % 2 == 0:
# 			x.append(i)
# 			print x
# 		i += 1
			

# print numList(10)


#Print n first even numbers. 
def numList(n):

	x = []
	i = 0
	count = 0


	while count < n:
		if i % 2 == 0:
			count += 1
			x.append(i)	
		i += 1

	return x
			

print numList(10)
