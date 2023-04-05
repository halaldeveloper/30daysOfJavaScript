let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;          // Must start with
re = /World$/i;     // Must end it
re = /^hello$/i;     // Must begin & end with
re = /h.llo/i;    // Matches any ONE char
re = /h*llo/i;    // Matches any char 0 or more times
re = /gre?a?y/i;  // Optional character
re = /gre?a?y\?/i;  // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i;  // Must be an a or e
re = /[GF]ray/i;  // Must be an G or F
re = /[^GF]ray/i;  // Match anything except a G or F, the ^ inside bracket means except
re = /[A-Z]ray/;  // Match any uppercase letter
re = /[a-z]ray/;  // Match any lowercase letter
re = /[A-Za-z]ray/;  // Match any letter
re = /[0-9]ray/;     // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;     // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;     // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;     // Must occur at least {m} times

// Parenthesis () - Grouping, can be used with Quantifiers
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/;         // Word character - alphanum or _
re = /\w+/;         // + = one or more
re = /W/;           // Non-word character e.g space, exclamation
re = /\d/;          // Match any digit
re = /\d+/;         // Match any digit 0 ore more times
re = /D/;           // Match any Non-digit
re = /\s/;          // Match whitespace char
re = /\S/;          // Match non-whitespace char
re = /Jann\b/i;     // Word boundary

// Assertions
re = /x(?=y)/;     // Match x only if followed by y
re = /x(?!y)/;     // Match x only if NOT followed by y

// String to match
const str = 'Assalam alaykum, welcome x Jann';
const result = re.exec(str);
console.log(result);

// Log Results
function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT matches ${re.source}`);
    }
}

reTest(re, str);