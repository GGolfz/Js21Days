(() => {
  // เริ่มเขียนโค้ด
  konami = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ]
  let index =0;
  const onkeydown = (event)=>{
    event.key === konami[index] ? index++ :index = 0;
    if(konami.length ===index){
      startSnowing();
    }
  }
  const run = ()=>{
    document.addEventListener('keydown',onkeydown);
  }
  run();
})();
