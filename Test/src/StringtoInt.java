import java.util.*; //import methods

public class StringtoInt {
	
	public static void main(String[] args) {
		
	Scanner Input = new Scanner(System.in); //gets user input
	
	System.out.println("please input an integer"); //ask user to input integer
	
	String stringInput = Input.nextLine(); //stores user input
	
	System.out.println(stringToIntegerMethod(stringInput)); //prints the result and calls the method
	

		
	}
	
	public static int stringToIntegerMethod(String str) { //method to convert string to integer
		
		int number = 0;
		
		for(int i = 0; i < str.length() ; i++) {  //iterates through each character of the string
			
			char checker = str.charAt(i); //stores the character 
			
			if(Character.isLetter(str.charAt(0))) { //if the first character is a letter the method will end and return the value 0
				
				break;
			}
			
			else if(Character.isDigit(checker)) { //if the character is a digit it will be added to the final result
				
				int othernumber = Character.getNumericValue(checker);
				
				number = number * 10 + othernumber;
			}
			
			
		}
		
		if((number > Integer.MAX_VALUE) || (number > Integer.MAX_VALUE && number % 10 == 8)) //checks if the value is larger then max value
		{
		    return 0;
		}
		else
		{
			return number;
		}
		
	}

}


