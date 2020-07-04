/**
 * 实现一个函数，可以将数组转化为树状数据结构
 */

function buildTree(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const originNodes = arr.filter(item => isOriginNode(item));
    if (originNodes.length > 1) {
        throw new Error('arr error!, this arr has two origin node');
    }
    const originNode = originNodes[0];
    const result = Object.assign({}, originNode);
    function getResult(item, arr) {
        item.children = [];
        item.children = [...arr.filter(elem => elem.parentId === item.id)]
        if (item.children.length > 0) {
            item.children.forEach(elem => {
                console.log(arr)
                func(elem, arr)
            })
        }
    }
    getResult(result, arr);
    return result;
}

function isOriginNode(item) {
    return !item.parentId && typeof item.parentId !== 'number';
}
