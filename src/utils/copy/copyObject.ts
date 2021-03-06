import baseAssignValue from "../../internal/object/baseAssignValue";
import assignValue from "../../internal/object/assignValue";

function copyObject(source, props: any[], object) {
    const isNew = !object;
    if (isNew) {
        object = {};
    }

    for (const key of props) {
        const newValue = source[key];
        if (isNew) {
            baseAssignValue(object, key, newValue);
        } else {
            assignValue(object, key, newValue);
        }
    }
    return object;
}

export default copyObject;
