Template.postsByAuthor.helpers({  
  posts: function() {
    return Posts.find({author:this.author});
  }
});