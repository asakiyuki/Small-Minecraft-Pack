const obj = [];

for (let index = 0; index < 27 * 2; index++) {
    const aObj = {};
    aObj[`getItemBtn-${index}@slotButton`] = {
        "collection_index": 27 * 2 - 1 - index
    }
    obj.push(aObj)
}

console.log(JSON.stringify(obj));