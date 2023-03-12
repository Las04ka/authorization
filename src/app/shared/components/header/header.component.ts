import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../state/state';
import { userSelector } from '../../state/user/user.reducer';
import { LoggedUserI } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user: Observable<LoggedUserI> = this.store.select(userSelector);

  constructor(private router: Router, private store: Store<AppState>) {}
  onLogout() {
    localStorage.removeItem('X-Token');
    this.router.navigateByUrl('');
  }
}
