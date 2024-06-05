import { Component } from '@angular/core';
import { EmployeeModel } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  employee: EmployeeModel = { id: 0, firstName: '', lastName: '', emailId: '' };

  constructor(private employeeService: EmployeeService, private router: Router) { }

  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(
      (data: EmployeeModel) => {
        console.log('Employee added successfully!', data);
        this.router.navigate(['/employees']);
      },
      (error: any) => {
        console.error('Failed to add employee!', error);
      }
    );
  }
}
