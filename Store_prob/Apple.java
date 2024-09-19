class Apple implements Comparable<Apple>{
	double cost;
	int quantity;
	int date;
	String type;
	Apple( double cost, int quantity, int date, String type){
		this.cost=cost;
		this.quantity=quantity;
		this.date=date;
		this.type=type;
	}
	@Override
    public int compareTo(Apple other) {
        return Integer.compare(this.quantity, other.quantity);
    }
	public int qty(){
		return quantity;
	}
	public int date(){
		return date;
	}
	public String type(){
		return type;
	}
	public String toString(){
		return "Type: "+type+" cost: "+cost+" "+" quantity: "+quantity+" date: "+" "+date;	
	}
}
