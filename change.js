var img2 = new Image,
  canvas2 = document.createElement('canvas'),
  ctx2 = canvas2.getContext("2d"),
  map2 = ctx2.getImageData(0,0,canvas2.width,canvas2.height),
  pix2 = map2.data;

img2.src = "images/body_color.png",
canvas2.width = img2.width;
canvas2.height = img2.height;
ctx2.drawImage(img2,0,0);

// Loops through all of the pixels and modifies the components.
for (var i = 0, n = pix2.length; i <n; i += 4) {
        map2.data[i] = uniqueColor[0];   // Red component
        pix2[i+1] = uniqueColor[1]; // Blue component
        pix2[i+2] = uniqueColor[2]; // Green component
}
ctx2.putImageData(map2, 0, 0);

function conv(){

var canvas = document.getElementById("canvas"),
    image = document.getElementById("testImage"),
    savedImageData = document.getElementById("imageData"),
    ctx = canvas.getContext("2d"),
    uniqueColor = [255,200,192]; // Blue for an example, can change this value to be anything.

ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.drawImage(img2,0,0);
ctx.drawImage(image,0,0);

savedImageData.src = canvas.toDataURL("image/png"); 
}
