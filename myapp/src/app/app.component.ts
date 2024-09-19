import { style } from '@angular/animations';
import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked{
  title: string="Form Parent"

  constructor(){
    console.log("constructor() is called.......From Parent");
  }
  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked() is called....... From Parent");
  }
  ngAfterContentInit():void{
    console.log("ngAfterContentInit() is called.........From Parent");
  }
  ngDoCheck():void{
    console.log("ngDoCheck() is called.........From Parent");
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log("ngOnChanges() is called........From Parent");
  }
  ngOnInit(): void{
    console.log("ngOnInit() is called........From Parent");
  }
  keyCapture(event: string){
    this.title=event
  }
  sendMessage(): void{
    console.log("Click event fired........From Parent")
  }
  // title = 'Meghana';
  // location="Trivandrum";
  // company="UST";
  
  // productId= "AZ1011237";
  // description= "Dual Camera, Dual Sim, 256GB Storage and 8GB RAM";
  // quantity= 200;
  // available=this.quantity>0;
  // instock= this.available;

  // orderqty= 0;
  // orderDate:Date=new Date
  // isorderQtyAvailable=this.orderqty<this.quantity;

  // deliveryColor= 'red';

  // products=[
  //   {"productId":"101","description":"Samsung Galaxy M series","price":"30,000"},
  //   {"productId":"102","description":"Laptop","price":"90,000"},
  //   {"productId":"103","description":"Camera","price":"60,000"},
  //   {"productId":"104","description":"Iphone14","price":"100,000"},
  //   {"productId":"105","description":"Philips TV","price":"130,000"}];

  // printOrder(input: any):void{
  //   // console.log(this.orderqty, "Order Placed");
  //   console.log(input.value,"Order Placed");
  //   alert("Order Placed Sucessfully");
  // }
  // topColor='orange'
  // bottomColor='green'
  // top=document.getElementById("top")
  // color='beige'
  // colorCall(value: any): void{
  //   switch(value){
  //     case 't':
  //       this.color='orange'
  //       break
  //     case 'm':
  //       this.color= 'white'
  //       break
  //     case 'b':
  //       this.color='green'
  //       break
  //   }
  //   document.body.style.backgroundColor=this.color
  // }
  
  // forEven='rgb(77, 77, 241)'
  // forOdd='rgb(228, 187, 138)'
  // r: number= 1469237
  // p: number=432.657
  // d: number=2.3
}
