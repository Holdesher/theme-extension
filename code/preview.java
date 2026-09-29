import java.util.List;

public final class Preview {
	record User(String name, boolean active) {}

	public static void main(String[] args) {
		var users = List.of(new User("Alice", true), new User("Bob", false));
		users.stream()
			.filter(User::active)
			.map(user -> "Hello, " + user.name())
			.forEach(System.out::println);
	}
}
