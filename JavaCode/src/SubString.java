
public class SubString {
	
public static void main(String[] args) {
        
        String str = "JavaExamssssplesJavaCodssseJavaProgramss";
        
        String strFind = "s";
        int count = 0, fromIndex = 0;
        
        while ((fromIndex = str.indexOf(strFind, fromIndex)) != -1 ){ //goes through the string
 
           // System.out.println("Found at index: " + fromIndex); //prints the substring and index
            count++;
            fromIndex++;
            strFind = strFind+"s";
            
        }
        
        System.out.println("Total occurrences: " + count + "Final" + strFind);
    }

}
