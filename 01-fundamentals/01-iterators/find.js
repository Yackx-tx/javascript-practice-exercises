const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'user' }
];

const adminUser = users.find((user) => user.role === 'admin');

console.log(adminUser);
