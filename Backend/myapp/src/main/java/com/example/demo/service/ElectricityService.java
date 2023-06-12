package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Electricity;
import com.example.demo.repository.ElectricityRepo;

@Service
public class ElectricityService implements ElectricityServiceInter
{
	@Autowired
    public ElectricityRepo er;

	@Override
	public Electricity create(Electricity e) 
	{
		return er.save(e);
	}

	@Override
	public List<Electricity> get() {
		return er.findAll();
	}
	
	 public Optional<Electricity> getDetails(long id)
		{
			return er.findById(id);
		}
	    public String updateDetails(Electricity i,long id)
		{
		    Electricity e = er.findById(id).orElse(null);
			  if(e != null){
				  e.setServiceid(i.getServiceid());
				  e.setUsername(i.getUsername());
				  e.setDate(i.getDate());
				  e.setUnitsconsumed(i.getUnitsconsumed());
				  e.setAddress(i.getAddress());
				  e.setPhnumber(i.getPhnumber());
			   er.saveAndFlush(e);
			   
			   return "The details of the  Id was updated";
			  }
			  else{
			   return "The ID is not present in the database to update the value";
			  }
			 }
	    @Override
		public void deleteDetails(long id)
		{
			er.deleteById(id);
	   }
}