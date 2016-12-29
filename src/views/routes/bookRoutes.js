var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
// BOOKS COLLECTION
  var books = [
                  {
                  title:'Tao of Jeet Kune Do',
                  genre:'Martial Arts',
                  author: 'Bruce Lee',
                  read: false
                  },
                  {
                  title:'The Power of Now',
                  genre:'New Age',
                  author: 'Eckhart Tolle',
                  read: false
                  },
                  {
                  title:'Angels and Demons',
                  genre:'Supernatural',
                  author: 'Dan Brown',
                  read: false
                  },
                  {
                  title:'Tuesdays with Morrie',
                  genre:'Inspirational',
                  author: 'Mitch Albom',
                  read: false
                  },
                ];

  bookRouter.route('/')
            .get(function(req, res){
              res.render('booksListView',{
                title: 'Hello from Books',
                nav: nav,
                books: books
              });
            });


  bookRouter.route('/:id')
            .get(function(req, res){
              var id = req.params.id;
              res.render('bookView',{
                title: 'Hello from Books',
                nav: nav,
                book: books[id]
              });
            });
    return bookRouter;
};




module.exports = router;