import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from './product';
import { Observable } from 'rxjs';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveProduct(product: Product): Observable<Object>{
    let url='http://localhost:5000/product/api.1.0/create';
    return this.http.post(url,product);
  }

  getProductDetails(): Observable<Object>{
    let url='http://localhost:5000/product/api.1.0/get';
    return this.http.get(url);
  }

  getProductById(productId: string): Observable<Object>{
    let url=`http://localhost:5000/product/api.1.0/getbyid/${productId}`;
    return this.http.get(url);
  }

  deleteProductById(productId1:string): Observable<Object>{
    let prodID=Number(productId1);
    let url=`http://localhost:5000/product/api.1.0/deletebyid/${prodID}`;
    return this.http.get(url);
  }

}
