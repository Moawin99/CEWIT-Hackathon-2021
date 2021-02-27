package cewithackathon.internzipbackend.model;

import java.util.List;

public class Information {
	
	private Season season;
	private Location location;
	private int priceRangeLb;
	private int priceRangeUb;
	private List<String> hobbies;
	private int cleanliness;
	
	public Information(Season season, Location location, int priceRangeLb, int priceRangeUb, List<String> hobbies, int cleanliness) {
		this.season = season;
		this.location = location;
		this.priceRangeLb = priceRangeLb;
		this.priceRangeUb = priceRangeUb;
		this.hobbies = hobbies;
		this.cleanliness = cleanliness;
	}

	public Season getSeason() {
		return season;
	}

	public void setSeason(Season season) {
		this.season = season;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public int getPriceRangeLb() {
		return priceRangeLb;
	}

	public void setPriceRangeLb(int priceRangeLb) {
		this.priceRangeLb = priceRangeLb;
	}

	public int getPriceRangeUb() {
		return priceRangeUb;
	}

	public void setPriceRangeUb(int priceRangeUb) {
		this.priceRangeUb = priceRangeUb;
	}

	public List<String> getHobbies() {
		return hobbies;
	}

	public void setHobbies(List<String> hobbies) {
		this.hobbies = hobbies;
	}

	public int getCleanliness() {
		return cleanliness;
	}

	public void setCleanliness(int cleanliness) {
		this.cleanliness = cleanliness;
	}
}
