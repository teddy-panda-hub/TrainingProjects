public class Main {
    public static void prac(){
        for(int i=0;i<10;i++){
            static class hello{
                public void med(){
                    System.out.println("Inside a class that is inside a for loop");
                }
            }
            System.out.println("Inside a class that is outside a for loop");
        }
    }
    public static void main(String args[]){
        prac();
        Hello.med();
    }

    //java type system
    //java operators
    //literal, also known as constant representation of a value supported by a language
    //integer, real no., true, false, character, \n,\t,\b,\f, null
}
