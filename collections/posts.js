Posts = new Meteor.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
    // insert is only allowed if userId exists (user must be logged in)
    return !! userId;
  },
  update: function(userId, doc){
    return !! userId;
  }
});