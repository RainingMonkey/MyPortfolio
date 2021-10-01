var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');


ctx.font = "20px Arial";
ctx.fillText("Hello World", 300, 200);
ctx.filltext='30px Tahoma'
ctx.strokeText('This is a stroked text', 500, 250);
const img = new Image();
img.src = 'Images/Leaves.jpg';
img.onload = function() {
    ctx.drawImage(img, 500, 400)
}