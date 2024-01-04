import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomRouter } from './models/router.model';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {}

  navigate(path: keyof CustomRouter) {
    this.router.navigate([path]);
  }
}
