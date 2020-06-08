require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5d10a7939c3c47085c8f19e0', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
}).then((result) => {
    console.log(result);
})