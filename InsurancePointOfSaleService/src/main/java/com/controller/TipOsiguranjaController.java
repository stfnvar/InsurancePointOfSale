package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.config.DatabaseUri;
import com.model.TipOsiguranja;

@RestController
@RequestMapping("/api/tipoviOsiguranja")
public class TipOsiguranjaController {

	@Value("${spring.data.company}")
	private String osiguravajucaKucaId;

	private final DatabaseUri databaseUri;
	private final RestTemplate restTemplate;
	
	@Autowired
	public TipOsiguranjaController(DatabaseUri databaseUri, RestTemplate restTemplate) {
		this.databaseUri = databaseUri;
		this.restTemplate = restTemplate;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping
	@ResponseBody
	public List<TipOsiguranja> getTipoviOsiguranja(){
		return restTemplate.getForObject(databaseUri.getDatabaseUri()+"/tipoviOsiguranja/zaOsiguravajucuKucu/" + osiguravajucaKucaId, List.class);
	}
	
}
