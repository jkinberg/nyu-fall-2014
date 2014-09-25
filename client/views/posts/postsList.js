var postsData = [
  {
    title:'Moby Dick',
    author:'Herman Mellville',
    url:'http://google.com'
  },
  {
    title:'The Catcher in the Rye',
    author:'J.D. Salinger',
    url:'http://yahoo.com'
  },
  {
    title:'Cujo',
    author:'Stephen King',
    url:'http://msn.com'
  },
  {
    title:'Lord of the Rings',
    author:'J.R.R. Tolkein',
    url:'http://facebook.com'
  },
  {
    title:'The Lion The Witch and the Wardrobe',
    author:'C.S. Lewis',
    url:'http://twitter.com'
  }
];

Template.postsList.helpers({  
  posts: function() {
    return Posts.find();
  }
});