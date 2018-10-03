// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// document.body.childNodes = ['text', '<div> class='class'', '<div> class='stuff'']

// getElementsbyClassName('class');

var getElementsByClassName = function(className) { //=> 'class'
// your code here

// iterate over document comprised of tags with classnames (nested)
  // Evaluate if the element contains the given the className
  // base case: 
  // contains className
  // then check to see if the element has children. 
  // iterate over children of those nodes
  // check to see if the child contains className
  // if contains className, push to output
  // if no children, end program and return output


  var output = []; // [body.targetClassName]
  //var node = node || document.body;
  var searchNode = function(node) {
    node = node || document.body;
    for (var i = 0; i < node.length; i++) {
      if (node.className.toString().includes(className)) {
        console.log('this code is accessible');
        console.log(output);
        output.push(node[i]); // node
        // if (node.children[i].hasChildNodes)  {
        //   console.log('running if statement');
        //   searchNode(node.children[i]);
        // } else { 
        //   return false;
        // }
      } 
    } 
  };
  searchNode();
  return output;
};

// output = [body.targetClassName, div.targetClassName]
// body - targetClassName - > body.targetClassName
  // div
  // div - targetClassName -> div.targetClassName
  // div
  // div
  // div