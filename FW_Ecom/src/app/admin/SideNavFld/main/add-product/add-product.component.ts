import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EcomServiceService } from 'src/app/Service/ecom-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

  export class AddProductComponent implements OnInit{
    displayMsg: string = '';
    isAccountCreated: boolean = false;
  
    states: { id: number, stateName: string }[] = [];
    cities: { id: number, cityName: string, stateId: number }[] = [];
    filteredCities: { id: number, cityName: string }[] = [];
  
    constructor(private conService: EcomServiceService) { }
  
    ngOnInit(): void {
      this.loadStates();
      this.loadCities();
     }
  
    addVender = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[A-Za-z].*")]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[A-Za-z].*")]),
      contact: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address : new FormControl('',[Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    })
  
    vendorRegSubmit() {
      this.conService.addPostVender({
        firstName: this.addVender.value.firstName as string,
        lastName: this.addVender.value.lastName as string,
        contact: this.addVender.value.contact as string,
        email: this.addVender.value.email as string,
        address: this.addVender.value.address as string,
        state: this.addVender.value.state as string,
        city: this.addVender.value.city as string
      }).subscribe((res) => {
        console.log(res);
        if (res === 'Success') {
          this.displayMsg = 'Registered Vendor Successfully';
          this.isAccountCreated = true;
        } 
        // else if (res === 'AlreadyExists') {
        //   this.displayMsg = 'Vendor Already Exists. Try another Email.';
        //   this.isAccountCreated = false;
        // } 
        else {
          this.displayMsg = 'Something went wrong';
          this.isAccountCreated = false;
        }
      });
    }
  
    loadStates() {
      this.conService.getStates().subscribe(
        (data: { id: number, stateName: string }[]) => {
          this.states = data;
        },
        (error) => {
          console.error('Error fetching states', error);
        }
      );
    }
  
    loadCities() {
      this.conService.getCities().subscribe(
        (data: { id: number, cityName: string, stateId: number }[]) => {
          this.cities = data;
        },
        (error) => {
          console.error('Error fetching cities', error);
        }
      );
    }
  
    onStateChange(event: Event) {
      const target = event.target as HTMLSelectElement;
      const stateId = Number(target.value);
      this.filteredCities = this.cities.filter(city => city.stateId === stateId);
      this.addVender.patchValue({ city: '' }); // Reset city value
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
    get State(): FormControl {
      return this.addVender.get('state') as FormControl;
    }
    get City():FormControl{
      return this.addVender.get('city') as FormControl
    }
   
  
  }
  
  
  


