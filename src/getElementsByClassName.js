// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// document.body.childNodes = ['text', '<div> class='class'', '<div> class='stuff'']

// getElementsbyClassName('class');

var getElementsByClassName = function(className) {
  var output = [];

  var searchNode = function(node) {

    node = node || document;
    if (node.hasChildNodes()) {
      for (var i = 0; i < node.childNodes.length; i++) {
        if (String(node.childNodes[i].className).includes(className)) {
          output.push(node.childNodes[i]);
        }
        searchNode(node.childNodes[i]);
      }
    }
  };
  searchNode();
  return output;
};