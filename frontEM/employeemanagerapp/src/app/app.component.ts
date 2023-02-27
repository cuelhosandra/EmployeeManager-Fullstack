//COMPONENTES: CLASSES, OBJETOS SÃO CONSIDERADOS COMO COMPONENTES NO ANGULAR  
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

//Tudo que têm aqui, o Component vai deixar a gente usar no html e css
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Conectando ao EmployeeService
export class AppComponent  implements onInit {
//Criando employees que vai utilizar tudo que o service usa
  public employees: Employee[];

  constructor (private employeeService: EmployeeService){}

  ngOnInit(): void{
    this.getEmployees();
  }

  //funcionando igual Controller:
  public getEmployees():void{
    this.employeeService.getEmployee().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      }, (error: HttpErrorResponse) => { alert(error.message)}
    )
  }
}
