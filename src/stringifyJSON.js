// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  } else if (obj === undefined || typeof obj === 'function') {
    return undefined;
  } else if (obj === null ) {
    return '' + null;
  } else if (typeof obj === 'object' && !Array.isArray(obj)) {
    var newObj = '';
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {

      var value = stringifyJSON(obj[keys[i]]);

      if (!(value === undefined || typeof value === 'function')) {
        if (i === keys.length - 1) {
          newObj = newObj + '"' + keys[i] + '":' + value;
        } else {
          newObj = newObj + '"' + keys[i] + '":' + value + ',';
        }
      }
    }

    return '{' + newObj + '}';

  } else if (Array.isArray(obj)) {
    var newArray = [];

    for ( var i = 0; i < obj.length; i++) {
      newArray.push(stringifyJSON(obj[i]));
    }
    return '[' + newArray + ']';

  }

};