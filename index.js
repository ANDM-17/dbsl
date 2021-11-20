const DBSL = require('./dist/index');




let AutoPoster = new DBSL.AutoPoster({ token: 'token', id: 'id', clint: 'client' }).start();
let Vote = new DBSL.Vote({ token: 'token', clint: 'client' }).start();


Vote.on("vote" , (data) => {
    console.log(data);
})