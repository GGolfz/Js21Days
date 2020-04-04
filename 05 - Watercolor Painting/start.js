(() => {
  // เริ่มเขียนโค้ด
  const color = document.getElementById('color');
  const text = document.getElementById('text');
  var nowcolor='#000000FF';
  const canvas = document.getElementById('painting');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const canvasContext = canvas.getContext('2d');
  let previousPoint = {x:0,y:0};
  const onMouseenter = ({pageX,pageY})=>{
    previousPoint.x = pageX;
    previousPoint.y = pageY;
  }
  const getDistance = (previousPoint,currentPoint)=>{
    return Math.sqrt((previousPoint.x - currentPoint.x)**2 + (previousPoint.y - currentPoint.y)**2);
  }
  const onMousemove = ({pageX,pageY})=>{
    const currentPoint = {x:pageX,y:pageY};
    const distance = getDistance(previousPoint,currentPoint);
    const opacity = Math.min(0.5,1/distance);
    canvasContext.beginPath();
    canvasContext.lineCap = 'round';
    canvasContext.lineJoin = 'round';
    canvasContext.lineWidth = Math.random()/distance * 40;
    canvasContext.strokeStyle = nowcolor;
    console.log(nowcolor);
    canvasContext.moveTo(previousPoint.x,previousPoint.y);
    canvasContext.lineTo(currentPoint.x,currentPoint.y);
    canvasContext.stroke();
    canvasContext.closePath();
    previousPoint = currentPoint;   
  }
  const run = ()=>{
    color.style.background = nowcolor;
    canvas.addEventListener('mouseenter',onMouseenter);
    canvas.addEventListener('mousemove',onMousemove);
    text.addEventListener('change',()=>{showColor(text.value)});
  }

  const showColor = (color2)=>{
    nowcolor = `#${color2}`;
    color.style.background = nowcolor; 
  }
  run();
})();
