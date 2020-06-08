require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5d10a6dc73b0c23b98588c18').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})