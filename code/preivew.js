/* Checkout file */

var varExample = true && false;
let letExample = true || false;
const constExample = !true;

if (true) {
	console.log('log');
}

switch (letExample) {
	case 20:
		console.log('switch case');
		break;
	default:
		console.log('default case');
}

for (let i = 0; i < 5; i++) {
	console.log('for');
}

function functionExample() {
	return 'function example';
}
const arrowFunction = () => 'arrow function';

try {
	throw new Error('Error');
} catch (error) {
	console.log('catch');
} finally {
	console.log('finally');
}

class ClassExample {
	constructor() {
		this.property = 'class';
	}
	static staticMethod() {
		return 'static method';
	}
}
const instance = new ClassExample();
console.log(instance.property);
console.log(ClassExample.staticMethod());

async function asyncExample() {
	await new Promise(resolve => setTimeout(resolve, 1000));
	console.log('async/await');
}

function* generatorExample() {
	yield 'yield';
}
const generator = generatorExample();
console.log(generator.next().value);
