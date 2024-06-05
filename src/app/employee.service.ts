// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { EmployeeModel } from "./employee.model";
// import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root'
// })
// export class EmployeeService {
//     private baseUrl: string = 'http://localhost:9090/api/v1/employees';

//     constructor(private http: HttpClient) { }
  
//     getEmployees(): Observable<EmployeeModel[]> {
//       return this.http.get<EmployeeModel[]>(`${this.baseUrl}`);
//     }

//     addEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
//       return this.http.post<EmployeeModel>(`${this.baseUrl}`, employee);
//     }

//     updateEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
//       return this.http.put<EmployeeModel>(`${this.baseUrl}/${employee.id}`, employee);
//     }

//     deleteEmployee(id: number): Observable<void> {
//       return this.http.delete<void>(`${this.baseUrl}/${id}`);
//     }
// }

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EmployeeModel } from "./employee.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private baseUrl: string = 'http://localhost:9090/api/v1/employees';

    constructor(private http: HttpClient) { }
  
    getEmployees(): Observable<EmployeeModel[]> {
      return this.http.get<EmployeeModel[]>(`${this.baseUrl}`);
    }

    addEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
      return this.http.post<EmployeeModel>(`${this.baseUrl}`, employee);
    }

    updateEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
      return this.http.put<EmployeeModel>(`${this.baseUrl}/${employee.id}`, employee);
    }

    deleteEmployee(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
