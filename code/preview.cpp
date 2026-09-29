#include <iostream>
#include <string>
#include <vector>

struct User {
	std::string name;
	bool active;
};

int main() {
	const std::vector<User> users{{"Alice", true}, {"Bob", false}};
	for (const auto& user : users) {
		if (user.active) {
			std::cout << "Hello, " << user.name << "!\n";
		}
	}
}
