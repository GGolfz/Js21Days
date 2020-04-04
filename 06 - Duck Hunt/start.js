(() => {
  // เริ่มเขียนโค้ด
  var starttime = 0;
  const random = (min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min;
  }
  const createDucks = (numofDuck,speedX,speedY)=>{
    return [...Array(numofDuck)].map(()=>{
      return{
        x:random(0,window.innerWidth),
        y:window.innerHeight,
        speedX: random(-1*speedX,speedX),
        speedY: random(speedY/2,speedY)
      }
    });

  }
  const getDuckBackgroundImage = (duck,duckElem)=>{
    const direction = duck.speedX > 0 ? 'right': 'left';
    return duckElem.style.backgroundImage.indexOf('1')!== -1?
    `url(./${direction}-2.png)` :
    `url(./${direction}-1.png)` ;
    
  }
  const setupDuckElement = (duck)=>{
    const duckElem = document.createElement('div');
    duckElem.className = 'duck';
    duckElem.style.left = `${duck.x}px`;
    duckElem.style.top = `${duck.y}px`;
    document.body.appendChild(duckElem);
    return { duck, duckElem };
  }
  const moveDuck = (duckElem,duck)=>{
    const { left, top } = duckElem.getBoundingClientRect();
    const outOfBoundX = duck.x < 0 || duck.x > window.innerWidth;
    const outOfBoundY = duck.y < 0 || duck.y > window.innerHeight;

    if (outOfBoundX) {
      duck.speedX *= -1;
    }

    if (outOfBoundY) {
      duck.speedY *= -1;
    }
    duck.x = left + duck.speedX;
    duck.y = top - duck.speedY;
    duckElem.style.left = `${duck.x}px`;
    duckElem.style.top = `${duck.y}px`;
    duckElem.style.backgroundImage = getDuckBackgroundImage(duck,duckElem);
  }
  const shootDuck = (event)=>{
    const duckElem = event.target;
    duckElem.style.transition = 'top 2s';
    duckElem.style.top = `${window.innerHeight}px`;
    clearInterval(duckElem.interval);
    setTimeout(()=>{
      document.body.removeChild(duckElem);
      const duck = document.querySelector('.duck');
      if(!duck){
        const end = new Date().getTime();
        const diff = end - starttime;
        const mins = Math.floor(diff/60000);
        const seconds = Math.floor((diff%60000)/1000);
        const time = document.getElementById('time');
        time.innerText = mins >0 ? mins + " minutes : "+ seconds + " seconds" : seconds + " seconds";
        time.style.opacity = 1;
        const winner = document.querySelector('.winning');
        winner.style.opacity = 1;
      }
    },2000)

  }
  const run = (numofDuck,speedX,speedY)=>{
    starttime = new Date().getTime();
    document.body.removeChild(document.querySelector('.mode'));
    document.body.removeChild(document.querySelector('.title'));
    const ducks = createDucks(numofDuck,speedX,speedY);
    const duckElems = ducks.map(setupDuckElement)
    duckElems.forEach(({duck,duckElem})=>{
      duckElem.interval = setInterval(()=>{
        moveDuck(duckElem,duck);
      },100);
      duckElem.addEventListener('click', shootDuck);
    })
  }
  const start = ()=>{
    const m1 = document.getElementById('1');
    const m2 = document.getElementById('2');
    const m3 = document.getElementById('3');
    m1.addEventListener('click',()=>{
      run(5,50,10);
    })
    m2.addEventListener('click',()=>{
      run(8,100,20);
    })
    m3.addEventListener('click',()=>{
      run(12,150,30);
    })
  }
  start();
})();
