import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  categories: {name: string, image: string, id: number}[] = [
    {
      id: 1,
      name: "Simpathy",
      image: "../../assets/category1.png"
    },
    {
      id: 2,
      name: "Anniversary",
      image: "../../assets/category2.png"
    },
    {
      id: 3,
      name: "Congrulations",
      image: "../../assets/category3.png"
    },
    {
      id: 4,
      name: "Get Well",
      image: "../../assets/category4.png"
    },
  ]
  constructor() { }
}
