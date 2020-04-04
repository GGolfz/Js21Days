(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const setElement= (id,text)=>{
    const Ele = document.getElementById(id);
    Ele.innerText = text;
  }
  const countdown=()=>{
    const now = new Date().getTime();
    const newYear = new Date("December 31, 2020 23:59:59").getTime();
    const timeLeft = newYear - now ;
    setElement("days",Math.floor(timeLeft/DAY));
    setElement("hours",Math.floor(timeLeft%DAY/HOUR));
    setElement("minutes",Math.floor(timeLeft%HOUR/MINUTE));
    setElement("seconds",Math.floor(timeLeft%MINUTE/SECOND));
  }
  const run = () =>{
    setInterval(()=>{
      countdown();
    },1000)
  }
  run();
})();
