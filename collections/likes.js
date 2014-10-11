Likes = new Meteor.Collection('likes');

Likes.allow({
  insert: function(userId, doc){
    return !! userId;
  },
  update: function(userId, doc){
    return !! userId;
  },
  remove: function(userId, doc){
    return !! userId;
  }
});

Meteor.methods({
  like: function(postId){
    var user = Meteor.user();
    
    // make sure user is logged in
    if (!user)
      throw new Meteor.Error(401, "Uh-oh! You need to be logged!");
    
    // check to see if user has already liked post
    var alreadyLiked = Likes.findOne({postId : postId, userId: user._id});
    
    if (alreadyLiked)
      throw new Meteor.Error(302, "You already liked this post", alreadyLiked._id);
    
    //add Like if not yet liked
    var like = {
      userId: user._id,
      postId: postId,
      submitted: new Date().getTime()
    }

    var likeId = Likes.insert(like);
    return likeId;
  },
  
  unLike: function(postId){
    var user = Meteor.user();
    
    // make sure user is logged in
    if (!user)
      throw new Meteor.Error(401, "Uh-oh! You need to be logged!");
    
    // check to see if user has already liked post
    var alreadyLiked = Likes.findOne({postId : postId, userId: user._id});
    
    if (!alreadyLiked)
      throw new Meteor.Error(302, "You cannot unLike unless you already liked this post", alreadyLiked._id);
    
    //remove Like if not yet liked
    return Likes.remove(alreadyLiked);
  }
});