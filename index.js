window.onload = function (){
    function Shape(x,y,text,context,canvas){
       
        this.x = x;
        this.y = y;
        this.size = 200;
        this.text = text;
        this.placement = [];
        this.context = context;
        this.canvas = canvas;
    }
      //canvas 代码
      var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        gridX = 7,
        gridY = 7,
        type = "ball";
        
         //init参数
         var obj = {
            message : 'Lneedy',
        gravity :1,
        duration: 2,
        speed: 0.2,
        radius:'50%',
        resolution :'',
        graVal: parseFloat(this.gravity),
        durVal:parseFloat(this.duration),
        spdVal:parseFloat(this.speed),
        radVal:parseFloat(this.radius),
        resVal: parseFloat(this.resolution),
        colors : [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
'#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
'#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
'#FF5722'
        ]
         };
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        Shape.prototype.getValue = function (){
       
        this.context.textAlign = "center";
        this.context.font = this.size +"px arial";
        this.context.fillText(this.text,this.x,this.y);
        var idata = context.getImageData(0,0,this.canvas.width,canvas.height);
        var buffer32 = new Uint32Array(idata.data.buffer);
        for(var j = 0;j<canvas.height;j+= gridY){
            for(var i = 0;i<canvas.width;i+=gridX){
               if(buffer32[j*canvas.width+i]){
                  
                   var particles = new Particle(i,j,type,obj,context);
                   this.placement.push(particles);
               }
            }
        }
        context.clearRect(0,0,canvas.width,canvas.height);
    }
         var word = new Shape(canvas.width/2,canvas.height/2,obj.message,context,canvas);
        word.getValue();
    
    (function dramFrame(){
       window.requestAnimationFrame(dramFrame,canvas);
       context.clearRect(0,0,canvas.width,canvas.height);
       for(var i =0;i<word.placement.length;i++){
           word.placement[i].update();
       }
    }())

    function change (){
        context.clearRect(0,0,canvas.width,canvas.height);
        gridX = parseFloat(obj.resolution);
        gridY = parseFloat(obj.resolution);
        word.placement = [];
        word.text = message;
        word.getValue();
    }

    function changeV(){
        obj.graVal = parseFloat(obj.gravity);
        obj.durVal = parseFloat(obj.duration);
        obj.spdVal = parseFloat(obj.speed);
        obj.radVal = parseFloat(obj.radius);
    }

};
