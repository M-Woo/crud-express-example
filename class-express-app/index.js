var express = require('express');
var bodyparser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');


var app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:false}));
app.use(ejsLayouts);

app.get('/', function(req, res){
  //home route
  res.render('index');
});

app.get('/articles', function(req, res){
  //all articles route
  //TO DO: Use the sequelize findAll function to get
  //all of the articles. Then I would pass the
  //articles that were found into the allArticles view
  res.render("allArticles");
});

app.get('/articles/new', function(req, res){
  //render new articles form
  res.render("newArticle");
});

app.get('/articles/:id', function(req, res){
  ///individual articles route
  //TO DO: I know the id corresponds to the database id
  //I can use the findById() function provided by sequelize
  //and I can access the id in the parameter by using 
  //req.params.id
  res.send("/articles/:id stub");
});

app.post('/articles', function(req, res){
  ///post route for new article
  //TO DO: Create an entry in my articles table
  //using the info passed in to req.body
  //After the insert is done, (in the then promise),
  //Redirect to all articles page
  res.send("Post is working");
});

app.put('/articles/:id', function(req, res){
  //Update existing article
  //TO DO: I know I can use req.params.id to get the id of the article
  //I can use sequelize's update function to update with the info 
  //located in req.body
  //*NOTE* I probably want to use a res.send instead of a render, because of the fact
  //that since this is a PUT route, I will be calling it from AJAX.
  res.status(404).send("oops");
})

app.delete('articles/:id', function(req, res){
  //Delete an article
  // I can use the req.params.id to get the article I want to delete.
  //Sequelize function destroy
  //*NOTE* I probably want to use a res.send instead of a render, because of the fact
  //that since this is a PUT route, I will be calling it from AJAX.
})

app.listen(3000);