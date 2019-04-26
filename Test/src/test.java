import java.util.Scanner;
import java.util.ArrayList;

public class test {

	public static void main(String[] args) { //Main Class
	
		shouldreturnhelloworld(); //called method
		int[] integerarray = {1,2,3,4,5}; //Array
		ArrayList<Integer> Intarraylist = new ArrayList<Integer>();//ArrayList
		Intarraylist.add(3); //Adding values to the arraylist
	}
	
	public static void shouldreturnhelloworld() { //method with no return 
		Person marcus = new Person(); //declared object for "Person" class
		System.out.println(marcus.helloworld()); // Calls method in "Person" Class
		Scanner scanner = new Scanner(System.in);
		System.out.println("Type something");
		String output = scanner.nextLine();
		System.out.println(output);
		//side note - look up constructors, this, and assert
		//constructor - initializes an object and has no return statement. 
		//assert boolean express/ testing code to be true or false. useful
		String S1 = "sleep";
		int x  = 5/2; // results 2
		double x1 = 5/2; // results 2.0
		double x2 = 5.0/2; // result 2.5 or use parsing (double)5/2 = 2.5
		int x3 = 5%2; // result remainder 1 - 0.5 rounded to 1 // use double to get 0.5
		System.out.println(x3);
		String S1u = S1.toUpperCase(); // upper case methods and vice versa
		System.out.println(S1u);
		String f1 = "2.5";
		double x5 = Double.parseDouble(f1); //string to double
		 System.out.println(x5); 
		
		
		//numeric methods interger.max/.compare/.valueOf/.parseInt..
		marcus.name = "Johnson Nguyen"; //changing a property
		//compare strings use = string.equals(string)
		//primitives are variables that are assigned and objects are values that are a reference to an object
		//use the keyword "return" to end a method. great to use in if/else methods.
		//true/false shortcut //boolean checker =  "somestring = somestring" ? true ; false; will return boolean
		//exception handling
		//inheritance
		/*
		 * Java Terms, 
		 * Abstract -  a method that is inherited 
		 * API - Application programming interface that expose classes and interface to a client
		 * Array - a fixed sized collection of the same data type 
		 * autoboxing - conversion between primitives and wrapper class
		 * block - code between brackets
		 * break - to get out of loops and switch statement
		 * case - a keyword that defines a particular group of statements
		 * casting - conversion between types
		 * char - declare a single variable letter
		 * constant - a final variable that can't be changed
		 * constructor initialize object with a public method and same name as class
		 * default - optional switch statement when no conclusion can be reached
		 * encapsulation - the process of privating attributes that can be accessed through mutators and accessor. 
		 * enum - declare enum types
		 * look up hash funtions 
		 * 
		 */
		
	}

}
