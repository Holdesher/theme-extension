#[derive(Debug)]
struct User<'a> {
	name: &'a str,
	active: bool,
}

fn greeting(user: &User) -> String {
	format!("Hello, {}!", user.name)
}

fn main() {
	let users = [
		User { name: "Alice", active: true },
		User { name: "Bob", active: false },
	];

	for user in users.iter().filter(|user| user.active) {
		println!("{}", greeting(user));
	}
}
