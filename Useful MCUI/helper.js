const arr = [], arr2 = []

const forLoop = (max, callback) => {
    for (let index = 0; index < max + 1; index++) callback(index);
}

forLoop(8, (i) => {
    arr.push({
        binding_type: 'view',
        source_control_name: `hotbar_slot${i + 1}`,
        source_property_name: '(#item_id_aux = -1)',
        target_property_name: `#hs${i + 1}`
    });
    arr2.push(`#hs${i + 1}`);
})

forLoop(26, (i) => {
    arr.push({
        binding_type: 'view',
        source_control_name: `inventory_slot_${i + 1}`,
        source_property_name: '(#item_id_aux = -1)',
        target_property_name: `#is${i + 1}`
    });
    arr2.push(`#is${i + 1}`);
})

console.log(JSON.stringify(arr));
console.log(`(${arr2.join(' + ')})`)