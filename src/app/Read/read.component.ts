import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ApiS } from '../service/api.service'
import { ResponseInterface } from '../Interface/response.interface'
import { UsersInterface } from '../Interface/users.interface'

@Component({
    selector: 'read',
    templateUrl: './read.component.html',
    styleUrls: ["./read.component.css"],

})
export class ReadComponent implements OnInit {
  items: Object

  constructor(private api:ApiS, private router: Router) {}

  ngOnInit(): void {
  this.api.readUsers().subscribe(
     response => {
       this.items=response.Result.registros;
     },
     error => console.log(error)
   );
  }

  onEliminar(id: number){
    this.api.deleteUsers(id).subscribe(
       response => {
         this.items=response.Result.registros;
       },
       error => console.log(error)
   );
    this.api.readUsers().subscribe(
      response => {
        this.items=response.Result.registros;
      },
      error => console.log(error)
    );
    this.router.navigate(['read'])
  }
}
