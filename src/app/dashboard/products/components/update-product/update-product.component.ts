import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  @Input() id?: any; // 3d way if using angular >= 16 
  productForm?: FormGroup;

  constructor(private _productService: ProductService){}

  ngOnInit(): void {
    // form creation 
      this.productForm = new FormGroup({
        id: new FormControl(""), 
        name: new FormControl(""), 
        description: new FormControl(""), 
      })
      // get data from backend 
      this._productService.getProductById(this.id).subscribe(data =>{
        this.productForm?.patchValue(data)
      })

      // 1st way 
     // this.id = this._activateRoute.snapshot.params['id']; // array 
      // this.id = this._activateRoute.snapshot.paramMap.get('id'); // Map 
      
      // 2nd way (Observable) -> Rreactive Programming 
      // this._activateRoute.params.subscribe(params =>{
      //   this.id = params['id']
      // })
  }

  updateProduct(){
    // update in backed
    this._productService.updateProductById(this.id,this.productForm?.value).subscribe(data =>{
      
    })
  }
}
