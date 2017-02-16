#include <stdio.h>

int main() {

	int x;
	int y;
	int z;
	int biggest;

		printf("Please, type 3 integers separated by spaces:\n");
		scanf("%i %i %i", & x, &y, &z);

	if ((x>y) && (x>z)) {

		biggest = x;
		printf("%i is the biggest!\n", x);
	
	} else if ((y>x) && (y>z)) {

		biggest = y;
		printf("%i is the biggest!\n", y);
	
	} else {

		biggest = z;
		printf("%i is the biggest!\n", z);
	
	}

}