<?php

declare(strict_types=1);

final class User
{
	public function __construct(
		public readonly string $name,
		public readonly bool $active = true,
	) {}

	public function greeting(): string
	{
		return "Hello, {$this->name}!";
	}
}

$users = [new User('Alice'), new User('Bob', false)];
foreach (array_filter($users, fn (User $user): bool => $user->active) as $user) {
	echo $user->greeting();
}
