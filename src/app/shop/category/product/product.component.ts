import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: { id: number, image: string, name: string, price: number };

  constructor(
    private  productService: ProductService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id)[0];
  }
}
