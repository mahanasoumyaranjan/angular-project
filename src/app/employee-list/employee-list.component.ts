// import { Component } from '@angular/core';
// import { EmployeeModel } from '../employee.model';
// import { EmployeeService } from '../employee.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrl: './employee-list.component.css'
// })

// export class EmployeeListComponent {
//   employees: EmployeeModel[] = [];
//   message: string | null = null;
//   constructor(private employeeService:EmployeeService, private router: Router){}

//   ngOnInit(){
//     this.getEmployee();
//   }

//   getEmployee(){
//     this.employeeService.getEmployees().subscribe(
//       (data: EmployeeModel[]) => {
//         this.employees = data;
//       },
//       (error: any) => {
//         console.error('Failed to get employee list!', error);
//       }
//     );
//   }

//   deleteEmployee(id: number) {
//     this.employeeService.deleteEmployee(id).subscribe(
//       () => {
//         console.log('Employee deleted successfully!');
//         this.router.navigate(['/employees'], {queryParams:{message: 'Employee deleted successfully!'}});
//         this.getEmployee();
//       },
//       (error: any) => {
//         console.error('Failed to delete employee!', error);
//       }
//     );
//   }

// }

import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeModel[] = [];
  message: string | null = null;
  constructor(private employeeService:EmployeeService, private router: Router){}

  ngOnInit(){
    this.getEmployee();
  }

  getEmployee(){
    this.employeeService.getEmployees().subscribe(
      (data: EmployeeModel[]) => {
        this.employees = data;
      },
      (error: any) => {
        console.error('Failed to get employee list!', error);
      }
    );
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        console.log('Employee deleted successfully!');
        this.router.navigate(['/employees'], {queryParams:{message: 'Employee deleted successfully!'}});
        this.getEmployee();
      },
      (error: any) => {
        console.error('Failed to delete employee!', error);
      }
    );
  }
}
