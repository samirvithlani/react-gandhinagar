var student = {
    name: 'John',
    age: 25,
    course: 'React JS'
}

//get keys of object

var keys = Object.keys(student);
var values = Object.values(student);

//get key object values

var kv = Object.entries(student);


console.log(Object.entries(student));

Object.entries(student).forEach(([key, value]) => {
    console.log(key, value);
})

console.log(keys);
console.log(values);
console.log(kv);