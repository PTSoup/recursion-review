// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // Definition: A string is a pair of double quotes that may have characters in between the quotes.

  //   Boolean, Number, and String objects are converted to the corresponding primitive values during stringification,
  //   in accord with the traditional conversion semantics.

  // If undefined, a Function, or a Symbol is encountered during conversion it is either omitted
  // (when it is found in an object) or censored to null
  // (when it is found in an array). JSON.stringify() can also just return undefined when passing in
  // "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined).

  // All Symbol-keyed properties will be completely ignored, even when using the replacer function.

  // The instances of Date implement the toJSON() function by returning a string (the same as date.toISOString()).
  // Thus, they are treated as strings.

  // The numbers Infinity and NaN, as well as the value null, are all considered null.

  // All the other Object instances (including Map, Set, WeakMap, and WeakSet) will have only their
  // enumerable properties serialized.

  if (obj === undefined || typeof obj === 'function') {
    return undefined;
  } else if (typeof obj === 'object' && !Array.isArray(obj)) {
  //do stuff
    // if there is an undefined or a function, omitted from object
    // key is always a string

    // iterate over the object
    // for each key, put the key into quotes
    // return the modified object with all keys and quotes
    //
    // { x: 5 }
    // key, x => "x"
    // val, 5
    //  "" + { + key + : + val + } + ""
    //  {a: 1, b: 2, c :3}


    var newObj = '';


    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      var value = obj[keys[i]];
      if (i === keys.length - 1) {
        newObj = newObj + '"' + keys[i] + '": ' + value;
      } else {
        newObj = newObj + '"' + keys[i] + '": ' + value + ', ';
      }
    }

    return '{' + newObj + '}';

  } else if (Array.isArray(obj)) {
  //do stuff
  // if there is an undefined or a function, changed to null
  } else { // assume that at this point we're dealing with a value.
    return '' + obj;
  }





};

// val
// collections
// arrays
// objects