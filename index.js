const express = require('express');
const restaurantRouter = require('./routes/restaurant');
const indexRouter = require('./routes/index');
const path = require('path');
const hbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',restaurantRouter);
app.use('/',indexRouter);

app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  