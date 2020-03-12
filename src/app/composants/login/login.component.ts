import { HttpClient } from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import { Users } from '../../modele/users';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service :UserService ,private http :HttpClient) { }
  open=false;
  ngOnInit() {
  }

   authenticate() {

    this.open=true;
console.log("open true")
}
}
