(() => {
  // เริ่มเขียนโค้ด
  // 1. How Asynchronous code works in JavaScript
  // const simulateAsyncAPI = (text,timeout)=>{
  //   setTimeout(()=>console.log(text),timeout);
  // }
  // simulateAsyncAPI('A',1000);
  // simulateAsyncAPI('B',500);
  // simulateAsyncAPI('C',100);
  //Output : C B A (ทำตามอันที่เสร็จก่อน)
  // 2. Callback
  // const simulateAsyncAPI = (text,timeout,callback)=>{
  //   setTimeout(()=>{
  //     console.log(text);
  //     if(callback){
  //       callback();
  //     }
  //   },timeout);
  // }
  // simulateAsyncAPI('A',1000,()=>{
  //   simulateAsyncAPI('B',500,()=>{
  //     simulateAsyncAPI('C',100,()=>{})
  //   })
  // })
  //Output : A B C (ทำตามลำดับ)
  // 3. Promise
  // const simulateAsyncAPI = (text,timeout)=>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       if(text==='B') return reject('B got rejected'); //ใช้ return error ออกแล้วหยุดหลัง then ทั้งหมด
  //       console.log(text);
  //       resolve();
  //     },timeout);
  //   });
  // }
  // simulateAsyncAPI('A',1000).then(
  //   ()=>{
  //     return simulateAsyncAPI('B',500);
  //   }
  // ).then(
  //   ()=>{
  //     return simulateAsyncAPI('C',100);
  //   }
  // ).catch((error)=>{
  //     console.log(error);
  // }
  // )
    
  // 4. Async/Await
  const simulateAsyncAPI = (text,timeout)=>{
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            //if(text==='B') return reject('B got rejected'); //ใช้ return error ออกแล้วหยุดหลัง then ทั้งหมด
            console.log(text);
            resolve();
          },timeout);
        });
  }
  async function run(){
    try{
      await simulateAsyncAPI('A',1000);
      await simulateAsyncAPI('B',500);
      await simulateAsyncAPI('C',100);
    }
    catch(error){
      console.log(error);
    }
  }
  run();
})();
