import { Component, OnInit } from '@angular/core';
import {Admin} from './admin.model';
import {AdminsService} from './admins.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.page.html',
  styleUrls: ['./admins.page.scss'],
})
export class AdminsPage implements OnInit {
  admins: Admin[];
  constructor(private adminsService: AdminsService) { }

  ngOnInit() {
    this.admins = this.adminsService.getAllAdmins();
  }

}
