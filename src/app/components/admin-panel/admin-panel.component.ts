import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AutoUnsubscribe } from '../../shared/decorators/unsubscriber';
import { UserI } from '../../shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
@AutoUnsubscribe
export class AdminPanelComponent implements OnInit {
  columnsToDisplay: string[] = ['name', 'birthday', 'education', 'position'];
  usersData!: UserI[];

  constructor(private _activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    (this._activatedRoute.data as Observable<{ users: UserI[] }>).subscribe(
      (el) => (this.usersData = el.users),
    );
  }
}
