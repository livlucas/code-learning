#include <stdio.h>

int main(void) {

float grade1, grade2, grade3, med_grade, final_test, final_grade;


    { 
        printf("Insert first grade:");
        scanf("%f", & grade1);
     
        printf("Insert second grade:");
        scanf("%f", & grade2);
        
        printf("Insert third grade:");
        scanf("%f", & grade3);
        
        med_grade = (grade1 + grade2 + grade3)/3;
        printf("The median of this student is: %.2f\n", med_grade);
      
        
    }
    
            if (med_grade >= 7)
            
            {
            
                printf("Student passed this class.");
               
            }
                
            else
           
            
            {
            
            printf("Student did not pass class and needs to take a final test.\n");
            printf("Print final test grade here:");
            scanf("%f", & final_test);
            
            final_grade = (final_test + med_grade)/2;
            printf("Final grade is %f\n", final_grade);
            
            if (final_grade >= 5)
            {
            printf("Student passed.\n");
            }
            
            else
            
            {
            printf("Student failed.\n");
            }
            
}            
            
           
             
          
            
             
            
              
                
                 
              
               
            
    
    
    
    
}
    
