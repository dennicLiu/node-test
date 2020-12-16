/*
 * 需要在nodejs12+中使用
 */
console.log(this); // {}
function test() {
    this.a = 1
    console.log(this);  // 此处 === globalThis
}
test(); //global

console.log('-------------------')
console.log(globalThis)
