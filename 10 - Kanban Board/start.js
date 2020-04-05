(() => {
  // เริ่มเขียนโค้ด
  let draggingElem;
  const onDragStart = (event)=>{
    draggingElem = event.target;
  }
  const onDragOver=(event)=>{
    event.preventDefault();
  }
  const onDragEnter=(event)=>{
    event.preventDefault();
  }
  const onDrop = (event)=>{
    event.target.append(draggingElem);
    draggingElem = null;
  }
  const run = ()=>{
    const taskElems  = Array.from(document.querySelectorAll('.task'));
    const dropZoneElems = Array.from(document.querySelectorAll('.drop-zone'));
    taskElems.forEach((taskElem)=>{
      taskElem.addEventListener('dragstart',onDragStart);
    })
    dropZoneElems.forEach((dropZoneElem)=>{
      dropZoneElem.addEventListener('drop', onDrop);
      dropZoneElem.addEventListener('dragover', onDragOver);
      dropZoneElem.addEventListener('dragenter', onDragEnter);
    })
  }
  run();
})();
