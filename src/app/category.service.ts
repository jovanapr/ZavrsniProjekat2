import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  simpathyCategoryID = 1;
  anniversaryCategoryID = 2;

  products: { id: number, categoryID: number, image: string, name: string, price: number }[] = [
    {
      id: 0,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product1.PNG",
      name: "Beautiful Spirit Basket",
      price: 105
    },
    {
      id: 1,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product2.PNG",
      name: "The Spathiphyllum Plant",
      price: 80
    },
    {
      id: 2,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product3.PNG",
      name: "Comfort Planter",
      price: 66
    },
    {
      id: 3,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product4.PNG",
      name: "Eternal Friendship Bouquet",
      price: 100
    },
    {
      id: 4,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product5.PNG",
      name: "Long Stem Pink Rose Bouquet",
      price: 200
    },
    {
      id: 5,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product6.PNG",
      name: "Clear Skies Bouquet",
      price: 135
    },
    {
      id: 6,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product7.PNG",
      name: "Beyond Blue Bouquet",
      price: 92
    },
    {
      id: 7,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product8.PNG",
      name: "Alluring Elegance Bouquet",
      price: 115
    },
    {
      id: 8,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product9.PNG",
      name: "Beach House Bouquet",
      price: 125
    },
    {
      id: 9,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product10.PNG",
      name: "Pastel Peace Basket",
      price: 105
    },
    {
      id: 10,
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product11.PNG",
      name: "Picnic Tulips",
      price: 70
    },
    {
      id: 11,
      categoryID: this.anniversaryCategoryID,
      image: "../../assets/products/simpathy/product12.PNG",
      name: "Sunshine & Joy Garden",
      price: 65
    },

  ]

  getCategoryProducts(categoryID: number) {
    return this.products.filter(i => i.categoryID == categoryID)
  }
}

