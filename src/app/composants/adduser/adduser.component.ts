import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/modele/users';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  private user: Users = {
    nom: "" ,
    prenom: "",
    statut: "",
    photo: "",
    Tel: "",
    email: "",
    adresse:""
  };
  users :Users[] = [];
  constructor(private service:UserService) { }
  statuts = [
    {id: 1 , value:'User'},
    {id: 2, value:'Editor'},
    {id: 3, value:'admin'}
  ];
  ngOnInit() {
  }

  add(){
    this.service.add(this.user)
    .subscribe((user)=>{
      this.users = [user, ...this.users];
    });
  }
  onSubmit()
 {
   if(this.service.form.valid){
     this.user = this.service.form.value;
     if(this.service.form.value.id==null){
       console.log(this.user);
       this.add();
       this.service.form.reset();
     } 
    
   }
 }
}
