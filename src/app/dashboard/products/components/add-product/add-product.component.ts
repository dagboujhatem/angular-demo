import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm?: FormGroup; // ? --> : FormGroup<any> | undefined

  constructor(private _productService : ProductService){}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(""), 
      description: new FormControl(""), 
    })
  }

  saveProduct(){
    // save in backed
    this._productService.addProduct(this.productForm?.value).subscribe(data =>{

    })
  }
}
