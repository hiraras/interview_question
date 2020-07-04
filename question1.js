/**
 * 找出数组中出现次数超过一半的数字
 */

 function findMoreThanHalf(arr) {
     if (!Array.isArray(arr)) {
        return -1;
     }
    let result = -1;
    let len = 0;
    arr.forEach((item, index, self) => {
        const length = self.filter(elem => elem === item).length;
        if (length > len) {
            result = item;
            len = length
        }
    })
    return len > arr.length / 2 ? result : -1;
 }
