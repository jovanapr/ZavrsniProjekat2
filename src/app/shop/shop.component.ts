import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories: {name: string, image:string, id: number}[] = [];

  // Default
  //  vrednosti za categoryIDToShow i showCategory varijable. Ove vrednosti se menjaju u 
  // showCategoryProducts funkciji koja se poziva klikom na neku od kategorija
  categoryIDToShow: number = 0;
  showCategory = false;

  constructor(
    private shopService: ShopService,
  ){}

  ngOnInit(): void {
    this.categories = this.shopService.categories;
  }

  showCategoryProducts(categoryID: number){   
    // categeoryIDToShow Shop komponente setuj na vrednost categoryID parametra koji je prosledjen iz HTML-a
    this.categoryIDToShow = categoryID;
    // setuj showCategory na true kako bi se Categories komponenta prikazala unutar Shop komponente
    this.showCategory = true;
  }
}

