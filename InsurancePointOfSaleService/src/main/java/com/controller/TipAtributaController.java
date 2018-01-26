package com.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.config.DatabaseUri;
import com.model.TipAtributa;
import com.model.user.Permission;

@CrossOrigin
@RestController
@RequestMapping("/api/tipoviAtributa")
public class TipAtributaController {
	
	private final DatabaseUri databaseUri;
	private final RestTemplate restTemplate;
	
	@Autowired
	public TipAtributaController(RestTemplate restTemplate, DatabaseUri databaseUri) {
		this.restTemplate = restTemplate;
		this.databaseUri = databaseUri;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/zaTipOsiguranja/{tipOsiguranjaId}")
	@ResponseBody
	@Permission(permissionName = "readTipoviAtributaZaTipOsiguranja")
	public List<TipAtributa> getTipoviAtributaZaTipOsiguranja(@PathVariable("tipOsiguranjaId") Long tipOsiguranjaId){
		return restTemplate.getForObject(databaseUri.getDatabaseUri()+"/tipoviAtributa/zaTipOsiguranja/" + tipOsiguranjaId, List.class);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/zaKontekst/{kontekstAtributaId}")
	@ResponseBody
	@Permission(permissionName = "readTipoviAtributaZaKontekstAtributa")
	public List<TipAtributa> getTipoviAtributaZaKontekstAtributa(@PathVariable("kontekstAtributaId") Long kontekstAtributaId){
		return restTemplate.getForObject(databaseUri.getDatabaseUri()+"/tipoviAtributa/zaKontekst/" + kontekstAtributaId, List.class);
	}
	
}
