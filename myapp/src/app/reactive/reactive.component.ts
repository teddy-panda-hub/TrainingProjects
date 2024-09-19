import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  productForm = new FormGroup({
    productId: new FormControl('', [Validators.required, Validators.min(1)]),
    brand: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl(0),
    price: new FormControl(0)
  });

  onSubmit(){
    alert("Form Submited Successfully")
    console.error(this.productForm);
    console.warn(this.productForm.value);
    console.log(this.productForm.controls['price'].value);
  }
}
