package cewithackathon.internzipbackend.model;

import java.util.LinkedList;

public class Group {
	
	private LinkedList<User> group;
	
	public Group() {
		this.group = new LinkedList<User>();
	}
	
	public void addUser(User u) {
		if(group.size() >= 5 ) { //maxSize = 5, no duplicates
			throw new IndexOutOfBoundsException("Maximum group size is 5.");
		} else if(group.contains(u)) {
			throw new IllegalArgumentException("User already exists in group.");
		} else {
			group.add(u);
		}
	}
	
	public User deleteUser(int index) {
		return group.remove(index);
	}
	
	public int indexOf(User u) {
		return group.indexOf(u);
	}
	
	public LinkedList<User> getGroup() {
		return group;
	}

	public void setGroup(LinkedList<User> group) {
		this.group = group;
	}
	
}
