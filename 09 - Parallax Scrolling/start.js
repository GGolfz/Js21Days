(() => {
  // เริ่มเขียนโค้ด
  const onScroll = ()=>{
    const moonElem = document.querySelector('.moon');
    const wishElem = document.querySelector('.wish');
    console.log(window.scrollY)
    moonElem.style.transform = `translate(${window.scrollY * 0.7}%, ${window.scrollY*-0.7}%)`;
    wishElem.style.transform = `translateY(${window.scrollY*-1.5}%)`;
  }
  const run = ()=>{
    document.addEventListener('scroll',onScroll);
  }
  run();
})();
