package cewithackathon.internzipbackend.model;

import java.util.List;

public class Listing {
	
	private User user;
	private String address;
	private String rooms;
	private List<String> attractions;
	private String price;
	private String image;
	private Group group;
	
	public Listing(User user, String address, String rooms, List<String> attractions, String price, String image, Group group) {
		this.user = user;
		this.address = address;
		this.rooms = rooms;
		this.attractions = attractions;
		this.price = price;
		this.image = image;
		this.group = group;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRooms() {
		return rooms;
	}

	public void setRooms(String rooms) {
		this.rooms = rooms;
	}

	public List<String> getAttractions() {
		return attractions;
	}

	public void setAttractions(List<String> attractions) {
		this.attractions = attractions;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Group getGroup() {
		return group;
	}

	public void setGroup(Group group) {
		this.group = group;
	}
	
	
}
