#! /usr/bin/python
# -*- coding: utf-8 -*-

def avg(p1, p2, p3, pf=0):
	avg_initial = ((p1 * 2) + (p2 * 2) + (p3 * 3)) / 7 

	print "avg_initial", avg_initial

	if avg_initial >= 50:
		print "Aprovado Direto"

	elif avg_initial < 20:
		print "Reprovado Direto"

	else:
		avg_final = (avg_initial + pf) / 2

		print "avg_final", avg_final

		if avg_final >= 50:
			print "Aprovado após final"
		else: 
			print "Reprovado após final" 


avg(50, 0, 0)

