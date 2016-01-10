//JavaScript program that searches text string for name
//Pushes results into array then prints array

/*jshint multistr:true */

var text = "blah blah blah blah blah jax blah blah \
blah blah blah blah jax jax blah blah blah blah blah \
blah blah blah jax";
var myName = "jax";
var hits = [];

for (var i=0; i<text.length; i++) {
  if (text[i] === 'j') {
    for(var j = i; j < (myName.length + i); j++) {
		  hits.push(text[j]);
		}
  }
};

if (hits.length === 0) {
  console.log("Your name wasn't found!");
} else
{
  console.log(hits);
};
