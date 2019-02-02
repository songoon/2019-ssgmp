$(document).ready(function(){
	$(document).on('click', '.sidebar-menu-1d li a', function(event){
		history.pushState(null, null, event.target.href);
		$('#main-article').load(event.target.href+' #main-article > #article-content');
		event.preventDefault();
	});
	$(window).on('popstate', function(event){
	    $('#main-article').load(location.href+' #main-article > #article-content');
	})
});