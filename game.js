const game = {
    canvas : document.getElementById('battleField'),

    randomCricle: function(){
       return {
           x: Math.round(Math.random()*500),
           y: Math.round(Math.random()*500),
           r: Math.random()*100
       }
    },

    pen: function(){
        return this.canvas.getContext('2d'); //vẽ hình tròn bằng pen.
    },

    getRandomHex: function () {
        return Math.floor(Math.random()*255);
    },
    randomColor: function () {
        var red = this.getRandomHex();
        var green = this.getRandomHex();
        var blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green +")";
    },

    placeCircle: function(circle){
        this.pen().beginPath();
        this.pen().arc(circle.x,circle.y,circle.r, 0, 2 * Math.PI);
        this.pen().fillStyle = this.r;
        this.pen().stroke();
    },

    placeCircles: function(circle) {
        for (let c of circle) {
            this.placeCircle(this.randomCricle())
        }
    },

    randomCircles: function(){
        let cs = [];
        for (i = 0; i < 100; i++) {
            cs.push(this.randomCricle())
        }
        return cs;
    },

    setupBattleField: function () {
        this.placeCircles(this.randomCircles());
    }
}
