import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modaledit',
  templateUrl: './modaledit.component.html',
  styleUrls: ['./modaledit.component.scss'],
})
export class ModaleditComponent implements OnInit {
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSave() {
    this.modalCtrl.dismiss();
  }
}
