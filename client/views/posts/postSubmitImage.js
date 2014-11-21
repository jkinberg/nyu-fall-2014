Template.postSubmitImage.events({
  'change #myFile': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        console.log(fileObj._id)
      });
    });
  }
});