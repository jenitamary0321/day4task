 function areObjectsEqual(obj1, obj2) {
    const obj1Entries = Object.entries(obj1).sort();
    const obj2Entries = Object.entries(obj2).sort();

    return JSON.stringify(obj1Entries) === JSON.stringify(obj2Entries);
}

let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

console.log(areObjectsEqual(obj1, obj2)); 





// Output: true
