package cewithackathon.internzipbackend.model;

import java.util.LinkedList;

public class Group {
	
	private LinkedList<User> group;
	
	public Group() {
		this.setGroup(new LinkedList<User>());
	}
	
	public void addUser(User u) {
		if(group.size() < 5) { //maxSize = 5
			group.add(u);
		} else {
			return;
		}
	}
	
	public User deleteUser(int index) {
		return group.remove(index);
	}
	
	public LinkedList<User> getGroup() {
		return group;
	}

	public void setGroup(LinkedList<User> group) {
		this.group = group;
	}
	
}
