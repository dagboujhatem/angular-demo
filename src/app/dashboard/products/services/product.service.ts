import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) { }

  addProduct(data :any){
    return this._httpClient.post('http://localhost:3000/products', data) // add new product
  }

  getAllProducts(){
    return this._httpClient.get('http://localhost:3000/products') // get all product 
  }

  getProductById(id: any ){
    return this._httpClient.get('http://localhost:3000/products/' + id) // get one product 
  }

  deleteProductById(id: any ){
    return this._httpClient.delete('http://localhost:3000/products/' + id) // delete one product 
  }

  updateProductById(id: any , data : any ){
    return this._httpClient.put('http://localhost:3000/products/' + id, data) // update one product 
  }
}
