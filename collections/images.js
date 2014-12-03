var imageStore = new FS.Store.S3("images", {
  region: "us-east-1", //optional in most cases
  // accessKeyId: AWS_ACCESS_KEY_ID, //required if environment variables are not set
  // secretAccessKey: AWS_SECRET_ACCESS_KEY, //required if environment variables are not set
  bucket: "josh-nyu-fall-2014", //required
  folder: "/",
  ACL: "public-read", //optional, default is 'private', but you can allow public or secure access routed through your app URL
  // The rest are generic store options supported by all storage adapters
  // transformWrite: myTransformWriteFunction, //optional
  // transformRead: myTransformReadFunction, //optional
  maxTries: 3 //optional, default 5
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});

Images.allow({
  insert: function(userId) {
    return !!userId;
  },
  update: function(userId) {
    return !!userId;
  },
  remove: function(userId) {
    return !!userId;
  },
  download: function(userId) {
    return true;
  },
  fetch: []
});