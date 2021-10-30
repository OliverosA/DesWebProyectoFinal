import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ApiS } from '../service/api.service'
import { ResponseInterface } from '../Interface/response.interface'
import { UsersInterface } from '../Interface/users.interface'
@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ["./create.component.css"],
})
export class CreateComponent implements OnInit {
  registerForm: FormGroup
  constructor(private api:ApiS, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
        nombre: new FormControl('',[Validators.required]),
        correo: new FormControl('',[Validators.required]),
        telefono: new FormControl('', [Validators.required]),
        github: new FormControl('', [Validators.required]),
    });
  }
  onCreateUsers(form:UsersInterface){
      console.log(form)
      this.api.createUsers(form).subscribe(response => {
        let data:ResponseInterface = response
        console.log(data);
        this.router.navigate(['read'])
      }, error => console.log(error));
  }
}
