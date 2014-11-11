Router.configure({
  layoutTemplate:'layout'
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
  
  this.route('postEdit', {
    path:'/posts/:_id/edit',
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
    path:'/new'
  });
  
});

var requireLogin = function(pause) {
  if (! Meteor.user()){
    this.render('accessDenied');
    pause();
  }
};

Router.onBeforeAction(requireLogin, {only:['postSubmit', 'postEdit']});