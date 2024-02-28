import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  data: any;
  constructor(private _productService: ProductService){}

  ngOnInit(): void {
      this._productService.getAllProducts().subscribe(response=>{
        this.data = response
      })
  }

}
