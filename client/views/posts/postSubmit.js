Template.postSubmit.events({
  'submit form': function(e){
    e.preventDefault();
    
    var post = {
      url: $(e.target).find('[name=post-url]').val(),
      title: $(e.target).find('[name=post-title]').val(),
      description: $(e.target).find('[name=post-description]').val()
    }

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
  
});