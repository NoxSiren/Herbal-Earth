//Required Dependencies
require('dotenv').config();
const path = require ('path');
const express = require('express');
const exphbs = require('express-handlebars');
// const exphbs = require('express-session');
// const session = require('express-session');
const routes = require('./routes');
const sequelize = require('./config');

//Creating Port connection
const app = express();
const PORT = process.env.PORT || 3001; 
// const sessionSettings = {
//     secret: process.env.SESSION_SECRET,
//     resave: false, 
//     saveUninitialized: false,
// };
const hbs = exphbs.create();

//Initialize view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session(sessionSettings));
app.use(routes);

sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`))
});