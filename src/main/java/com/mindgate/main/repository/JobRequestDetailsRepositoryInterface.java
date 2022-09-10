package com.mindgate.main.repository;

import java.util.List;

import com.mindgate.main.domain.EmployeeDetails;
import com.mindgate.main.domain.JobRequest;


public interface JobRequestDetailsRepositoryInterface {

	
	public boolean addNewJobRequest(JobRequest  jobrequest);
	public List<JobRequest> getAllJobRequest();
	public boolean updateJobRequest(JobRequest  jobrequest);
	
}
