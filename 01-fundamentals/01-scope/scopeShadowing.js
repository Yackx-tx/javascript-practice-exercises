let value = 'outer';

function testScope() {
  let value = 'inner';
  console.log(value);
}

testScope();
console.log(value);
