import { cleanPath } from './cleanPath';

console.assert(cleanPath('C:/A/B/C/D/../123.txt') == 'C:/A/B/C/123.txt');
console.assert(cleanPath('C:/A/B/C/../D/../123.txt') == 'C:/A/B/123.txt');
console.assert(cleanPath('C:/A/B/C/D/./123.txt') == 'C:/A/B/C/D/123.txt');
console.assert(cleanPath('C:/A/B/C/D/../../../../123.txt') == 'C:/123.txt');
console.assert(cleanPath('C:/A/B/C/D//123.txt') == 'C:/A/B/C/D/123.txt');
console.assert(cleanPath('../D/../123.txt') == '../123.txt');
console.assert(cleanPath('../../123.txt') == '../../123.txt');

console.log('Test Passed!');
