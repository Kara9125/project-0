$(function(){
	function Posts (title, description){
	this.title = title;	
	this.description = description;
	}
	var postTemplate = _.template($('#post-template').html());
	console.log(postTemplate)
	var post1 = new Posts("Second Entry", "clean clothes");
	var post2 = new Posts("First Blog Entry", "paint wall");

	Posts.all = [post1, post2];
	_.each(Posts.all, function (post, index) {
	  var $post= $(postTemplate(post));
	  // $todo.attr('data-index', index); - this is not an unscore thing
	  $('#post-list').append($post);
	});
})