var app = Server.app,
    actions = Server.actions;

/**
* ROUTES
* @section story
*/
app.get('/', actions.story.landing);
//app.get('/story/:user/:storyId', story.middleware.exists, story.view.index);
app.post('/story/create', actions.story.create);
//
///**
// * ROUTES
// * @section admin
// */
//app.get('/admin', admin.view.landing);

var views = {};


module.exports = views;