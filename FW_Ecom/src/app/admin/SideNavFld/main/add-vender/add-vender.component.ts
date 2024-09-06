import { Component,OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import{EcomServiceService} from 'src/app/Service/ecom-service.service';
@Component({
  selector: 'app-add-vender',
  templateUrl: './add-vender.component.html',
  styleUrls: ['./add-vender.component.css']
})
export class AddVenderComponent implements OnInit{
  displayMsg: string = '';
  isAccountCreated: boolean = false;

  constructor(private conService: EcomServiceService) { }

  ngOnInit(): void { }

  addVender = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[A-Za-z].*")]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[A-Za-z].*")]),
    contact: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address : new FormControl('',[Validators.required])
  })

  vendorRegSubmit() {
      this.conService.addVender([
        this.addVender.value.firstName as string,
        this.addVender.value.lastName as string,
        this.addVender.value.contact as string,
        this.addVender.value.email as string,
        this.addVender.value.address as string,
      ]).subscribe((res)=>{
        console.log(res)
        if(res == 'Success'){
          this.displayMsg = 'Account Created Successfully';
          this.isAccountCreated = true;
        } else if(res == 'AlreadyExists'){
          this.displayMsg = 'Account Already Exist . Try another Email .';
          this.isAccountCreated = false ;
        } else {
          this.displayMsg = 'Something went Wrong';
          this.isAccountCreated = false;
        }
      })         
  }

  get FirstName(): FormControl {
    return this.addVender.get("firstName") as FormControl;
  }
  get LastName(): FormControl {
    return this.addVender.get("lastName") as FormControl;
  }
  get Contact(): FormControl {
    return this.addVender.get("contact") as FormControl;
  }
  get Email(): FormControl {
    return this.addVender.get("email") as FormControl;
  }
  get Address(): FormControl {
    return this.addVender.get("address") as FormControl;
  }


}


