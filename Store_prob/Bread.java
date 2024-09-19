class Bread{
	double cost;
	int quantity;
	int date;
	String b;
	Bread( double cost, int quantity, int date, String b){
		this.cost=cost;
		this.quantity=quantity;
		this.date=date;
		this.b=b;
	}
	public int qty(){
		return quantity;
	}
	public int date(){
		return date;
	}
	public String brand(){
		return b;
	}
	public String toString(){
		return "brand: "+b+" cost: "+cost+" "+" quantity: "+quantity+" date: "+" "+date;	
	}
}
