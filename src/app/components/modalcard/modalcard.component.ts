import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../products/products.service';

@Component({
  selector: 'app-modalcard',
  templateUrl: './modalcard.component.html',
  styleUrls: ['./modalcard.component.scss'],
})
export class ModalcardComponent implements OnInit {

  constructor(
    // private productsService: ProductsService
  ) { }

  ngOnInit() {
    // this.products = this.productsService.getAllProducts();
  }

  async presentList() {

  }
}
