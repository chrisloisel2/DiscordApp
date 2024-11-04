import { CanActivateFn } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
	if (localStorage.getItem('user'))
		return true;
	else {
		console.log('Not connected');
		return false;
	}
};
