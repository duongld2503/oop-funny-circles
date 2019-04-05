function circle(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

// function creatCircle() {
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var circle= new Circle(500, 500, 80);
//
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fill();
// }
// creatCircle();


// function creatCircle1() {
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var radius1 = Math.floor(Math.random()*80);
//     var circle1 = new circle(500,500,radius1);
//
//     ctx.beginPath();
//     ctx.arc(circle1.x, circle1.y, circle1.radius, 0, 2*Math.PI );
//     ctx.fill();
// }
// creatCircle1();

function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function creatCircle2() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var color = getRandomColor();
    var radius = Math.floor(Math.random()*80);
    var circle2 = new circle(500,500,radius);

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(circle2.x,circle2.y,circle2.radius,0,2*Math.PI);
    ctx.fill()

}

creatCircle2();

function creatCircle3() {
    var ctx = document.getElementById('myCanvas').getContext('2d');
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    var color = getRandomColor();
    var radius = Math.floor(Math.random()*80);
    var circle3 = new circle(x,y,radius);

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(circle3.x,circle3.y,circle3.radius,0,2*Math.PI);
    ctx.fill();
}

function creatCircleMutiple() {
    for (i=0,i<30;i++){
        creatCircle3();
    }
}

creatCircleMutiple()

