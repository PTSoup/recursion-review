// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
// your code here
// iterate over document comprised of tags with classnames (nested)
// document arranged in a tree
// iterate over the first node
// iterate children of those nodes
// when node has no descendants, stop iterating.
// if className match with that element, add to results output
// return the results output
  var output = [];
  var node = node || document.body;
  var searchNode = function() {
    node = node || document.body;
    for (var i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].className && node.childNodes[i].className.toString().includes(className)) {
        output.push(node.childNodes[i]);
        if (node.childNodes[i].hasChildNodes()) {
          searchNode(node.children[i]);
        } else { 
          return false;
        }
      } 
    } 
  };
  searchNode();
  return output;
};
