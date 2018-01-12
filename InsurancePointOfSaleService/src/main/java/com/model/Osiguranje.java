package com.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Osiguranje implements Serializable{
	
	private static final long serialVersionUID = -7663607432545399871L;
	
	private Long id;
	private Date datumSklapanja;
	private TipOsiguranja tipOsiguranja;
	private Klijent klijent;
	private List<VrednostAtributaOsiguranja> vrednostiAtributaOsiguranja = new ArrayList<>();
	
	public Osiguranje() {
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Date getDatumSklapanja() {
		return datumSklapanja;
	}

	public void setDatumSklapanja(Date datumSklapanja) {
		this.datumSklapanja = datumSklapanja;
	}

	public TipOsiguranja getTipOsiguranja() {
		return tipOsiguranja;
	}
	
	public void setTipOsiguranja(TipOsiguranja tipOsiguranja) {
		this.tipOsiguranja = tipOsiguranja;
	}
	
	public Klijent getKlijent() {
		return klijent;
	}

	public void setKlijent(Klijent klijent) {
		this.klijent = klijent;
	}

	public List<VrednostAtributaOsiguranja> getVrednostiAtributaOsiguranja() {
		return vrednostiAtributaOsiguranja;
	}
	
	public void setVrednostiAtributaOsiguranja(List<VrednostAtributaOsiguranja> vrednostiAtributaOsiguranja) {
		this.vrednostiAtributaOsiguranja = vrednostiAtributaOsiguranja;
	}
	
}
