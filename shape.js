function Shape(x,y,text){       
    this.x = x;
    this.y = y;
    this.size = 200;
    this.text = text;
    this.placement = [];
}

Shape.prototype.getValue = function (){
    context.textAlign = "center";
    context.font = this.size +"px arial";
    context.fillText(this.text,this.x,this.y);
    var idata = context.getImageData(0,0,canvas.width,canvas.height);
    var buffer32 = new Uint32Array(idata.data.buffer);
    for(var j = 0;j<canvas.height;j+= gridY){
        for(var i = 0;i<canvas.width;i+=gridX){
           if(buffer32[j*canvas.width+i]){
               var particles = new Particle(i,j,type);
               this.placement.push(particles);
           }
        }
    }
    context.clearRect(0,0,canvas.width,canvas.height);
}