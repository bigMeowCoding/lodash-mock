/**
 * @private
 * @description 复制数组的初始化操作
 */
import {CopyType} from "../utils/config/copyType";
import isObject from "../utils/types/isObject";
import getTag from "./getTag";
import copyArray from "../utils/copy/deepClone";

function initCloneArray<T>(array: (T[] | RegExpExecArray)): T[] {
    const {length} = array;
    const result = new Array(length);
    if (length && typeof array[0] === 'string' && Object.prototype.hasOwnProperty.call(array, 'index')) {

        (result as RegExpExecArray).index = (array as RegExpExecArray).index;
        (result as RegExpExecArray).input = (array as RegExpExecArray).input;
    }
    return result;
}

function baseClone(value, bitmask: CopyType, key?: string, object?, stack?) {
    let result = null;
    const isDeep = bitmask === CopyType.CLONE_DEEP_FLAG;
    const isFlat = bitmask === CopyType.CLONE_FLAT_FLAG;
    const isFull = bitmask === CopyType.CLONE_SYMBOLS_FLAG;
    // 如果不是对象就直接返回
    if (!isObject(value)) {
        return value;
    }
    const isArr = Array.isArray(value), tag = getTag(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
            copyArray(value, result);
        }
    } else {

        console.log('d');
    }
    return  result;

}

export default baseClone;