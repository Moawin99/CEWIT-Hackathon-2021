package cewithackathon.internzipbackend.model;

import java.util.List;

public class Chat {
	
	private List<Message> messages;
	private Group group;
	
	public Chat(List<Message> messages, Group group) {
		this.messages = messages;
		this.group = group;
	}
	
	public void addMessage(Message m) {
		messages.add(m);
	}
	
	public Message deleteMessage(int index) {
		return messages.remove(index);
	}
	
	public int indexOf(Message m) {
		return messages.indexOf(m);
	}
	
	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

	public Group getGroup() {
		return group;
	}

	public void setGroup(Group group) {
		this.group = group;
	}
	
}
