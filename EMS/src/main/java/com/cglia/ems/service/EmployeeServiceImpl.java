package com.cglia.ems.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cglia.ems.entity.Employee;
import com.cglia.ems.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public List<Employee> getAllEmployees() {
		return (List<Employee>) employeeRepository.findAll();
	}

	@Override
	public Employee updateEmployee(Long id, Employee employee) {
		Employee depDB = employeeRepository.findById(id).get();

		if (Objects.nonNull(employee.getFirstName()) && !"".equalsIgnoreCase(employee.getFirstName())) {
			depDB.setFirstName(employee.getFirstName());
		}

		if (Objects.nonNull(employee.getLastName()) && !"".equalsIgnoreCase(employee.getLastName())) {
			depDB.setLastName(employee.getLastName());
		}

		if (Objects.nonNull(employee.getEmailId()) && !"".equalsIgnoreCase(employee.getEmailId())) {
			depDB.setEmailId(employee.getEmailId());
		}

		return employeeRepository.save(depDB);
	}

	@Override
	public void deleteEmployee(Long id) {
		employeeRepository.deleteById(id);
	}

}
