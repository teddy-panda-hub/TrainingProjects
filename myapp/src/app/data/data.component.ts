import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  data="Enter the product brand";
  sum=0
  count=0

  product: Product=new Product("","","",0,0);
  productData: Product[]=[];

  // constructor(private service: DataService){

  //   this.productData=service.getProducts();
  //   // console.log(this.productData);
  // }

  constructor(private productService: ProductService){}


  onSubmit(){
    this.productData.push(this.product);
    console.log(this.product);
    console.log(this.productData);
    this.productService.saveProduct(this.product).subscribe(
      (data1)=>{console.log('Received from API: ',data1);},
      // (error)=>{console.error(error);}
    );

  }

  productCount(data: string): number{
    this.count=0
    for(let i=0;i<this.productData.length;i++){
      if(this.productData[i].brand==data)
        this.count++;
    }
    return this.count;
  }

}
