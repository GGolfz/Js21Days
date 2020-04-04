(() => {
  const setup = ()=>{
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return {
      canvas,
      canvasContext : canvas.getContext('2d'),
      numberOfSnowball :250

    }
  }
  const random = (start,end)=>{
    return Math.floor(Math.random() * (end-start+1))+start;
  }
  const createShootingStar = (canvas)=>{
    return [...Array(3)].map(()=>{
      return{
        X: random(canvas.width-200,canvas.width),
        Y: 5,
        speedX: random(-3,-1),
        radius: 4,
        opacity: 0,
        speedOp: 0.05
      }
    });
  }
  const drawShootingStar =(canvasContext)=>{
    return (shootingStar)=>{
      canvasContext.beginPath();
      canvasContext.arc(shootingStar.X, shootingStar.Y,shootingStar.radius,0,Math.PI*2);
      canvasContext.fillStyle = `rgba(255, 255, 255 ,${shootingStar.opacity}`;
      canvasContext.fill();
    }
  }
  const moveShootingStar =(canvas,canvasContext)=>{
    return (shootingStar)=>{
      shootingStar.X+=shootingStar.speedX;
      shootingStar.Y+=Math.abs(shootingStar.speedX);
      shootingStar.opacity+=shootingStar.speedOp;
      if(shootingStar.opacity >=1){
        shootingStar.speedOp = -0.1;
      }
      if(shootingStar.opacity<-0.1){
        shootingStar.Y = 0;
        shootingStar.opacity = 0;
        shootingStar.speedOp = 0.05;
        shootingStar.X = random(canvas.width-200,canvas.width);
        shootingStar.speedX = random(-3,-1);  
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }
  const createSnowball = (canvas,numberOfSnowball)=>{
    return [...Array(numberOfSnowball)].map(()=>{
      return {
        X: random(0,canvas.width),
        Y: random(0,canvas.height),
        opacity: random(0,1),
        speedX: random(-3,3),
        speedY: random(1,3),
        radius: random(2,4)
      }
    });
  }
  const drawSnowball = (canvasContext)=>{
    return (snowBall) => {
      canvasContext.beginPath();
      canvasContext.arc(snowBall.X,snowBall.Y,snowBall.radius,0,Math.PI*2);
      canvasContext.fillStyle = `rgba(255,255,255,${snowBall.opacity})`;
      canvasContext.fill();
    };
  }
  const moveSnowball = (canvas)=>{
    return (snowBall) =>{
      snowBall.x += snowBall.speedX;
      snowBall.Y += snowBall.speedY;
      if(snowBall.X < 0){
        snowBall.X = canvas.width;
      }
      else if(snowBall.X > canvas.width){
        snowBall.X = 0;
      }
      if(snowBall.Y > canvas.height){
        snowBall.Y = 0;
      }
    };
  }
  const run = ()=>{
    const {canvas,canvasContext,numberOfSnowball} = setup();
    const snowBalls = createSnowball(canvas,numberOfSnowball);
    const draw = drawSnowball(canvasContext);
    const move = moveSnowball(canvas);
    const shootingStars = createShootingStar(canvas);
    const draws = drawShootingStar(canvasContext);
    const moves = moveShootingStar(canvas,canvasContext);
    
    setInterval(()=>{
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      snowBalls.forEach(draw);
      snowBalls.forEach(move);
    },50);
    // setInterval(()=>{
    //   shootingStars.forEach(draws);
    //   shootingStars.forEach(moves);
    // },50);
  }
  run();
})();
