var action = {};

action.landing = function(req, res){
    console.log('user',req.user);
    res.render('home/index', {
        layout: 'layouts/home',
        title: 'Create'
    });
};

action.create = function(){
    console.log('user',req.user);
};



module.exports = action;