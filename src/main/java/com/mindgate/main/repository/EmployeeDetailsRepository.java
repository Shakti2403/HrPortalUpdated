package com.mindgate.main.repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mindgate.main.domain.EmployeeDetails;
@Repository
public class EmployeeDetailsRepository implements EmployeeDetailsRepositoryInterface {
	
	
	private static final String SELECT_SINGLE_EMPLOYEE_DETAILS="select * from employee_details where employee_id=?";
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public EmployeeDetails getByLoginId(int employeeId) {
		EmployeeDetails employeeDetails = jdbcTemplate.queryForObject(SELECT_SINGLE_EMPLOYEE_DETAILS, new EmployeeDetailsRowMapper(), employeeId);
		return employeeDetails;
	}

}
