      //canvas 代码
      var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        gridX = 3,//粒子间隔X方向
        gridY = 3,//粒子间隔Y方向
        type = "rect";
         //init参数
        var message = 'Lneedy',//显示文字
            gravity = 0.1,//下坠变量
            duration = 1,//持续时间
            speed = 0.1,//跃动速度
            radius ='1%',//例子半径
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
        //实例化例子函数 文字粒子效果
        // var word = new Shape(canvas.width/2,canvas.height/2,message);
        // word.getValue();
        //实例化例子函数 文字粒子效果
        var word = new Shape(canvas.width/2,canvas.height/2);
        //路径需要放到同源网站目录下
        word.getImg('http://www.lzxcs.com:9000/canvas23/images/4.jpg');
    
        (function dramFrame(){
            window.requestAnimationFrame(dramFrame,canvas);
            context.clearRect(0,0,canvas.width,canvas.height);
            for(var i =0;i<word.placement.length;i++){
                word.placement[i].update();
            }
        }());
