import { Component ,OnInit} from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  display : string = '';
  isRegister  : boolean = false;
  // constructor(private loginAuth : FormAuthServicesService ,private router : Router) {}

 ngOnInit() : void {}

 loginForm = new FormGroup({
  email : new FormControl('',[Validators.required,Validators.email]),
  pwd: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)])
 });

 isUserValid : boolean = false;
 loginSubmitted(){
  // this.loginAuth.loginUser([
  //   this.loginForm.value.email as string,
  //   this.loginForm.value.pwd as string
  // ]).subscribe(res =>{
  //   console.log(res)
  //      if(res == 'Failed'){
  //       this.isUserValid = false;
  //       alert('Login Unsuccessful');
  //       console.log(this.isUserValid = false)
  //       this.display = 'Login Unsuccessfully..';
  //       this.isRegister = true;
  //      }
  //       else{
  //       this.isUserValid = true;
  //       this.loginAuth.setToken(res)
  //       this.router.navigateByUrl('pages')
  //       this.display = 'Login successfully';
  //       this.isRegister = false ;
  //       console.log( this.isUserValid = true)
  //      }
  // });
 }
 


 get Email() : FormControl{
  return this.loginForm.get('email') as FormControl;
 }

 get Pwd() : FormControl{
  return this.loginForm.get('pwd') as FormControl;
 }
}

