module.exports = {
  index(req,res){
    res.render('web',{data:'BOOK CONTROLLER'});
  },
  store(req,res){
    res.render('web',{data:'BOOK CONTROLLER - Store'});
    console.log('storing a user');
  }
}
