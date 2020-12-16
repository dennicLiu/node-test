const promise1 = Promise.resolve('test')
const promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(1)
    }, 2000)
})

console.time('promiseAll')
Promise.all([promise1,promise2,Promise.resolve('抽奖赢了')]).then((e)=>{
    console.timeEnd('promiseAll')
}).catch((e)=>{
    console.log(e)
    console.timeEnd('promiseAll')
})

console.time('promiseRace')
Promise.race([promise2,Promise.reject('抽奖输了')]).then((e)=>{
    console.timeEnd('promiseRace')
}).catch((e)=>{
    console.log(e)
    console.timeEnd('promiseRace')
})

console.time('promiseAllSettled')
Promise.allSettled([promise1,promise2,Promise.reject('抽奖输了')]).then((e)=>{
    console.log(e)
    console.timeEnd('promiseAllSettled')
}).catch((e)=>{
    console.timeEnd('promiseAllSettled')
})

// run console
// promiseRace: 1.425ms
// promiseAll: 2000.751ms
// [
//    { status: 'fulfilled', value: 'test' },
//    { status: 'fulfilled', value: 1 },
//    { status: 'rejected', reason: '抽奖输了' }
// ]
// promiseAllSettled: 2004.616ms
/*
 *  耗时方面  race < all < allSettled
 *  all、race 遇到错误 不再执行
 *  allSettled 记录每个promise执行情况,所有promise任务都会执行
 *  race 返回第一个处理完的值
 */
