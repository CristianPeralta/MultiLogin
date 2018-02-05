module.exports = {
  index(req,res){
    res.render('index',{data:'Rendering data from controller'});
  },
  store(req,res){
    res.render('index',{data:'Rendering data from controller - Store'});
    console.log('storing a user');
  },
  user(req,res){
    res.render('index',{data:'Rendering data from controller - User'});
    console.log(req.query);
  },
  profile(req,res){
    res.render('index',{data:'Rendering data from controller - Profile'});
    console.log(req.body);
  },
  edit(req,res){
    res.render('index',{data:'Rendering data from controller - Edit'});
    console.log(req.body);
  }
}
