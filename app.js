const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

// import db connection
const mongoConnect = require('./util/database').mongoConnect;
// const mongoosedb = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
    app.listen(3000, ()=> console.log('server connected to db successfully!'));
  });
  
// mongoosedb.connect('mongodb+srv://udemyUser:31ostw6et4gPL8qO@udemycluster.tw2nc.mongodb.net/udemycourse?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true}).then(result => {
//     app.listen(3000, ()=>console.log('service connected to db successfully!'));
// }).catch(err => console.log(err));