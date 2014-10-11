Template.likeButton.helpers({  
  likes: function() {
    return Likes.find({postId: this._id},{sort:{submitted:-1}});
  },
  likeCount: function() {
    return Likes.find({postId: this._id}).count();
  },
  likeActive: function() {
    var user = Meteor.user();
    var alreadyLiked = Likes.findOne({postId : this._id, userId: user._id});
    if (alreadyLiked){
      return true;
    } else {
      return false;
    }
  }
});

Template.likeButton.events({
  'click button': function() {
    var user = Meteor.user(),
        alreadyLiked = Likes.findOne({postId : this._id, userId: user._id});
    
    if (!alreadyLiked) {
      Meteor.call('like', this._id, function(error, id){
        if (error)
          return alert(error.reason);

        return console.log(id);
      });
    } else {
      Meteor.call('unLike', this._id, function(error, id){
        if (error)
          return alert(error.reason);
        
        return;
      });
    }
  }
});