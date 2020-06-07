/**
 * @description 获取对象本身后继承所有可枚举键值，包括symbol
 *
 */
function getAllKeysIn(value): (string|Symbol)[] {
    const result = [];
    for (const key of Object.keys(value)) {
        result.push(key);
    }
    if (!Array.isArray(value)) {
        // 数组不应该有symbol，可能是这个原因才加判断的
        result.push(getSymbolsIn(value));
    }
    return result;
}

export default getAllKeysIn;
