import java.util.*;
import java.lang.*;

class App{
	public static void main(String[] args){
		ArrayList<Egg> e=new ArrayList<>();
		Egg e1=new Egg(150, 30, 15);
		e.add(e1);
		System.out.println(e.get(0));
		
		HashSet<Milk> m=new HashSet<>();
		m.add(new Milk(40, 1, 2, "Heritage"));
		Iterator<Milk> i=m.iterator();
		while(i.hasNext())
			System.out.println(i.next());
		
		LinkedList<Chocolate> c=new LinkedList<>();
		c.add(new Chocolate(10,50,360,"Dairy Milk"));
		for(Chocolate j:c)
			System.out.println(j);
		
		TreeSet<Apple> a=new TreeSet<>();
		a.add(new Apple(200,5,15,"Kahmiri"));
		Iterator<Apple> it=a.iterator();  
		while(it.hasNext())
			System.out.println(it.next());
		
		Queue<Bread> b=new LinkedList<>();
		b.add(new Bread(50,15,7,"Milk Bread"));
		System.out.println(b);
		
		
		HashMap<Integer,Collection> hm=new HashMap<>();
		hm.put(1,e);
		hm.put(2,m);
		hm.put(3,c);
		hm.put(4,a);
		hm.put(5,b);
		System.out.println(hm.size());
		System.out.println(hm);
	}
}