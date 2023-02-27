package tech.crud.emplyoeemanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.crud.emplyoeemanager.model.Employee;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {


    Optional<Employee> findEmployeeById(Long id);

    void deleteEmployeeById(Long id);
}
