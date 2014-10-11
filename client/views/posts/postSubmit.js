Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      title: $(e.target).find('[name=post-title]').val(),
      url: $(e.target).find('[name=post-url]').val(),
      description: $(e.target).find('[name=post-description]').val()
    }
    
    //post._id = Posts.insert(post);
    
    Meteor.call('post', post, function(error, id){
      if (error)
        return alert(error.reason);
      
      Router.go('postPage', {_id:id});
      
    });
  }
});