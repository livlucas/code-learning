#include <stdio.h>

int main() {

	int grade1, grade2, grade3; {

		grade1 =0;
		grade2 =0;
		grade3 =0;
			

		printf("==GRADE AVERAGE PROGRAM==\n");
		printf("This program will appoint a final grade!\n");
		printf("This is based on 100 possible points.\n");

		printf("Enter 3 grades separated by space:\n");
		scanf("%i %i %i", &grade1, &grade2, &grade3);

	int final = (grade1+grade2+grade3)/3; 

		if (final >=90) {

			printf("Your final grade is A!\n");
			printf("Your final grade is %i", final);

  		}
	
	 	else if ((final >= 70) && (final < 90)) 

	 	{

	 		printf("Your final grade is B!\n");
	 		printf("Your final grade is %i", final);

	 	} else if ((final >=50) && (final < 70)) 

	 	{

	 		printf("Your final grade is C!\n");
	 		printf("Your final grade is %i", final);

	 	} else if (final < 50) {

	 		printf("Your final grade is F!\n");
	 		printf("Your final grade is %i", final);
	 	
	 	} else {

	 		printf ("Invalid number\n");
	 	}

	}
}