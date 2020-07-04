/**
 * 实现一个方法，拆解URL参数中queryString
 */

function querySearch(url) {
    if (typeof url !== 'string') {
        return {};
    }
    const query = {};
    const filterHashString = url.replace(/#[^\b|?]+/, '');
    const queryString = filterHashString.split('?')[1];
    const paramStrings = queryString.split('&');
    paramStrings.forEach((item) => {
        const [key, value] = item.split('=');
        query[key] = value;
    })
    return query;
}
