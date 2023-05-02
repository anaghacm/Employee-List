import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Interfaces } from '../services/interfaces';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  public employeeList!:any;
  public modalCategory:string='';
  public userDetails!:Interfaces;

  constructor(private _ds:DataService) { }

  ngOnInit(): void {
    this.employeeList=this._ds.getEmployeeList();
    console.log(this.employeeList)
    
  }

  setVariable(category:number, employee:Interfaces){
    if(category==1){
      this.modalCategory='Edit Details';
    }
    else if(category==2){
      this.modalCategory='Employee Details';
    }
    this.userDetails=employee;
  }
}
