package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Electricity;
import com.example.demo.services.ElectricityService;
@CrossOrigin
@RequestMapping("/electricity")
@RestController
public class ElectricityController {
	@Autowired
	ElectricityService ls;
	@PostMapping("/post")
	public Electricity saveinfo(@RequestBody Electricity l)
	{
		return ls.create(l);
	}
	@GetMapping("/getall")
	public List<Electricity> getall()
	{
		return ls.getalldetails();
	}
	@GetMapping("/getid/{serviceid}")
		public Optional<Electricity>get(@PathVariable("serviceid") int serviceid)
		{
		return ls.getDetails(serviceid);
	}
	@PutMapping("/updatedetails/{serviceid}")
	public String updateDetailsById(@RequestBody Electricity em,@PathVariable("serviceid") int serviceid)
	{
		return ls.updateDetails(em,serviceid);
	}
	@DeleteMapping("/deleteDetails/{serviceid}")
	public String deleteDetails(@PathVariable("serviceid") int serviceid)
	{
		ls.deleteDetails(serviceid);
		return "Service with ID " + serviceid + " is deleted"; 
	}
	@GetMapping("/sort/desc/{column_value}")
	public List<Electricity> descendingOrder(@PathVariable(value = "column_value") String column_value){
		return ls.sortDescending(column_value);
	}
	
	@GetMapping("/sort/asc/{columnvalue}")
	public List<Electricity> ascendingOrder(@PathVariable(value = "name") String columnvalue){
		return ls.sortAscending(columnvalue);
	}
	
	@GetMapping("/pagination/{offset}/{psize}")
	public List<Electricity> pagination(@PathVariable(value = "offset") int offset, @PathVariable(value = "psize") int psize){
		return ls.pagination(offset, psize);
	}
	@GetMapping("/pands/{offset}/{psize}/{column_value}")
	public List<Electricity> paginationData(@PathVariable(value = "offset") int offset, @PathVariable(value = "psize") int psize, @PathVariable(value = "column_value") String column_value){
		return ls.paginationAndSorting(offset, psize, column_value);
	}
	
}
