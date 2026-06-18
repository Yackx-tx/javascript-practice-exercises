const emps = [
    { "name": "Alice", "job": "developer", "age": 28 },
    { "name": "Bob", "job": "designer", "age": 35 },
    { "name": "Charlie", "job": "manager", "age": 42 },
    { "name": "David", "job": "developer", "age": 31 }
];

function getDeveloper(array){
    return array.filter(emp => emp.job === 'developer')
}

const onlyDevs = getDeveloper(emps);
console.log(onlyDevs);

