#include <stdio.h>
#include <string.h>
int main(void)
{
    long CreditCardNumber;
    do{
        printf("Enter the CreditCardNumber: ");
        scanf("%ld",&CreditCardNumber);
    }
    while(CreditCardNumber<=0);
    long workingCC = CreditCardNumber;
    int sum=0;
    int count=0;
    long divisor =10;
    char result[11];
    //1st case
    while(workingCC>0){
        int lastDigit=workingCC %10;
        sum = sum + lastDigit;
        workingCC = workingCC / 100;
    }
    //2nd case 
    workingCC = CreditCardNumber / 10;
    while(workingCC > 0){
         int lastDigit=workingCC %10;
         int timeTwo = lastDigit * 2;
         sum = sum + (timeTwo % 10) + (timeTwo / 10);
         workingCC = workingCC /100;
         
    }
    
    //length of the number 
    workingCC = CreditCardNumber;
    while(workingCC !=0 ){
        workingCC = workingCC /10;
        count++;
    }
     //divisor 
    for (int i =0; i < count-2; i++){
        divisor = divisor * 10;
    }
    int firstDigit = CreditCardNumber / divisor;
    int firstTwoDigit = CreditCardNumber / (divisor / 10);
    
    //final checks
    if(sum %10 == 0){
        if(firstDigit == 4 && (count == 13 || count == 16)){
            strcpy(result, "VISA");
        }
        else if((firstTwoDigit == 34 || firstTwoDigit== 37) && count == 15){
            strcpy(result, "AMEX");
        }
        else if((50< firstTwoDigit && firstTwoDigit < 56) && count == 16){
            strcpy(result, "MASTERCARD");
        }
        else{
            strcpy(result, "invalid");
        }
    }
    else{
         strcpy(result, "invalid");
    }
    printf("%s\n", result);
}
