Template.postEdit.helpers({
  myImage: function(){
    return Images.findOne({_id: this.imageId});
  }
});

Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var currentPostId = this._id;
    
    var myImage = $(e.target).find('[name=post-image]').get(0).files[0];

    var uploadedImage = Images.insert(myImage, function (error, fileObj) {
      //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      if (error) {
        return alert(error.reason)
      } else {
        console.log("Image Uploaded: " + fileObj._id);
        Posts.update(currentPostId, {$set: {imageId:fileObj._id}}, function(error){
          if(error)
            alert(error.reason)
        });
      }
    });
    
    var postProperties = {
      title: $(e.target).find('[name=post-title]').val(),
      url: $(e.target).find('[name=post-url]').val(),
      description: $(e.target).find('[name=post-description]').val()
    }
    
    Posts.update(currentPostId, {$set: postProperties}, function(error){
      if (error) {
        alert(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },
  
  'click .delete': function(e) {
    e.preventDefault();
    
    if (confirm("Delete this post?")){
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  },
  
  'click .delete-image': function(e){
    e. preventDefault();
    if (confirm("Delete this image?")){
      var myImageId = this.imageId;
      
      Images.remove(myImageId);
      
      var currentPostId = this._id;
      Posts.update(currentPostId, {$set: {imageId:''}}, function(error){
        if (error)
          alert(error.reason);
      })
    }
  }
});