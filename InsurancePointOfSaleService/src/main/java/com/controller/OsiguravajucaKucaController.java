package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.config.DatabaseUri;
import com.model.OsiguravajucaKuca;

@CrossOrigin
@RestController
@RequestMapping("/api/osiguravajuceKuce")
public class OsiguravajucaKucaController {

	@Value("${spring.data.company}")
	private String osiguravajucaKucaId;
	
	private final DatabaseUri databaseUri;
	private final RestTemplate restTemplate;
	
	@Autowired
	public OsiguravajucaKucaController(DatabaseUri databaseUri, RestTemplate restTemplate) {
		this.databaseUri = databaseUri;
		this.restTemplate = restTemplate;
	}
		
	@GetMapping
	@ResponseBody
	public OsiguravajucaKuca getOsiguravajucaKuca(){
		return restTemplate.getForObject(databaseUri.getDatabaseUri() + "osiguravajuceKuce/"+osiguravajucaKucaId, OsiguravajucaKuca.class);
	}
	
}
