
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

//function to generate a random number every time the program runs
//NOTE: don't try to understand that for now, it's just a code to make the
//program fun
int generate_random_num() {
	srand((unsigned)time(NULL));
	return rand() % 10000;
}

int main (void) {
	//generating and storing the secret
	int secret = generate_random_num();
	int guess;

	//do is marking the line where you want to go back to loop again
	do {
		printf("Type out your integer guess: ");
		scanf("%i", & guess);

		if (guess == secret) {

			printf("You won!\n");

		} else if (guess < secret) {

			printf("guess is lower than secret number.\n");

		} else {

			printf("guess is higher than secret number.\n");

		}
	} while (guess != secret);  //here you're implicit telling to go back to "do" if 
								//the condition is satisfied, else the program leaves the loop
}


