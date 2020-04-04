(() => {
  // เริ่มเขียนโค้ด
  const run = ()=>{
    const body = document.querySelector('body');
    const eyeElement = document.querySelectorAll('.eye');
    const onMouseMove = ({pageX ,pageY})=>{
      eyeElement.forEach((eyeElement)=>{
        const {left,top} = eyeElement.getBoundingClientRect();
        const eyeCenterX = left + eyeElement.offsetWidth/2;
        const eyeCenterY = top + eyeElement.offsetHeight/2;
        const radian = Math.atan2(pageX-eyeCenterX,pageY-eyeCenterY);
        const angle = radian/Math.PI * - 180;
        eyeElement.style.transform = `rotate(${angle}deg)`;
      });
    }
    body.addEventListener('mousemove',onMouseMove);
  }
  run();

})();
