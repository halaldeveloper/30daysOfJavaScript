// REGULAR EXPRESSIONS

let re;
re = /hello/;
re = /hello/i; // i = makes case insensitive
// re = /hello/g; // global search

// console.log(re);
// console.log(re.source);

// exec() - will return result in an array or null
// const result = re.exec('hello world');

// console.log(result);

// test() - will return true or false
// const result = re.test('Hello');
// console.log(result);

// match() - will return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - will return index of first match if not returns -1
// const str = 'Abdulsalam Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - will return a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);