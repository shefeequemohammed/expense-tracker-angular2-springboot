import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errLogin: boolean;
  errMsg:string

  
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.errLogin = false;
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/']);
        this.errLogin = false;
      })
      .catch((err) => {
        this.router.navigate(['/login']);
        this.errLogin = true;
        this.errMsg = err;
      });
  }

}

