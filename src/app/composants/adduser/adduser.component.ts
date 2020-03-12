import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
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
    tel: "",
    email: "",
    adresse:"",
    ville: "" ,
    permission:false,
    pass:""
 
  };
  constructor(private service:UserService) {}
  users :Users[] = [];
  formvisible=true;
  adduser=true;
  upuser=false;
  displayedColumns: string[] = ['Nom_Prenom', 'email', 'Telephone', 'Adresse', "Action"];
  dataSource = new MatTableDataSource<Users>(this.users);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() { 
    this.getusers();
    this.dataSource.paginator = this.paginator;
  }
getusers(){
  this.service.getAll().subscribe(users =>this.users = users);
}

  add(){
    this.user=this.service.form.value;
    this.service.add(this.user)
    .subscribe((user)=>{
      this.users = [user, ...this.users];
    
    });
  this.service.form.reset();
  }
  ajouter(){

    this.upuser=false;
    this.adduser=true;
    this.user = this.service.form.value;
    console.log("ajouter"+this.user);
    this.add();

   }

  deleteuser(user){
    this.service.delete(user.id).subscribe(()=>{
      this.users=this.users.filter(user=>user.id !=user.id)
    })
    this.getusers();
    }

    visiblerform(){
this.formvisible=!this.formvisible;
this.upuser=false;
this.adduser=true;
    }

    
onEdit(user) {
  this.formvisible=false;
  this.upuser=true;
  this.adduser=false;
  this.service.populateFormUtilisateur(user);
  this.service.update(user).subscribe(() => {
    

   });
}


editer(){
  this.formvisible=true;
  this.user = this.service.form.value;
  this.service.update(this.user)
  .subscribe(user=>{
    this.adduser=true;
    this.upuser=false;
    this.service.form.reset();
  });
  this.getusers();
}
 }

