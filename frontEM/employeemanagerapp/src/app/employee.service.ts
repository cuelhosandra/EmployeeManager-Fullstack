import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

//INJETANDO UMA RAIZ
@Injectable({
    providedIn: 'root'
})

//CRIANDO VARIÁVEL DA URL DO SERVIDOR
export class EmployeeService{
    private apiServerUrl = environment.apiBaseUrl;


    constructor(private http:HttpClient) {    }

    //OBSERVABLE: PEGA AS PRINCIPAIS REQUESTS DO CÓD 
    //GET
    public getEmployee() :Observable<Employee[]>{
    //CRIANDO LINK DO SERVIDOR E SALVANDO NA VARIÁVEL APISERVERURL
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`)
    }

    //ADD
    public addEmployee(employee: Employee) :Observable<Employee>{
        //PASSANDO O EMPLOYEE POR PARAMETRO
        return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee)
    }

    //UPDATE
    public updateEmployee(employee: Employee) :Observable<Employee>{
        //PASSANDO O EMPLOYEE POR PARAMETRO
        return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee)
    }

     //DELETE
     public deleteEmployee(employeeId: number) :Observable<Employee>{
        return this.http.delete<Employee>(`${this.apiServerUrl}/employee/delete/{employeeId}`)
    }
}