import { Component, OnInit } from '@angular/core';
import {Admin} from './admin.model';
import {AdminsService} from './admins.service';
import {ModalController} from '@ionic/angular';
import {ModaleditComponent} from '../../components/modaledit/modaledit.component';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.page.html',
  styleUrls: ['./admins.page.scss'],
})
export class AdminsPage implements OnInit {
  admins: Admin[];
  constructor(
    private adminsService: AdminsService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.admins = this.adminsService.getAllAdmins();
  }

  deleteAdmin(adminId: string) {
    this.admins = this.admins.filter(admin => {
      return admin.id !== adminId;
    });
  }
  delete(item) {
    item.close();
    console.log('Delete Option clicked');
  }

  add(item) {
    item.close();
    console.log('Add Option clicked');
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModaleditComponent,
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role);
    });
    return await modal.present();
  }
}
