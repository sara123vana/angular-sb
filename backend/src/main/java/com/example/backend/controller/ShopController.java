package com.example.backend.controller;

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

import com.example.backend.model.shop;
import com.example.backend.repository.ShopRepository;

@RestController
@CrossOrigin
@RequestMapping("api/shops")
public class ShopController {
	@Autowired
	private ShopRepository shopRepository;
	
	// Post shops
	@PostMapping
	public shop createShop(@RequestBody shop Shop) {
		this.shopRepository.save(Shop);
		return Shop;
	}
	// Get all shops
	@GetMapping
	public List<shop> getshops(){
		return this.shopRepository.findAll();
	}
	@GetMapping("/{id}")
	public Optional<shop> getshopById(@PathVariable Long id){
		return this.shopRepository.findById(id);
		
	}
	
	@PutMapping("/{id}")
	public shop updateshop(@PathVariable Long id,@RequestBody shop Shop) {
		Shop.setId(id);
		this.shopRepository.save(Shop);
		return Shop;
	}
	// Delete shops
	@DeleteMapping("/{id}")
	public void deleteshop(@PathVariable Long id) {
		this.shopRepository.deleteById(id);
	}

}
