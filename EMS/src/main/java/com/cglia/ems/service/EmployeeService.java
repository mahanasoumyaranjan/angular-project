package com.cglia.ems.service;

import java.util.List;

import com.cglia.ems.entity.Employee;

public interface EmployeeService {
	Employee createEmployee(Employee employee);

	List<Employee> getAllEmployees();

	Employee updateEmployee(Long id, Employee employee);

	void deleteEmployee(Long id);
}
