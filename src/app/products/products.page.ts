import { Component, OnInit } from '@angular/core';
import {Product} from './product.model';
import {ProductsService} from './products.service';
import {ModalController} from '@ionic/angular';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ModalcardComponent} from '../components/modalcard/modalcard.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: Product[];
  constructor(
    private productsService: ProductsService,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  async presentGrid() {
    const modal = await this.modalCtrl.create({
      component: ModalcardComponent,
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role);
    });
    return await modal.present();
  }
}
