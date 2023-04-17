import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnChanges {
  // Lista svih proizvoda za sve kategorije
  products: {id:number, categoryID:number, image:string, name:string, price:number}[] = [];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  // categoryID je varijabla Category komponente koja vrednost dobija spolja. U nasem slucaju kroz Shop HTML koji poziva Categories komponentu
  @Input() categoryID: number;

  ngOnInit(): void {
    // Dohvati listu proizvoda iz servisa za odredjenu kategoriju
    this.products = this.categoryService.getCategoryProducts(this.categoryID);
  }

  // Ova funkcija se poziva kada god se vrednost categoryID promeni. 
  // Ova vrednost se menja svaki put kada se klikne na drugu kategoriju u Shop komponenti
  ngOnChanges(){
    this.products = this.categoryService.getCategoryProducts(this.categoryID);
  }

  showProductDetail(productID: number){
    this.router.navigate(['/product/' + productID])
  }

}
