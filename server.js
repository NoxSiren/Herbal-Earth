//Required Dependencies
require('dotenv').config();
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
<<<<<<< HEAD
=======
// const exphbs = require('express-session');
>>>>>>> 4aa22910abad326124e11dd2a432797ac02ed319
const session = require('express-session');
const routes = require('./routes');
const sequelize = require('./config');

//Creating Port connection
const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3001; 
const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false, 
=======
const PORT = process.env.PORT || 3001;
const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false,
>>>>>>> 4aa22910abad326124e11dd2a432797ac02ed319
    saveUninitialized: false,
};
const hbs = exphbs.create();

//Initialize view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
<<<<<<< HEAD
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
=======
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
>>>>>>> 4aa22910abad326124e11dd2a432797ac02ed319
app.use(session(sessionSettings));
app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
});