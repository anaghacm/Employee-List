import { Injectable } from '@angular/core';
import { Interfaces } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public employeeList = [
    {
      id: 1,
      firstname: "John",
      lastname: "Graham",
      age: 30,
      gender: "male",
      email: "john@gmail.com",
      contact: "9188721480",
      address: "12A, Church Road",
      designation: "Associate Software Engineer",
      joindate:'2023-01-20'
    },
    {
      id: 2,
      firstname: "Henry",
      lastname: "Howell",
      age: 29,
      gender: "male",
      email: "henry@gmail.com",
      contact: "9188721473",
      address: "12A, Church Road",
      designation: "HR Assistant",
      joindate:'2019-08-16'
    },
    {
      id: 3,
      firstname: "Angel",
      lastname: "Bauch",
      age: 30,
      gender: "female",
      email: "angel1@gmail.com",
      contact: "9100721479",
      address: "12A, Church Road",
      designation: "Junior Tester",
      joindate:'2022-08-24'
    },
    {
      id: 4,
      firstname: "Frank",
      lastname: "Schulist",
      age: 25,
      gender: "male",
      email: "frank@gmail.com",
      contact: "9188721473",
      address: "12A, Church Road",
      designation: "Senior Software Engineer",
      joindate:'2023-04-10'
    },
    {
      id: 5,
      firstname: "Kurtis",
      lastname: "Weissnat",
      age: 27,
      gender: "female",
      email: "kurtis@gmail.com",
      contact: "9188721473",
      address: "12A, Church Road",
      designation: "HR Manager",
      joindate:'2022-06-18'
    },
    {
      id: 6,
      firstname: "Nicholas",
      lastname: "Runolfsdottir",
      age: 25,
      gender: "male",
      email: "nicholas@gmail.com",
      contact: "9188721473",
      address: "12A, Church Road",
      designation: "Associate Software Engineer",
      joindate:'2020-12-27'
    },
    {
      id: 7,
      firstname: "Glen",
      lastname: "Reichert",
      age: 29,
      gender: "male",
      email: "glen@gmail.com",
      contact: "9188721473",
      address: "12A, Church Road",
      designation: "HR Assistant",
      joindate:'2023-02-20'
    },
    {
      id: 8,
      firstname: "John",
      lastname: "Graham",
      age: 28,
      gender: "male",
      email: "john@gmail.com",
      contact: "9188721480",
      address: "12A, Church Road",
      designation: "Associate Software Engineer",
      joindate:'2022-07-11'
    },
    {
      id: 9,
      firstname: "Henry",
      lastname: "Howell",
      age: 29,
      gender: "male",
      email: "henry@gmail.com",
      contact: "9188721473",
      address: "12A, Church Road",
      designation: "HR Assistant",
      joindate:'2021-10-02'
    },
    {
      id: 10,
      firstname: "Angel",
      lastname: "Bauch",
      age: 30,
      gender: "female",
      email: "angel1@gmail.com",
      contact: "9100721479",
      address: "12A, Church Road",
      designation: "Junior Tester",
      joindate:'2020-09-20'
    },
    {
      id: 11,
      firstname: "Frank",
      lastname: "Schulist",
      age: 25,
      gender: "male",
      email: "frank@gmail.com",
      contact: "9188721473",
      address: "12A, Church Road",
      designation: "Senior Software Engineer",
      joindate:'2021-01-21'
    },
    {
      id: 12,
      firstname: "Kurtis",
      lastname: "Weissnat",
      age: 27,
      gender: "female",
      email: "kurtis@gmail.com",
      contact: "9188721473",
      address: "12A, Church Road",
      designation: "HR Manager",
      joindate:'2023-02-29'
    },
    {
      id: 13,
      firstname: "Nicholas",
      lastname: "Runolfsdottir",
      age: 25,
      gender: "male",
      email: "nicholas@gmail.com",
      contact: "9188721473",
      address: "12A, Church Road",
      designation: "Associate Software Engineer",
      joindate:'2023-03-12'
    },
    {
      id: 14,
      firstname: "Glen",
      lastname: "Reichert",
      age: 29,
      gender: "male",
      email: "glen@gmail.com",
      contact: "9188721473",
      address: "12A, Church Road",
      designation: "HR Assistant",
      joindate:'2022-06-21'
    }
  ]
  constructor() { }

  getEmployeeList() {
    return this.employeeList;
  }
  editEmployeeList(data:Interfaces){
    for(let employee of this.employeeList){
      if(employee.id==data.id){
        alert('Successfully updated the data')
      }
    }
  }
}
