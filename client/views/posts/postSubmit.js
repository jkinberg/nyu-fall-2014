Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var myImage = $(e.target).find('[name=post-image]').get(0).files[0];

    var uploadedImage = Images.insert(myImage, function (error, fileObj) {
      //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      if (error) {
        return alert(error.reason)
      } else {
        console.log("Image Uploaded: " + fileObj._id);
        return fileObj._id
      }
    });
    
    
    var post = {
      title: $(e.target).find('[name=post-title]').val(),
      url: $(e.target).find('[name=post-url]').val(),
      description: $(e.target).find('[name=post-description]').val(),
      imageId: uploadedImage._id // uploaded file ID
    }
    
    //post._id = Posts.insert(post);
    
    Meteor.call('post', post, function(error, id){
      if (error)
        return alert(error.reason);
      
      Router.go('postPage', {_id:id});
      
    });
  }
});