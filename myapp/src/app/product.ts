export class Product{
    productId: string;
    brand: string;
    descrption: string;
    quantity: number;
    price: number;

    constructor(productId: string, brand: string, description: string, quantity: number, price: number){
        this.productId=productId;
        this.brand=brand;
        this.descrption=description;
        this.quantity=quantity;
        this.price=price
    }
}