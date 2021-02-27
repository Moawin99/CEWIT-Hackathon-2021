package cewithackathon.internzipbackend.model;

public class User {
	
	private String name;
	private String role; //owner or intern
	private String username;
	private String password;
	private String email;
	private Group group;
	private Information information;
	
	public User(String name, String role, String username, String password, String email, Group group, Information information) {
		this.name = name;
		this.role = role;
		this.username = username;
		this.password = password;
		this.email = email;
		this.group = group;
		this.information = information;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Group getGroup() {
		return group;
	}

	public void setGroup(Group group) {
		this.group = group;
	}

	public Information getInformation() {
		return information;
	}

	public void setInformation(Information information) {
		this.information = information;
	}
	
	
}
