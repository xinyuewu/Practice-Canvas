var width = 700;
var height = 500;
var radius = 5;
var marginTop = 50;
var marginLeft = 25;

var canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;

var context = canvas.getContext("2d");
if (context) {

    window.setInterval(function () {

        context.clearRect(marginLeft, marginTop, 107 * (radius + 1), 20 * (radius + 1));

        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        context.fillStyle = "#005588";
        draw(marginLeft, marginTop, Math.floor(hours / 10));
        draw(marginLeft + 15 * (radius + 1), marginTop, Math.floor(hours % 10));
        draw(marginLeft + 30 * (radius + 1), marginTop, 10); // :
        draw(marginLeft + 39 * (radius + 1), marginTop, Math.floor(minutes / 10));
        draw(marginLeft + 54 * (radius + 1), marginTop, Math.floor(minutes % 10));
        draw(marginLeft + 69 * (radius + 1), marginTop, 10); // :
        draw(marginLeft + 78 * (radius + 1), marginTop, Math.floor(seconds / 10));
        draw(marginLeft + 93 * (radius + 1), marginTop, Math.floor(seconds % 10));

    }, 1000);
}

function draw(startX, startY, num) {
    for (var row = 0; row < digit[num].length; row++) {
        for (let col = 0; col < digit[num][row].length; col++) {
            if (digit[num][row][col]) {
                let x = startX + (2 * col + 1) * (radius + 1); // = startX + (radius + 1) + col * 2 * (radius + 1)
                let y = startY + (2 * row + 1) * (radius + 1);
                context.beginPath();
                context.arc(x, y, radius, 0, 2 * Math.PI);
                context.fill();
            }
        }
    }
}