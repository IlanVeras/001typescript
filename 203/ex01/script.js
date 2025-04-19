"use strict";
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        return Number(value);
    }
    else {
        throw new Error("Value deve ser um number ou uma string");
    }
}
console.log(toNumber('string'));
