#include <iostream>
#include <string>
#include "deposite.h"
#include "withdraw.h"
using namespace std;


/*
int withdraw(int a, int balance){
    

    balance = balance + a;

    return balance;

}

int deposit(int b, int balance){

      balance = balance + b;

    return balance;

}
*/
int main() {

   int balance = 100;

   int amount = 0;

   int attemps = 0;

   deposite putmoneyin;

   withdraw takemoneyout;

   

   while( attemps == 0){

   cout << "Please enter an amount greater then 0 to add to your balance." << endl;
   cout << "You can also enter a negative amount to withdraw from your balance" << endl;
   cout << "If you are done using our services please type in done. " << endl;

   cin >> amount;

   if( amount > 0 )
   {
     balance = putmoneyin.depositmoney(amount,balance);

       cout << "You deposited " << amount << " dollars into your account. Your new balance is now " << balance << " dollars." << endl;
   }
   else if( amount < 0 ){

       int placeholder = balance;
       
       balance = takemoneyout.withdrawmoney(amount, balance);


        if(balance < 0 ){

            balance = placeholder;

            cout << "Your withdraw exceeded the amount. Your withdraw has been cancelled. Your balance is now " << balance << " dollars." << endl;
        }
        else
        {

        cout << "You withdrawed " << amount * -1 << " dollars from your account. Your new balance is now " << balance << " dollars." << endl; 

        }

   }
   else
   {
       attemps = 1;
       cout << "Thank you for using our services! Good Bye!";   
   }

};
   
return 0;
}