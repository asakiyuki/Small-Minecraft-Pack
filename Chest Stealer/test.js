const obj = [];
let str = `(`;
for (let index = 0; index < 27; index++) {
    const objI = {};
    objI[`selected_inventory_slot_${index}@common.get_item_id_on_selected`] = {
        "collection_index": index
    }
    obj.push(objI)

    // str += `#selected_item_${index} + `
}

// obj.push({
//     binding_type: "view",
//     source_property_name: `${str})`,
//     target_property_name: `#selected_item_id_aux`
// })

console.log(JSON.stringify(obj))