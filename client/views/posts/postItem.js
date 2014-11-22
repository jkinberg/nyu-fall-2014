Template.postItem.helpers({
  myImage: function(){
    return Images.findOne({_id: this.imageId});
  },
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

Template.postItem.rendered = function() {
  return Holder.run();
};