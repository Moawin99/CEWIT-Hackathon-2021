package cewithackathon.internzipbackend.model;

import java.util.List;

public class Listing {
	
	private User user;
	private int zipcode;
	private String city;
	private int rooms;
	private List<String> attractions;
	private int price;
	private String image;
	
	public Listing(User user, int zipcode, String city, int rooms, List<String> attractions, int price, String image) {
		this.user = user;
		this.zipcode = zipcode;
		this.city = city;
		this.rooms = rooms;
		this.attractions = attractions;
		this.price = price;
		this.image = image;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getZipcode() {
		return zipcode;
	}

	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getRooms() {
		return rooms;
	}

	public void setRooms(int rooms) {
		this.rooms = rooms;
	}

	public List<String> getAttractions() {
		return attractions;
	}

	public void setAttractions(List<String> attractions) {
		this.attractions = attractions;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
}
