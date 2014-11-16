Template.likeButton.helpers({
  likeCount:function(){
    return Likes.find({postId:this._id}).count();
  },
  likeActive:function(){
    var currentUser = Meteor.user(),
        currentUserLikedThis = Likes.findOne({postId: this._id, userId: currentUser._id});
    return currentUser && currentUserLikedThis ? 'btn-primary' : 'btn-default';
  }
});

Template.likeButton.events({
  'click button': function(){
    var currentUser = Meteor.user(),
        currentUserLikedThis = Likes.findOne({postId : this._id, userId: currentUser._id});
    
    if (!currentUserLikedThis) {
      Meteor.call('addLike', this._id, function(error, id){
        if (error)
          return alert(error.reason);

        return console.log(id);
      });
    } else {
      Meteor.call('removeLike', this._id, function(error, id){
        if (error)
          return alert(error.reason);
        
        return;
      });
    }
    
  }
});