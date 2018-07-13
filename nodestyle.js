

// Style settings to set each node based on some informaion
// in this case the 'group' number
var groupStyle = {
	"one" : {  
		"radius" : 10,
		"fill" : "#1BD8FF",
		"stroke" : "#FEFEFE",
		"strokeWidth" : "1.5px"
	},
	"two" : {  
		"radius" : 10,
		"fill" : "#FF1B9D",
		"stroke" : "#FEFEFE",
		"strokeWidth" : "1.5px"
	},
	"three" : {  
		"radius" : 10,
		"fill" : "#3E1BFF",
		"stroke" : "#FEFEFE",
		"strokeWidth" : "1.5px"
	},
	"four" : {  
		"radius" : 10,
		"fill" : "#FF721B",
		"stroke" : "#FEFEFE",
		"strokeWidth" : "1.5px"
	},
	"five" : {  
		"radius" : 5,
		"fill" : "#1BFFAC",
		"stroke" : "#FEFEFE",
		"strokeWidth" : "1.5px"
	},
	"six" : {  
		"radius" : 5,
		"fill" : "#1BD8FF",
		"stroke" : "#FEFEFE",
		"strokeWidth" : "1.5px"
	},
	"seven" : {  
		"radius" : 5,
		"fill" : "#A01BFF",
		"stroke" : "#FEFEFE",
		"strokeWidth" : "1.5px"
	},
	"eight" : {  
		"radius" : 5,
		"fill" : "#FFDC1B",
		"stroke" : "#A01BFF",
		"strokeWidth" : "3px"
	}
}


// Handles logic for assigning styles based on data
function DataToStyle(dataGroup) {
	switch (dataGroup) {
		case 1:
			return groupStyle.one;
		case 2:
			return groupStyle.two;
		case 3:
			return groupStyle.three;
		case 4:
			return groupStyle.four;
		case 5:
			return groupStyle.five;
		case 6:
			return groupStyle.six;
		case 7:
			return groupStyle.seven;
		case 8:
			return groupStyle.eight;
		default:
			return groupStyle.eight; // For heigher groups, default to 8’s styling
	}
}



// Call this when we want to update our styles

// This is iterating through 
// the nodes and styling them dynamically
// It’s modifying things afterwords on top of D3 so it’s a little gross
function ModifyGraph() {


	// Look for the SVG <g> element that's parent of our links and nodes!
	// and grab an array of all the children
	var graphLinks = document.getElementsByClassName("links")[0].children;
	var nodes = document.getElementsByClassName("nodes")[0].children;

	// console.log(graphLinks);
	// console.log(nodeLines);

	// For every link 
	for (var i = 0; i < graphLinks.length; i++) {

		// Make the links cyan
		// graphLinks[i].style.stroke = "cyan";
	}

	// For every node 
	for (var i = 0; i < nodes.length; i++) {

		// If the node is in group 1
		if (nodes[i].getAttribute('group') == 1) {

			// Style it red and blue and make it huge
			nodes[i].style.fill = "red";	
			nodes[i].style.stroke = "blue";	
			nodes[i].style.strokeWidth = 3;	
			nodes[i].style.r = 20;
		}

	}

}