from dataclasses import dataclass


@dataclass
class User:
	name: str
	active: bool = True

	def greeting(self) -> str:
		return f"Hello, {self.name}!"


users = [User("Alice"), User("Bob", active=False)]
active_users = [user for user in users if user.active]
print("; ".join(user.greeting() for user in active_users))
