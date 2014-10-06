Router.configure({
  layoutTemplate:'layout',
  loadingTemplate:'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
  this.route('postsList', {
    path:'/'
  });
  
  this.route('aboutPage', {
    path:'/about'
  });
  
  this.route('postPage', {
    path:'/posts/:_id',
    data:function(){
      return Posts.findOne(this.params._id);
    }
  });
  
  this.route('postsByAuthor', {
    path:'/author/:author',
    data: function() {
      return {author:this.params.author}
    }
  });
  
  this.route('postSubmit', {
    path: '/submit'
  });
  
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    pause();
  }
};

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});