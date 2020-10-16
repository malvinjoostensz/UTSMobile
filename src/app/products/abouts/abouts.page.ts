import { Component, OnInit } from '@angular/core';
import {About} from './about.model';
import {AboutsService} from './abouts.service';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.page.html',
  styleUrls: ['./abouts.page.scss'],
})
export class AboutsPage implements OnInit {
  abouts: About[];
  constructor(private aboutsService: AboutsService) { }

  ngOnInit() {
    this.abouts = this.aboutsService.getAllAbouts();
  }

}
