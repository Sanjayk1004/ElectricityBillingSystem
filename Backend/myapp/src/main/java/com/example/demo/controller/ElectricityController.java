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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Electricity;
import com.example.demo.service.ElectricityService;


@CrossOrigin
@RestController
public class ElectricityController {

	@Autowired
	public ElectricityService es;
	@PostMapping("/save")
	public Electricity save(@RequestBody Electricity e)
	{
		return es.create(e);
	}
	@GetMapping("/get")
	public List<Electricity>getall()
	{
		return es.get();
	}
	@GetMapping(value = "/get/{id}")
	public Optional<Electricity>getDetails(@PathVariable long serviceid)
	{
		return es.getDetails(serviceid);
	}
	@PutMapping(value = "updatedetails/{id}")
	public String updateDetailsById(@RequestBody Electricity em,@PathVariable("id") long id)
	{
		return es.updateDetails(em,id);
	}
	@DeleteMapping(value = "/deleteDetails/{id}")
	public String deleteDetails(@PathVariable("id")long serviceid)
	{
		es.deleteDetails(serviceid);
		return "User with ID " + serviceid+ " is deleted"; 
	}  


}