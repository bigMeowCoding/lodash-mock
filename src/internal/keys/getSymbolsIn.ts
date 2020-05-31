/**
 *
 * @description 递归获取对象身上所有symbol
 */
function getSymbolsIn(value): Symbol[] {
    const result = [];
    let object = Object(value);
    while (value) {
        result.push(...getSymbols(value));
        object = Object.getPrototypeOf(object);
    }
    return result;
}