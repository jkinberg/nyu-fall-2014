Likes = new Meteor.Collection('likes');

Meteor.methods({
  addLike: function(postId){
    var user = Meteor.user();
    
    // make sure user is logged in
    if (!user)
      throw new Meteor.Error(401, "Uh-oh! You need to be logged!");
    
    // check to see if user has already liked this post
    var alreadyLiked = Likes.findOne({postId: postId, userId: user._id});
    
    if (alreadyLiked) {
      throw new Meteor.Error(302, "You have already liked this post!", alreadyLiked._id);
    }
    
    // grab the right fields, and add new fields such as: username, timestamp
    var likeAttributes = {
      postId: postId,
      userId: user._id,
      submitted: new Date().getTime()
    };
    
    var newLike = Likes.insert(likeAttributes);
    
    return newLike;
  },
  removeLike: function(postId){
    var user = Meteor.user();
    
    // make sure user is logged in
    if (!user)
      throw new Meteor.Error(401, "Uh-oh! You need to be logged!");
    
    // check to see if user has already liked this post
    var alreadyLiked = Likes.findOne({postId: postId, userId: user._id});
    
    if (!alreadyLiked) {
      throw new Meteor.Error(302, "You must already like this post to unlike it!", alreadyLiked._id);
    }
        
    return Likes.remove(alreadyLiked);
  }
});