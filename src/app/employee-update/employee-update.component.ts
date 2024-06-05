// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { EmployeeModel } from '../employee.model';
// import { EmployeeService } from '../employee.service';

// @Component({
//   selector: 'app-employee-update',
//   templateUrl: './employee-update.component.html',
//   styleUrls: ['./employee-update.component.css']
// })
// export class EmployeeUpdateComponent implements OnInit {
//   employee: EmployeeModel = { id: 0, firstName: '', lastName: '', emailId: '' };

//   constructor(
//     private employeeService: EmployeeService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const id = +this.route.snapshot.paramMap.get('id')!;
//     this.employeeService.getEmployees().subscribe(
//       (employees: EmployeeModel[]) => {
//         const employee = employees.find(e => e.id === id);
//         if (employee) {
//           this.employee = employee;
//         }
//       },
//       (error: any) => {
//         console.error('Failed to load employee data!', error);
//       }
//     );
//   }

//   updateEmployee() {
//     this.employeeService.updateEmployee(this.employee).subscribe(
//       (data: EmployeeModel) => {
//         console.log('Employee updated successfully!', data);
//         this.router.navigate(['/employees']);
//       },
//       (error: any) => {
//         console.error('Failed to update employee!', error);
//       }
//     );
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employee: EmployeeModel = { id: 0, firstName: '', lastName: '', emailId: '' };

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.employeeService.getEmployees().subscribe(
      (employees: EmployeeModel[]) => {
        const employee = employees.find(e => e.id === id);
        if (employee) {
          this.employee = employee;
        }
      },
      (error: any) => {
        console.error('Failed to load employee data!', error);
      }
    );
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee).subscribe(
      (data: EmployeeModel) => {
        console.log('Employee updated successfully!', data);
        this.router.navigate(['/employees']);
      },
      (error: any) => {
        console.error('Failed to update employee!', error);
      }
    );
  }
}
