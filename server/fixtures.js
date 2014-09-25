if (Posts.find().count() === 0) {
  Posts.insert({
    title:"Moby Dick",
    author:"Herman Mellville",
    url:"http://google.com"
  });
  Posts.insert({
    title:"Running Lean",
    author:"Ash Maurya",
    url:"http://runninglean.com"
  });
  Posts.insert({
    title:"The Lean Startup",
    author:"Eric Reis",
    url:"http://startuplessonslearned.com"
  });
}