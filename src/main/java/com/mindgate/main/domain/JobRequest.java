package com.mindgate.main.domain;

import java.util.Objects;

public class JobRequest {
	private int jobId;
	private String skill1;
	private String skill2;
	private String skill3;
	private int count;
	private ProjectDetails projectDetails;
	private EmployeeDetails employeeDetails;	
 
	public JobRequest() {
		// TODO Auto-generated constructor stub
	}

	public JobRequest(int jobId, String skill1, String skill2, String skill3, int count, ProjectDetails projectDetails,
			EmployeeDetails employeeDetails) {
		super();
		this.jobId = jobId;
		this.skill1 = skill1;
		this.skill2 = skill2;
		this.skill3 = skill3;
		this.count = count;
		this.projectDetails = projectDetails;
		this.employeeDetails = employeeDetails;
	}

	public int getJobId() {
		return jobId;
	}

	public void setJobId(int jobId) {
		this.jobId = jobId;
	}

	public String getSkill1() {
		return skill1;
	}

	public void setSkill1(String skill1) {
		this.skill1 = skill1;
	}

	public String getSkill2() {
		return skill2;
	}

	public void setSkill2(String skill2) {
		this.skill2 = skill2;
	}

	public String getSkill3() {
		return skill3;
	}

	public void setSkill3(String skill3) {
		this.skill3 = skill3;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public ProjectDetails getProjectDetails() {
		return projectDetails;
	}

	public void setProjectDetails(ProjectDetails projectDetails) {
		this.projectDetails = projectDetails;
	}

	public EmployeeDetails getEmployeeDetails() {
		return employeeDetails;
	}

	public void setEmployeeDetails(EmployeeDetails employeeDetails) {
		this.employeeDetails = employeeDetails;
	}

	@Override
	public String toString() {
		return "JobRequest [jobId=" + jobId + ", skill1=" + skill1 + ", skill2=" + skill2 + ", skill3=" + skill3
				+ ", count=" + count + ", projectDetails=" + projectDetails + ", employeeDetails=" + employeeDetails
				+ "]";
	}
	
	
}
