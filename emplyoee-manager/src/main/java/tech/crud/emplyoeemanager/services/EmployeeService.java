package tech.crud.emplyoeemanager.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.crud.emplyoeemanager.exception.UserNotFoundException;
import tech.crud.emplyoeemanager.model.Employee;
import tech.crud.emplyoeemanager.repo.EmployeeRepo;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {

    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    //MÉTODO PRA ADICIONAR UM FUNCIONÁRIO
    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode((UUID.randomUUID().toString()));
        return employeeRepo.save(employee);
    }

    //PEGAR TODOS OS FUNCIONÁRIOS
    public List<Employee> findAllEmployees(){
        return employeeRepo.findAll();
    }

    //ATUALIZAR O FUNCIONÁRIO E SALVAR ELE ATUALIZADO
    public Employee updateEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    public Employee findEmployeeById(Long id) {
        return employeeRepo.findEmployeeById(id)
                .orElseThrow(()-> new UserNotFoundException("User by Id" + id + "not found"));
    }

    //DELETAR O FUNCIONÁRIO
    public void deleteEmployee(Long id) {
        employeeRepo.deleteEmployeeById(id);
    }
}
