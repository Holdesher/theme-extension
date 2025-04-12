/* Checkout file */

type User = {
	id: number;
	name: string;
	email?: string;
};

type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = { id: 1, name: 'John' };

type PartialUser = Partial<User>;
const partialUser: PartialUser = { id: 2 };

type UserPreview = Pick<User, 'id' | 'name'>;
const userPreview: UserPreview = { id: 3, name: 'Alice' };

type UserWithoutEmail = Omit<User, 'email'>;
const userWithoutEmail: UserWithoutEmail = { id: 4, name: 'Bob' };

type UserRole = 'admin' | 'user' | 'guest';
const userRoles: Record<UserRole, string> = {
	admin: 'Administrator',
	user: 'Regular User',
	guest: 'Guest User',
};

try {
	throw new Error('Error');
} catch (error: unknown) {
	if (error instanceof Error) {
		console.log(`catch: ${error.message}`);
	}
} finally {
	console.log('finally');
}

interface IClassExample {
	property: string;
	staticMethod?(): string;
}

class ClassExample implements IClassExample {
	property: string;

	constructor() {
		this.property = 'class';
	}

	static staticMethod(): string {
		return 'static method';
	}
}

async function asyncExample(): Promise<void> {
	await new Promise<void>(resolve => setTimeout(resolve, 1000));
	console.log('async/await');
}

function* generatorExample(): Generator<string, void, unknown> {
	yield 'yield';
}

class BaseClass {
	baseProperty: string;

	constructor(baseProperty: string) {
		this.baseProperty = baseProperty;
	}

	baseMethod(): string {
		return `Base method: ${this.baseProperty}`;
	}
}

class DerivedClass extends BaseClass {
	derivedProperty: number;

	constructor(baseProperty: string, derivedProperty: number) {
		super(baseProperty);
		this.derivedProperty = derivedProperty;
	}

	derivedMethod(): string {
		return `Derived method: ${this.derivedProperty}`;
	}
}
