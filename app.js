require('dotenv').config();
const express = require('express');
const app = express();

//controller imports
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');

//db import and sync
const sequelize = require('./db');
sequelize.sync();
//force: true vvvvvv for resetting tables in database
// sequelize.sync({force: true});
app.use(express.json());

//middleware
app.use(require('./middleware/headers'));

//routes
app.use('/user', user);
//------------------------------------------------
app.use(require('./middleware/validate-session'));

app.use('/game', game);





//test routes
// const test = require('./controllers/testcontroller'); // move this to the top if used
// app.use('/test', test)
// app.use('/api/test', function(req, res){
//     res.send('This is data from the /api/test endpoint. Its from the server.')
// })
app.listen(process.env.PORT, () => console.log(`Hacking into the mainframe on Port: ${process.env.PORT}`))