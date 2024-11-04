import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ReactiveFormsModule, RouterLink],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {

	constructor(public api: ApiService, public router: Router) { }

	loginForm = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl('')
	});

	login() {
		console.log(this.loginForm.value);
		this.api.login(this.loginForm.value).subscribe((data: any) => {
			console.log(data);
			// Redirect to the home page
			console.log(data);
			if (!data.error) {
				this.router.navigate(['/home']);
			}
		});
	}
}
