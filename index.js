      //canvas 代码
      var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        gridX = 7,
        gridY = 7,
        type = "ball";
         //init参数
        var message = 'Lneedy',
            gravity = 0.1,
            duration = 1,
            speed = 0.2,
            radius ='5%',
            resolution ='',
            graVal = parseFloat(gravity),
            durVal = parseFloat(duration),
            spdVal = parseFloat(speed),
            radVal = parseFloat(radius),
            resVal = parseFloat(resolution),
            colors = [
                '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
                '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
                '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
                '#FF5722'
            ];
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //实例化例子函数
        var word = new Shape(canvas.width/2,canvas.height/2,message);
        word.getValue();
    
        (function dramFrame(){
            window.requestAnimationFrame(dramFrame,canvas);
            context.clearRect(0,0,canvas.width,canvas.height);
            for(var i =0;i<word.placement.length;i++){
                word.placement[i].update();
            }
        }());
