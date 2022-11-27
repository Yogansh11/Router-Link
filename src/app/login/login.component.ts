import { NavbartogelService } from './../navbar/navbartogel.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ID : any = "";
  pass: any = "";
  hide = true;




  onclick(ev1 : any , ev2 : any){
    this.ID = ev1;
    this.pass = ev2;
    if(this.ID === 'yog' && this.pass === '123'){
      this.router.navigate(['/Home']);
      this.nav.show();

    }
    else{
      alert("Wrong UserName or Password")
    }
  }
  constructor(private router: Router,  public nav: NavbartogelService) { }
  ngOnInit(): void {
    this.nav.hide();
  }

}
