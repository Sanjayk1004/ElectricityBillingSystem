package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="ELECTRICITY")
public class Electricity {
	@Id
	private int serviceid;
	private String username;
	private String duedate;
	private String unitsconsumed;
	private String totalamount;
	public String getDuedate() {
		return duedate;
	}
	public void setDuedate(String duedate) {
		this.duedate = duedate;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getServiceid() {
		return serviceid;
	}
	public void setServiceid(int serviceid) {
		this.serviceid = serviceid;
	}
	public String getUnitsconsumed() {
		return unitsconsumed;
	}
	public void setUnitsconsumed(String unitsconsumed) {
		this.unitsconsumed = unitsconsumed;
	}
	public String getTotalamount() {
		return totalamount;
	}
	public void setTotalamount(String totalamount) {
		this.totalamount = totalamount;
	}
}
