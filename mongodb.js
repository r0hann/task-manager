const mongodb = require("mongodb");

const { MongoClient, ObjectID } = mongodb;
const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database.......");
    }

    const db = client.db(databaseName);

    /* db.collection('tasks').findOne({ _id: new ObjectID("5d0c84679d35e1150c984d42") }, (error, task) => {
        if(error){
            return console.log('Unable to fetch');
        }
        console.log(task);
    });

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks);
    }); */

    //update the user name from rohan to mike using $set update operator
    /* db.collection('users').updateOne({
        _id: new ObjectID("5d0ee4368ca1f733b8449ad2")
    }, {
            $set: {
                name: 'Mike'
            }
        }).then((result) => {
            console.log('Success ', result);
        }).catch((error) => {
            console.log('Error ', error);
        }); */

    //update the age of user by increasing age by 1 using $inc operator
    /* db.collection('users').updateOne({
        _id: new ObjectID("5d0ee4368ca1f733b8449ad2")
    }, {
            $inc: {
                age: 1 
            }
        }).then((result) => {
            console.log('Success ', result);
        }).catch((error) => {
            console.log('Error ', error);
        }); */

    /* db.collection('tasks').updateMany({
        completed: false                        //condition for updating
    }, {
            $set: {
                completed: true                 //updated to
            }
        }).then((result) => {
            console.log('Success ', result);
        }).catch((error) => {
            console.log('Error ', error);
        }) */

    /*  db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log('Success ', result);
    }).catch((error) => {
        console.log('Error ', error);
    }) */
  }
);
