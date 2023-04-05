const user = {email: 'pkdot@gmail.com'};

try {
    // This will produce a Reference Error
    // myFunction();

    // Produce a typeError
    // null.myFunction();

    // Will produce Syntax error
    // eval('Hello World');

    // Will produce a URI Error
    // decodeURIComponent('%');

    if (!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }

} catch (e) {
    console.log(`User Error: ${e.message}`);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof TypeError);
    // console.log(`${e.name}: IT IS NULL BRO!!!`);
} finally {
    console.log('Finally runs regardless of result...')
}

console.log('Program continues...');