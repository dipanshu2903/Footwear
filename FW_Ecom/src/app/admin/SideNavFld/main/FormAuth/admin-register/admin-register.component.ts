import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  reatepass: string = 'none';
  displayMsg: string = '';
  isAccountCreated: boolean = false;

  // constructor(private formAuthService: FormAuthServicesService) { }

  ngOnInit(): void { }

  registerUser = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[A-Za-z].*")]),

    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[A-Za-z].*")]),

    email: new FormControl('', [Validators.required, Validators.email]),

    mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),

    gender: new FormControl('', [Validators.required]),

    pwd: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    rpwd: new FormControl(''),

  })

  userRegSubmit() {
    
    if (this.Pwd.value == this.Rpwd.value) {
      console.log("Submitted");
      this.reatepass = 'none';

      // this.formAuthService.registerUserfrm([
      //   this.registerUser.value.firstName as string,
      //   this.registerUser.value.lastName as string,
      //   this.registerUser.value.email as string,
      //   this.registerUser.value.mobile as string,
      //   this.registerUser.value.gender as string,
      //   this.registerUser.value.pwd as string
      // ]).subscribe((res)=>{
      //   console.log(res)
      //   if(res == 'Success'){
      //     this.displayMsg = 'Account Created Successfully';
      //     this.isAccountCreated = true;
      //   } else if(res == 'AlreadyExists'){
      //     this.displayMsg = 'Account Already Exist . Try another Email .';
      //     this.isAccountCreated = false ;
      //   } else {
      //     this.displayMsg = 'Something went Wrong';
      //     this.isAccountCreated = false;
      //   }
      // })         
    } else {
      this.reatepass = 'inline'
    }
  }

  get FirstName(): FormControl {
    return this.registerUser.get("firstName") as FormControl;
  }
  get LastName(): FormControl {
    return this.registerUser.get("lastName") as FormControl;
  }
  get Email(): FormControl {
    return this.registerUser.get("email") as FormControl;
  }
  get Mobile(): FormControl {
    return this.registerUser.get("mobile") as FormControl;
  }
  get Gender(): FormControl {
    return this.registerUser.get("gender") as FormControl;
  }
  get Pwd(): FormControl {
    return this.registerUser.get("pwd") as FormControl;
  }
  get Rpwd(): FormControl {
    return this.registerUser.get("rpwd") as FormControl;
  }



}

