function createPost() {
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let post = document.getElementById("postBody").value;

  let pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  let postTemplate = _.template(document.getElementById("post-template").innerHTML)
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  let commentText = document.getElementById("commentText").value;
  let commenterName = document.getElementById("commenter").value;

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let templateFn = _.template(commentTemplate);
  let commentsSection = document.getElementById("comments");

  let templateHTML = templateFn({ commenter: commenterName, comment: commentText });
  commentsSection.innerHTML += templateHTML;
}
