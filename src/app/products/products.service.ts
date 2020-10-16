import { Injectable } from '@angular/core';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 'p1',
      title: 'Intel Core i9-10900K',
      imageUrl: 'https://www.jagatreview.com/wp-content/uploads/2020/05/10900K_3_Flagship-500x363.png',
      description: ['Rp9.199.000', 'Stock: 6', 'Brand: Intel', 'Base Clock: 3.7GHz', 'Boost Clock: 5.3GHz', 'Core Count: 10', 'Thread Count: 20'],
      price: 'Rp9.199.000',
      stock: 'Stock: 6'
    },
    {
      id: 'p2',
      title: 'AMD Ryzen 9 3950X',
      imageUrl: 'https://i.pcmag.com/imagery/reviews/02adLuCQg3b5BJ0hjSHsJCe-1.1574731298.fit_scale.size_1028x578.jpg',
      description: ['Rp11.999.000', 'Stock: 5', 'Brand: AMD', 'Base Clock: 3.5GHz', 'Boost Clock: 4.7GHz', 'Core Count: 16', 'Thread Count: 32'],
      price: 'Rp11.999.000',
      stock: 'Stock: 5'
    },
    {
      id: 'p3',
      title: 'ZOTAC GAMING GeForce RTX 3090 Trinity',
      imageUrl: 'https://cdn.thepcenthusiast.com/wp-content/uploads/2020/08/zotac-geforce-rtx-3090-trinity-holo-02.jpg',
      description: ['Rp28.799.000', 'Stock: 9', 'Brand: ZOTAC'],
      price: 'Rp28.799.000',
      stock: 'Stock: 9'
    },
    {
      id: 'p4',
      title: 'Asus ROG Zenith II Extreme',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/24/64681733/64681733_6adce951-2b4b-48d7-9a40-ae88451c6d3d_500_500',
      description: ['Rp14.599.000', 'Stock: 8', 'Brand: ASUS', 'Chipset: AMD TRX40', 'Prcessor: AMD Ryzen Threadripper'],
      price: 'Rp14.599.000',
      stock: 'Stock: 8'
    },
  ];
  constructor() { }

  getAllProducts(){
    return [...this.products];
  }

  getProduct(productId: string) {
    return {...this.products.find(product => {
      return product.id === productId;
      })};
  }
}
