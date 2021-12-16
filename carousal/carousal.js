let current = $("img").attr("src");
console.log(current);
// Add your images to this array
const images = ["1.jpg","2.jpg","3.jpg"];
// slide is equal to 0 initally which means that it will get index 0 image
let slide = 0;

// for next slide logic
// Make onclick function with id "next"
$("#next").click(function() {	
	if(slide === images.length-1) {
			$("img").attr("src", images[slide]);		
	} else {
		slide = slide + 1;
		$("img").attr("src", images[slide])
	}
});


// for previous slide logic
// Make onclick function with id "prev"
$("#prev").click(function() {	
	if(slide === 0) {
			$("img").attr("src", images[slide]);		
	} else {
		slide = slide - 1;
		$("img").attr("src", images[slide])
	}
});