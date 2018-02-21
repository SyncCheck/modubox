var c=document.getElementById("can");
var ctx=c.getContext("2d");

function initilize() {
ctx.fillRect(20,20,150,100);
}

class Player {
 constructor(healthMax, speed, bodyDamage, color, radius) {
 this.maxHP = healthMax;
 this.Speed = speed;
 this.smashDamage = bodyDamage;
 this.fillColor = color;
 this.size = radius;
 }
}
class boxBody extends Player {

}
