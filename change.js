var img2 = new Image;
img2.src = "images/body_color.png";

function conv(){

var canvas = document.getElementById("canvas"),
    image = document.getElementById("testImage"),
    savedImageData = document.getElementById("imageData");

ctx = canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.drawImage(img2,0,0);
ctx.drawImage(image,0,0);
  
var imgd = ctx.getImageData(0, 0, canvas.width, canvas.height),
    pix = imgd.data,
    uniqueColor = [255,200,0]; // Blue for an example, can change this value to be anything.

// Loops through all of the pixels and modifies the components.
for (var i = 0, n = pix.length; i <n; i += 4) {
    if ((pix[i]==255) && (pix[i+1]==200) && (pix[i+2]==162)) {
        imgd.data[i] = uniqueColor[0];   // Red component
        imgd.data[i+1] = uniqueColor[1]; // Blue component
        imgd.data[i+2] = uniqueColor[2]; // Green component
    }
}
ctx.putImageData(imgd, 0, 0);

savedImageData.src = canvas.toDataURL("image/png"); 
}
