import { Component, OnInit } from '@angular/core';
import { Form, NgForm, NgModel } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    
  }

}
