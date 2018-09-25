function MovingObject(option){
    this.pos = options[pos];
    this.vel = options[vel];
    this.radius = options[radius];
    this.color = options[color];
}

MovingObject.prototype.draw(ctx){
  ctx.beginPath();
  ctx.arc(100,75,50,0,2*Math.PI);
  ctx.stroke();
}



module.exports = MovingObject;