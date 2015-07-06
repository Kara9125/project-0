$(function(){
	function Posts (title, description){
	this.title = title;	
	this.description = description;
	}
	var postTemplate = _.template($('#post-template').html());
	console.log(postTemplate)
	var post1 = new Posts("Second Entry", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed venenatis erat, nec suscipit orci. Integer facilisis consectetur turpis. Aenean congue tortor quis ante mattis vestibulum. Phasellus congue ultricies turpis, ut commodo ipsum facilisis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
	var post2 = new Posts("First Blog Entry", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed venenatis erat, nec suscipit orci. Integer facilisis consectetur turpis. Aenean congue tortor quis ante mattis vestibulum. Phasellus congue ultricies turpis, ut commodo ipsum facilisis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

	Posts.all = [post1, post2];
	_.each(Posts.all, function (post, index) {
	  var $post= $(postTemplate(post));
	  // $todo.attr('data-index', index); - this is not an unscore thing
	  $('#post-list').append($post);
	});
})