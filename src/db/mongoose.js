const mongoose = require('mongoose');

const connectionUrl = process.env.MONGODB_URL;

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

/* const me = new User({
    name: '    Rohan  ',
    email: 'ROHAN@GMAIL.COM       ',
    password: 'Passw0rd123'
})

me.save().then(() => {
    console.log('Success ', me);
}).catch((error) => {
    console.log('Error ', error);
}) */

/* const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const userTask = new Task({
    description: '  Eat lunch'
});

userTask.save().then(() => {
    console.log('Success ', userTask);
}).catch((error) => {
    console.log('Error ', error);
}); */
