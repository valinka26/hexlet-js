import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

/* if (capitalize('hello') !== 'Hello') {
	throw new Error('Функция работает неверно');
}

if (capitalize('') !== '') {
	throw new Error('Функция работает неверно');
}
console.log('Тесты пройдены'); */

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize(''), '');
