package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Electricity;

public interface ElectricityService {
	public Electricity create(Electricity e);
	public List<Electricity>getalldetails();
	public Optional<Electricity> getDetails(int serviceid);
	public String updateDetails(Electricity i,int serviceid);
	public void deleteDetails(int serviceid);
	public List<Electricity> sortDescending(String field);
	public List<Electricity> sortAscending(String field);
	public List<Electricity> pagination(int pageNumber, int pageSize);
	public List<Electricity> paginationAndSorting(int pageNumber, int pageSize, String column_name);

}
