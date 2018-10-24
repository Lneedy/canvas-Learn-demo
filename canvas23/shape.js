function Shape(x,y,text){       
    this.x = x;
    this.y = y;
    this.size = 200;
    this.text = text;
   
    this.placement = [];
}
//图片获取
Shape.prototype.getImg = function (img){
    var imgData = new Image();
    imgData.src = img;
    // console.log(imgData);
    // document.body.appendChild(imgData);
    // context.drawImage(imgData,10,10);
    // var imgData = document.getElementById('source');
    var _this = this;
    imgData.onload = function (){
        console.log(imgData)
        // context.drawImage(imgData, 0,0,canvas.width/2,canvas.height/2);
        context.drawImage(imgData, canvas.width/3,canvas.height/6,canvas.height/2,(canvas.height*846)/(2*1024));
        _this.getPar();
    }
    
}
//文字获取
Shape.prototype.getValue = function (){
    context.textAlign = "center";
    context.font = this.size +"px arial";
    context.fillText(this.text,this.x,this.y);
    this.getPar();
}
//获取粒子
Shape.prototype.getPar = function (){
    var idata = context.getImageData(0,0,canvas.width,canvas.height);
    console.log(idata.data)
    for(var i = 0;i<idata.data.length;i+=4){
        if(idata.data[i]<=86&&idata.data[i+1]<=86&&idata.data[i+2]<=86&&idata.data[i+3]>0){
            idata.data[i]=0;
            idata.data[i+1] =0;
            idata.data[i+2]=0;
        }else{
            idata.data[i]=0;idata.data[i+1] =0;idata.data[i+2]=0;idata.data[i+3]=0;
        }
    }
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