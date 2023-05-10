import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  simpathyCategoryID = 1;
  anniversaryCategoryID = 2;
  congrulationsCategoryID = 3;
  getWellCategoryID = 4;


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
      categoryID: this.simpathyCategoryID,
      image: "../../assets/products/simpathy/product12.PNG",
      name: "Sunshine & Joy Garden",
      price: 65
    },
    {
      id: 12,
      categoryID: this.anniversaryCategoryID,
      image: "../../assets/products/anniversary/product18.PNG",
      name: "Truly Stunning Bouquet",
      price: 108
    },
    {
      id: 13,
      categoryID: this.anniversaryCategoryID,
      image: "../../assets/products/anniversary/product19.PNG",
      name: "You're Precious Bouquet",
      price: 90
    },
    {
      id: 14,
      categoryID: this.anniversaryCategoryID,
      image: "../../assets/products/anniversary/product20.PNG",
      name: "Long Stem Red Rose Bouquet",
      price: 200
    },
    {
      id: 15,
      categoryID: this.anniversaryCategoryID,
      image: "../../assets/products/anniversary/product21.PNG",
      name: "Pretty in Pink Belgian Chocolate Truffles",
      price: 45
    },
    {
      id: 16,
      categoryID: this.anniversaryCategoryID,
      image: "../../assets/products/anniversary/product22.PNG",
      name: "Valentine's Day Belgian Chocolate Covered Treat Sampler",
      price: 45
    },
    {
      id: 17,
      categoryID: this.congrulationsCategoryID,
      image: "../../assets/products/congrulations/product23.PNG",
      name: "Bliss White Orchid",
      price: 68
    },
    {
      id: 18,
      categoryID: this.congrulationsCategoryID,
      image: "../../assets/products/congrulations/product24.PNG",
      name: "CLASSIC WHITE CALLA LILY",
      price: 58
    },
    {
      id: 19,
      categoryID: this.congrulationsCategoryID,
      image: "../../assets/products/congrulations/product25.PNG",
      name: "SPRING FLING TULIP BULB GARDEN",
      price: 45
    },
    {
      id: 20,
      categoryID: this.congrulationsCategoryID,
      image: "../../assets/products/congrulations/product26.PNG",
       name: "CONGRATS BELGIAN CHOCOLATE COVERED BERRY-GRAM",
      price: 55
    },
    {
      id: 21,
      categoryID: this.getWellCategoryID,
      image: "../../assets/products/get-well/product13.PNG",
      name: "Fiesta Bouquet",
      price: 95
    },
    {
      id: 22,
      categoryID: this.getWellCategoryID,
      image: "../../assets/products/get-well/product14.PNG",
      name: "Alluring Elegance Bouquet",
      price: 115
    },
    {
      id: 23,
      categoryID: this.getWellCategoryID,
      image: "../../assets/products/get-well/product15.PNG",
      name: "Beyond Blue Bouquet",
      price: 92
    },
    {
      id: 24,
      categoryID: this.getWellCategoryID,
      image: "../../assets/products/get-well/product16.PNG",
      name: "Clear Skies Bouquet",
      price: 135
    },
    {
      id: 25,
      categoryID: this.getWellCategoryID,
      image: "../../assets/products/get-well/product17.PNG",
      name: "Light of My Life Bouquet",
      price: 80
    },

  ]

  getCategoryProducts(categoryID: number) {
    return this.products.filter(i => i.categoryID == categoryID)
  }
}

