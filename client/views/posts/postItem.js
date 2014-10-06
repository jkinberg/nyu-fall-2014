Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

Template.postItem.events({
  'click button': function() {
    if (!! Meteor.userId()) {
      Posts.update(this._id, {$inc:{likes:1}});
    } else {
      console.log('Uh-oh! You must be logged in!');
    }
  }
});

Template.postItem.rendered = function() {
  return Holder.run();
};