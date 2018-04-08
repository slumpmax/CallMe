$(document).ready(function(){

function ImageSwitcher(choices, i) {
	i = 0;
	
	this.Next = function() {
		hide_current_image();
		show_next_image();
	}
	this.Select = function(n) {
		hide_current_image();
		if(n>0) {
			i = n - 1;
			show_next_image();
		}
	}
	
	var hide_current_image = function() {
		if(choices){
			choices[i].style.visibility = "hidden";
			i += 1;
		}
	}
	var show_next_image = function() {
		if(choices){
			if(i == (choices.length)) {
				i = 0;
			}
			choices[i].style.visibility = "visible";
		}
	}
}
  
  var hairs = $(".hair");
  var foreheads = $(".forehead");
  var collars = $(".collar");
  var sleeves = $(".sleeve");
  var chairs = $(".chair");
  var cforeheads = $(".cforehead");
  var ccollars = $(".ccollar");
  var csleeves = $(".csleeve");

  var chair_picker = new ImageSwitcher(chairs);
  var cforehead_picker = new ImageSwitcher(cforeheads);
  var ccollar_picker = new ImageSwitcher(ccollars);
  var csleeve_picker = new ImageSwitcher(csleeves);

  var hair_picker = new ImageSwitcher(hairs);
  document.getElementById("hair_button").onclick = function() { hair_picker.Next(); chair_picker.Next()};
	
  var forehead_picker = new ImageSwitcher(foreheads);
  document.getElementById("forehead_button").onclick = function() {forehead_picker.Next(); cforehead_picker.Next(); };

  var collar_picker = new ImageSwitcher(collars);
  document.getElementById("collar_button").onclick = function() {collar_picker.Next(); ccollar_picker.Next(); };

  var sleeve_picker = new ImageSwitcher(sleeves);
  document.getElementById("sleeve_button").onclick = function() {sleeve_picker.Next(); csleeve_picker.Next(); };

hair_picker.Select(1);
forehead_picker.Select(1);
collar_picker.Select(1);
sleeve_picker.Select(1);

chair_picker.Select(1);
cforehead_picker.Select(1);
ccollar_picker.Select(1);
csleeve_picker.Select(1);
});
