import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../_core/state/state';
import { loadUser } from '../../_core/state/user/user.actions';
import { SharedModule } from '../../shared/shared.module';

@Component({
  imports: [SharedModule],
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private router: Router, private store: Store<AppState>) {}

  onLogin() {
    if (this.form.valid) {
      this.store.dispatch(
        loadUser({ email: this.email.value, password: this.password.value }),
      );
    }
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
