import { Component, OnInit } from '@angular/core';

import { AutoUnsubscribe } from '../../shared/decorators/unsubscriber';
import { UserI } from '../../shared/models/user';
import { SharedModule } from '../../shared/shared.module';
import { AdminService } from '../../_core/services/admin.service';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
@AutoUnsubscribe
export class AdminPanelComponent implements OnInit {
  columnsToDisplay: string[] = ['name', 'birthday', 'education', 'position'];
  usersData!: UserI[];

  constructor(private adminService: AdminService) {}
  ngOnInit() {
    this.adminService.getUsers().subscribe((el) => (this.usersData = el));
  }
}
