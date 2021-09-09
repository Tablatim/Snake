function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.update = function() {
        for(var i = 0; i < this.tail.length-1; i++) {
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total-1] = createVector(this.x, this.y)

        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;
    }

    this.show = function() {
        if(this.x >= width || this.x < 0 || this.y >= height || this.y < 0) {
            gameOver()
        }
        for(var i=0; i<this.tail.length; i++) {
            if(this.x == this.tail[i].x && this.y == this.tail[i].y) {
                gameOver()
            }
        }
        fill(220,220,220)
        for(var i = 0; i < this.total; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl)
            
        }
        fill(107,142,35)
        rect(this.x, this.y, scl, scl)
    }

    this.dir = function(x, y) {
        if(this.xspeed == -x || this.yspeed == -y) return;
        this.xspeed = x;
        this.yspeed = y;
    }

    this.stop = function() {
        this.xspeed = 0;
        this.yspeed = 0;
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y)
        if (d<1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }
}

function keyPressed() {
    if(keyCode == UP_ARROW){
        s.dir(0, -1)
    } else if(keyCode == DOWN_ARROW){
        s.dir(0, 1)
    } else if(keyCode == RIGHT_ARROW){
        s.dir(1, 0)
    } else if(keyCode == LEFT_ARROW){
        s.dir(-1, 0)
    } else if(keyCode == 32 && s.xspeed == 0 && s.yspeed == 0) {
        var begin = document.getElementById("h3")
        begin.innerHTML = "<br>"
        s.xspeed = 1
    }else if(keyCode == 13){
        document.location.reload()
    }
}