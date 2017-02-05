var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

// NAVIGATION

var nav = [
            {Link: '/Books', Text: 'Books'},
            {Link: '/Authors', Text: 'Authors'},
          ];
// ROUTERS
var bookRouter = require(__dirname + '/src/views/routes/bookRoutes.js')(nav);
var authRouter = require(__dirname + '/src/views/routes/authRoutes.js');
var adminRouter = require(__dirname + '/src/views/routes/adminRoutes.js')(nav);

app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/src/views'));
app.set('views', (__dirname + '/src/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index',{
      title:'Hello from Index',
      nav: nav
    });
});




// BOOK ROUTES
app.use('/Books', bookRouter);
// AUTHOR ROUTES
app.use('/Authors', authRouter);
// ADMIN ROUTES
app.use('/Admin', adminRouter);


// Make the app listen to a port
app.listen(port, function(err){
  if(!err){
    console.log('Listening at port:' + port);
  }
});
