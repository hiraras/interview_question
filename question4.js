/**
 * 返回最接近输入值的数字，如果有多个，返回最大的那个
 */

function findNext(n, arr) {
    let closestNum = arr[0];
    for (let i = 1; i < arr.length; i ++) {
        const currentDistance = Math.abs(closestNum - n);
        const distance = Math.abs(arr[i] - n)
        if (distance < currentDistance) {
            closestNum = arr[i];
        } else if (distance === currentDistance) {
            closestNum = Math.max(closestNum, arr[i]);
        }
    }
    return closestNum;
}
