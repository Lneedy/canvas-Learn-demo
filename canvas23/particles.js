function Particle(x, y, type) {
  this.radius = 1.1;//默认radius大小
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.dying = false;//为true radius不再增大
  this.base = [x, y];//默认位置
  this.futurRadius = utils.randomInt(radVal, radVal+3); //[1.1,5.1] //最大的半径
  this.type = type;//ball rect
  this.friction = .99;//自定义的摩擦力 
  this.color = colors[Math.floor(Math.random() * colors.length)];//随机颜色
  this.getSpeed = function() {
    //获得速度
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  };
  this.setSpeed = function(speed) {
     //设置速度
    var heading = this.getHeading();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  };
  this.getHeading = function() {
    //获得角度
    return Math.atan2(this.vy, this.vx);
  };
  this.setHeading = function(heading) {
     //求速度各向量的值,设置偏转角度
    var speed = this.getSpeed();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  };
  this.update = function(heading) {
    //重置粒子
    //弹性效果
    this.x += this.vx;
    this.y += this.vy;
    this.vy += graVal;
    this.vx *= this.friction;
    this.vy *= this.friction;
    if(this.radius < this.futurRadius && this.dying === false){
      this.radius += durVal;
    }else{
      this.dying = true;
    }
    //当到达最大时迅速变小
    if(this.dying === true){
      this.radius -= durVal;
    }
    //粒子为圆
    if(type === "ball"){
      context.save();
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
      context.closePath();
      context.fill();
      context.restore();
    }
    //粒子为正方形
    if(type === "rect"){
      context.save();
      context.fillStyle = this.color;
      context.beginPath();
      context.fillRect(this.x, this.y, this.futurRadius, this.futurRadius)
      context.closePath();
      context.fill();
      context.restore();
    }
    //当粒子半径小于1 或者y坐标小于0
    if (this.y < 0 || this.radius < 1) {
      this.x = this.base[0];
      this.y = this.base[1];
      this.dying = false;
      this.radius = 1.1;
      this.setSpeed(spdVal);
      this.futurRadius = utils.randomInt(radVal, radVal+3);  
      //先角度转夹角弧度值,再进行求坐标点
      this.setHeading(utils.randomInt(utils.degreesToRads(0), utils.degreesToRads(360)));
    }
  }
  this.setSpeed(utils.randomInt(.1, .5));
  this.setHeading(utils.randomInt(utils.degreesToRads(0), utils.degreesToRads(360)));
}
