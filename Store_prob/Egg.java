class Egg{
	double cost;
	int quantity;
	int date;
	Egg(double cost, int quantity, int date){
		this.cost=cost;
		this.quantity=quantity;
		this.date=date;
	}
	public int qty(){
		return quantity;
	}
	public int add(int q){
		quantity+=q;
		return q;
	}
	public int date(){
		return date;
	}
	public String toString(){
		return "cost: "+cost+" "+" quantity: "+quantity+" date: "+" "+date;	
	}
}