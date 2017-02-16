#include <stdio.h>

int main() {
	int highest, current;

	highest = 0;
	current = 0;

	printf("== HIGHEST ==\n");
	printf("This program will receive numbers as inputs and will output the hightest one before exit.\n");
	printf("To exit the program, type \"-1\".\n");

	do {
		printf("Type a number: ");
		scanf("%d", &current);

		if (current > highest) {
			highest = current;
		}
	} while (current >= 0);

	printf("\nThe highest number was: %d\n", highest);

	return 0;
}