package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Electricity;
import com.example.demo.model.User;

public interface  UserRepo extends JpaRepository<User,Integer> {
	public Optional<User> findOneByEmailAndPassword(String email, String password);
	User findByEmail(String email);
	@Modifying
	@Query("select e from Electricity e where e.serviceid=?1")
	public List<Electricity>findElectricityById(int userid);
}
