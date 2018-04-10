var img2 = new Image;
img2.src = "images/body_color.png";

function conv(){

var canvas = document.getElementById("canvas"),
    image = document.getElementById("testImage"),
    savedImageData = document.getElementById("imageData");

ctx = canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width,canvas.height);
var map2 = img2.getImageData(0,0,img2.width,img2.height);
var pix2 = map2.data;
//ctx.drawImage(img2,0,0);

  
var imgd = ctx.getImageData(0, 0, canvas.width, canvas.height),
    pix = imgd.data,
    uniqueColor = [255,200,192]; // Blue for an example, can change this value to be anything.

// Loops through all of the pixels and modifies the components.
for (var i = 0, n = pix.length; i <n; i += 4) {
    if (pix2[i+3]!=0){
        imgd.data[i] = uniqueColor[0];   // Red component
        imgd.data[i+1] = uniqueColor[1]; // Blue component
        pix[i+2] = uniqueColor[2]; // Green component
    }
}
ctx.putImageData(imgd, 0, 0);
ctx.drawImage(image,0,0);

savedImageData.src = canvas.toDataURL("image/png"); 
}
