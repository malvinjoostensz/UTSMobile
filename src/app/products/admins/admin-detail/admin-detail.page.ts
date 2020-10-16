import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {Admin} from '../admin.model';
import {AdminsService} from '../admins.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.page.html',
  styleUrls: ['./admin-detail.page.scss'],
})
export class AdminDetailPage implements OnInit {
  loadedAdmin: Admin;
  constructor(
    private activatedRoute: ActivatedRoute,
    private adminsService: AdminsService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private presentToast: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('adminId')) { return; }
      const adminId = paramMap.get('adminId');
      this.loadedAdmin = this.adminsService.getAdmin(adminId);
    });
  }

  deleteAdmin() {
    this.presentLoading().then(() => {
      this.adminsService.deleteAdmin(this.loadedAdmin.id);
      this.router.navigate(['/admins']);
      // @ts-ignore
      this.presentToast();
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteAdmin()
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting product...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
