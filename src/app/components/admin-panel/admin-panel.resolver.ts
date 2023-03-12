import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { AdminService } from '../../shared/services/admin.service';
import { UserI } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminPanelResolver implements Resolve<UserI[]> {
  constructor(private adminService: AdminService) {}
  resolve(): Observable<UserI[]> {
    return this.adminService.getUsers();
  }
}
