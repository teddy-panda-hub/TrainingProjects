import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-retrive-data',
  templateUrl: './retrive-data.component.html',
  styleUrls: ['./retrive-data.component.css']
})
export class RetriveDataComponent {
  product: Product=new Product("","","",0,0);
  id='0'
  id2='0'
  productData: Product[]=[];
  constructor(private productService: ProductService){}
  onSubmit(){
    this.productService.getProductDetails().subscribe((data)=>{
      console.log(data)
      this.productData=<Product[]>data;
      })
  }
  onSubmit2(){
    console.log(this.id)
    // console.log(this.id==this.productData[0].productId)
    for(let i=0;i<this.productData.length;i++){
      if(this.id==this.productData[i].productId){
        this.productService.getProductById(this.id).subscribe(
          (data)=>{console.log(data)})
      }
    }
  }
  onSubmit3(){
    for(let i=0;i<this.productData.length;i++){
      if(this.id2==this.productData[i].productId){
        this.productService.deleteProductById(this.id2).subscribe(
          (data) => {
            console.log('Product deleted successfully',data);
          },
          (error) => {
            console.error('Error deleting product:', error);
          })
      }
    }
  }
}


