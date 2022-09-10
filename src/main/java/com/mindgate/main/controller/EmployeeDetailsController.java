package com.mindgate.main.controller;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindgate.main.domain.EmployeeDetails;
import com.mindgate.main.services.EmployeeDetailsServiceInterface;

@RestController
@CrossOrigin("*")
@RequestMapping("employeeapi")
public class EmployeeDetailsController {

	
	private EmployeeDetailsServiceInterface detailsServiceInterface;

	@RequestMapping(value = "address/{addressId}" , method = RequestMethod.GET)
	public EmployeeDetails getSingleEmployeeDetailsByEmployeeId(@PathVariable int employeeId)
	{
		return detailsServiceInterface.getByLoginId(employeeId);
	}
	
}
