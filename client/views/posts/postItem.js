Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  myImage: function(){
    return Images.findOne({_id: this.imageId});
  }
});

Template.postItem.rendered = function() {
  return Holder.run();
};