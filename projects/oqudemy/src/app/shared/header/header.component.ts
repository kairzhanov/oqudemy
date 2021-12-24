import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../core/models/user.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showMobileMenu = false;

  constructor(private route: ActivatedRoute, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  get currentUser(): User {
    return this.authService.currentUserValue;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
