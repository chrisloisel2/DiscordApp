import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [ReactiveFormsModule, RouterLink],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export class RegisterComponent {
	constructor(public api: ApiService, public router: Router) { }

	registerForm = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl('')
	});

	register() {
		console.log(this.registerForm.value);
		this.api.register(this.registerForm.value).subscribe((data: any) => {
			if (!data.error) {
				console.log(data);
				// Redirect to the login page
				this.router.navigate(['/login']);
			}
		});
	}
}
