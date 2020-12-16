const arr = [1,2,3,4,5,6,7,8,9,10, null, undefined, ""]

arr.filter((one)=> one > 5).map((num)=>{console.log(num)})

const arr1 = [1,2,3,[1,2,[13],4], null, undefined, ""]

console.log(arr1.flat(Infinity))
console.log(arr1.flat(Infinity).flatMap((one)=> one * 2))

const arr2 = [1,1,1,1,1,1,2,2,2,2,2,2]
console.log(arr2.copyWithin(0, 6))
// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

const arr3 = [1,5,6,2,45,11,243,111,43534,123,5434,123,345]
console.log(arr3.sort())

const obj = {
    0: `1`,
    1: "2",
    2: "3"
}

console.log(Array.from(obj))
