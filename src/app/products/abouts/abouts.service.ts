import { Injectable } from '@angular/core';
import {About} from './about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutsService {
  private abouts: About[] = [
    {
      id: 'ab',
      title: 'Malvin Joostensz - 00000013612',
      imageUrl: 'https://ecs7-p.tokopedia.net/img/cache/215-square/shops-1/2019/9/4/1770860/1770860_deb3fc19-b375-4d14-b2d6-c8006d13aef7.jpeg',
      description: ['Saya mengerjakan sendiri'],
      description2: ['Tidak menggunakan library luar'],
      description3: ['Saya menggunakan referensi dari:'],
      description4: ['- Modul Lab'],
      description5: ['- Channel YouTube Pak Wawo'],
      description6: ['- Website Ionic']
    }
  ];
  constructor() { }

  getAllAbouts(){
    return [...this.abouts];
  }

  getAbout(aboutId: string) {
    return {...this.abouts.find(about => {
        return about.id === aboutId;
      })};
  }
}
