import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  constructor(private formBuilder: FormBuilder){}
    productForm= this.formBuilder.group({
      productId: [,[Validators.required, Validators.minLength(4)]],
      brand:[''],
      description: this.formBuilder.group({
        age: [0],
        seasons: ['']
      }),
      quantity: [0],
      price: [0],
      suppliers: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    })

  onSubmit(){
    // alert("Form Submitted")
    console.error(this.productForm.value)
    console.log(this.productForm.controls['suppliers'].controls[0].value)
  }

  get suppliers(){
    return this.productForm.get('suppliers') as FormArray;
  }

  addNewSupplier(){
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }
}
