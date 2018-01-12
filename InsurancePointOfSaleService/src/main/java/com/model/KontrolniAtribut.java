package com.model;

import java.io.Serializable;

public class KontrolniAtribut implements Serializable{

	private static final long serialVersionUID = -4758907317995159170L;
	
	private Long id;
	private KontekstAtributa kontekst;
	private TipAtributa tipAtributa;
	
	public KontrolniAtribut() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public KontekstAtributa getKontekstAtributa() {
		return kontekst;
	}

	public void setKontekstAtributa(KontekstAtributa kontekst) {
		this.kontekst = kontekst;
	}

	public TipAtributa getTipAtributa() {
		return tipAtributa;
	}

	public void setTipAtributa(TipAtributa tipAtributa) {
		this.tipAtributa = tipAtributa;
	}
	
}
