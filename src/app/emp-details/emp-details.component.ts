import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Interfaces } from '../services/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit, OnChanges {

  @Input() modalCategory!:string;
  @Input() userDetails!:Interfaces;
  public employeeDetailsForm!: FormGroup;

  constructor(private _fb: FormBuilder, private _ds:DataService) { 
  }

  ngOnInit(): void {
   
    this.employeeDetailsForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      joindate:['', Validators.required],
      age: [, Validators.required],
      email: ['', Validators.required],
      gender: ['male', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      designation: ['', Validators.required]
    })

    if(this.modalCategory=='Employee Details'){
      this.employeeDetailsForm.disable()
    }
    else if(this.modalCategory=='Edit Details'){
      this.employeeDetailsForm.enable()
    }
  }
  ngOnChanges() {
    if (this.userDetails!=undefined) {
      this.employeeDetailsForm.get('firstname')?.setValue(this.userDetails.firstname);
      this.employeeDetailsForm.get('lastname')?.setValue(this.userDetails.lastname);
      this.employeeDetailsForm.get('age')?.setValue(this.userDetails.age);
      this.employeeDetailsForm.get('gender')?.setValue(this.userDetails.gender);
      this.employeeDetailsForm.get('email')?.setValue(this.userDetails.email);
      this.employeeDetailsForm.get('contact')?.setValue(this.userDetails.contact);
      this.employeeDetailsForm.get('address')?.setValue(this.userDetails.address);
      this.employeeDetailsForm.get('designation')?.setValue(this.userDetails.designation);
      this.employeeDetailsForm.get('joindate')?.setValue(this.userDetails.joindate);
      if(this.modalCategory=='Employee Details'){
        this.employeeDetailsForm.disable()
      }
      else if(this.modalCategory=='Edit Details'){
        this.employeeDetailsForm.enable()
      }
    }
  }
    
  saveDetails(){
    let data={
      id:this.userDetails.id,
      firstname:this.employeeDetailsForm.value.firstname,
      lastname:this.employeeDetailsForm.value.lastname,
      age:this.employeeDetailsForm.value.age,
      gender:this.employeeDetailsForm.value.gender,
      email:this.employeeDetailsForm.value.email,
      contact:this.employeeDetailsForm.value.contact,
      address:this.employeeDetailsForm.value.address,
      designation:this.employeeDetailsForm.value.designation,
      joindate:this.employeeDetailsForm.value.joindate
    }
    console.log(data)
    this._ds.editEmployeeList(data);
  }

}
