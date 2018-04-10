var tempCanvas = document.createElement('canvas');
window.addEventListener("load", startup, false);

var colorHair, colorBody, colorCloth, colorName, canvas, ctx;

var HairType = 2, 	MaxHair = 17;
var ForeheadType = 3, 	MaxForehead = 6;
var SleeveType = 2, 	MaxSleeve = 5;
var CollarType = 2, 	MaxCollar = 5;

var BodyColor = [255, 217, 147];
var HairColor = [128, 64, 64];
var ClothColor = [17, 188, 238];
var NameColor = [255, 0, 0];

var imgBodyColor = new Image;
imgBodyColor.src = "images/body_color.png";
var imgHairColor = [];
for (var i=1; i<=MaxHair; i++) {
	imgHairColor[i] = new Image;
	imgHairColor[i].src = "images/color_hair" + ("0" + i).slice(-2) + ".png";
}
var imgForeheadColor = [];
for (var i=1; i<=MaxForehead; i++) {
	imgForeheadColor[i] = new Image;
	imgForeheadColor[i].src = "images/color_forehead" + ("0" + i).slice(-2) + ".png";
}
var imgSleeveColor = [];
for (var i=1; i<=MaxSleeve; i++) {
	imgSleeveColor[i] = new Image;
	imgSleeveColor[i].src = "images/color_sleeve" + ("0" + i).slice(-2) + ".png";
}
var imgCollarColor = [];
for (var i=1; i<=MaxCollar; i++) {
	imgCollarColor[i] = new Image;
	imgCollarColor[i].src = "images/color_collar" + ("0" + i).slice(-2) + ".png";
}

var imgBody = new Image;
imgBody.src = "images/body.png";
var imgHair = [];
for (var i=1; i<=MaxHair; i++) {
	imgHair[i] = new Image;
	imgHair[i].src = "images/hair" + ("0" + i).slice(-2) + ".png";
}
var imgForehead = [];
for (var i=1; i<=MaxForehead; i++) {
	imgForehead[i] = new Image;
	imgForehead[i].src = "images/forehead" + ("0" + i).slice(-2) + ".png";
}
var imgSleeve = [];
for (var i=1; i<=MaxSleeve; i++) {
	imgSleeve[i] = new Image;
	imgSleeve[i].src = "images/sleeve" + ("0" + i).slice(-2) + ".png";
}
var imgCollar = [];
for (var i=1; i<=MaxCollar; i++) {
	imgCollar[i] = new Image;
	imgCollar[i].src = "images/collar" + ("0" + i).slice(-2) + ".png";
}

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
function rgbToHex(c) {return "#" + ((1 << 24) + (c[0] << 16) + (c[1] << 8) + c[2]).toString(16).slice(1);}

function startup() {
	canvas = document.getElementById("canvas");
    	ctx = canvas.getContext("2d");

  	colorHair = document.querySelector("#colorHair");
  	colorHair.value = rgbToHex(HairColor);
  	colorHair.addEventListener("change", updateHairColor, false);
  	colorHair.select();

 	colorBody = document.querySelector("#colorBody");
  	colorBody.value = rgbToHex(BodyColor);
  	colorBody.addEventListener("change", updateBodyColor, false);
  	colorBody.select();

 	colorCloth = document.querySelector("#colorCloth");
  	colorCloth.value = rgbToHex(ClothColor);
  	colorCloth.addEventListener("change", updateClothColor, false);
  	colorCloth.select();

 	colorName = document.querySelector("#colorName");
  	colorName.value = rgbToHex(NameColor);
  	colorName.addEventListener("change", updateNameColor, false);
  	colorName.select();

  	document.querySelector("#buttonHair").addEventListener("click", updateHair, false);
 	document.querySelector("#buttonForehead").addEventListener("click", updateForehead, false);
 	document.querySelector("#buttonSleeve").addEventListener("click", updateSleeve, false);
 	document.querySelector("#buttonCollar").addEventListener("click", updateCollar, false);
 
	updateChar();
}

function drawColor(ctx, img, clr) {
	tempCanvas.width = img.width;
	tempCanvas.height = img.height;
	var tempContext = tempCanvas.getContext("2d");
	tempContext.drawImage(img, 0, 0);
	var tempImgd = tempContext.getImageData(0, 0, img.width, img.height);
	var tempPix = tempImgd.data;
	for (var i = 0, n = tempPix.length; i <n; i += 4) {
		tempPix[i] = clr[0];   // Red component
		tempPix[i+1] = clr[1]; // Blue component
		tempPix[i+2] = clr[2]; // Green component
//		tempPix[i+3] = 255;
	}	
	tempContext.putImageData(tempImgd, 0, 0);
	ctx.drawImage(tempCanvas, 0, 0);
}

function updateChar(){
	if(HairType > MaxHair) HairType = 1;
	if(ForeheadType > MaxForehead) ForeheadType = 1;
	if(CollarType > MaxCollar) CollarType = 1;
	if(SleeveType > MaxSleeve) SleeveType = 1;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawColor(ctx, imgBodyColor, BodyColor);
	drawColor(ctx, imgForeheadColor[ForeheadType], HairColor);
	drawColor(ctx, imgHairColor[HairType], HairColor);
	drawColor(ctx, imgSleeveColor[SleeveType], ClothColor);
	drawColor(ctx, imgCollarColor[CollarType], ClothColor);
	ctx.drawImage(imgBody, 0, 0);
	ctx.drawImage(imgForehead[ForeheadType], 0, 0);
	ctx.drawImage(imgHair[HairType], 0, 0);
	ctx.drawImage(imgSleeve[SleeveType], 0, 0);
	ctx.drawImage(imgCollar[CollarType], 0, 0);
}

function updateHairColor(event) {
	var c = event.target.value;
	HairColor[0] = hexToR(c);
	HairColor[1] = hexToG(c);
	HairColor[2] = hexToB(c);
	updateChar();
 }

function updateBodyColor(event) {
	var c = event.target.value;
	BodyColor[0] = hexToR(c);
	BodyColor[1] = hexToG(c);
	BodyColor[2] = hexToB(c);
	updateChar();
 }

function updateClothColor(event) {
	var c = event.target.value;
	ClothColor[0] = hexToR(c);
	ClothColor[1] = hexToG(c);
	ClothColor[2] = hexToB(c);
	updateChar();
 }

function updateNameColor(event) {
	var c = event.target.value;
	NameColor[0] = hexToR(c);
	NameColor[1] = hexToG(c);
	NameColor[2] = hexToB(c);
	updateChar();
 }

function updateHair(event){
	HairType += 1;
	updateChar();
}

function updateForehead(event){
	ForeheadType += 1;
	updateChar();
}

function updateSleeve(event){
	SleeveType += 1;
	updateChar();
}

function updateCollar(event){
	CollarType += 1;
	updateChar();
}
