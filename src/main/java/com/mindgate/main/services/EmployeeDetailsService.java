package com.mindgate.main.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.main.domain.EmployeeDetails;
@Service
public class EmployeeDetailsService implements EmployeeDetailsServiceInterface {

	@Autowired
	private EmployeeDetailsServiceInterface detailsServiceInterface;
	
	@Override
	public EmployeeDetails getByLoginId(int employeeId) {
		// TODO Auto-generated method stub
		return detailsServiceInterface.getByLoginId(employeeId);
	}

}
