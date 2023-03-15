import { Component, OnInit } from '@angular/core';

import { AutoUnsubscribe } from '../../shared/decorators/unsubscriber';
import { UserI } from '../../shared/models/user';
import { SharedModule } from '../../shared/shared.module';
import { Store } from '@ngrx/store';
import { AppState } from '../../_core/state/state';
import { usersSelector } from '../../_core/state/admin/admin.reducer';
import { loadUsers } from '../../_core/state/admin/admin.actions';

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

  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.store.select(usersSelector).subscribe((el) => (this.usersData = el));
  }
}
