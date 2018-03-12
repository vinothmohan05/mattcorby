console.info("Loading Spartans");
function addEditLink(linkid) {
	let section = document.querySelector("div.contextual ul.contextual-links");
	if(section){
		console.info("section found, Adding Li");
		// create our span element
		let li = document.createElement("li");
		li.className = "block-contentnode-edit";
		let a = document.createElement("a");
		a.innerHTML = "Edit Content";
		a.href = "/node/"+linkid+"/edit?destination=/admin/content";
		li.appendChild(a);
		// prepend our span eleemnt to our section element
		section.insertBefore( li, section.firstChild );
		section.classList.add("custom-link-added");
	}else{
		console.info("section not found");
	}
}
(function ($, Drupal) {

	function getCurrentNodeId() {
		var $body = jQuery('body.detail-page');
		if ( ! $body.length ) return false;
		var bodyClasses = $body.attr('class').split(/\s+/);
		for ( i=0; i<bodyClasses.length; i++ ) {
			var c = bodyClasses[i];
			if ( c.length > 13 && c.substring(0, 13) === "page-node-id-" ){
				var linkid = c.substring(13);
				console.info("linkid not found "+linkid);
				return linkid;
			}
		}
		return false;
	}
	Drupal.behaviors.AJAX = {
		attach: function (context, settings) {
			if($("body").hasClass("detail-page") && $("ul.contextual-links:not(.custom-link-added)")){
				addEditLink(getCurrentNodeId());
			}
		},
		detach: function (context) {}
	};
}(jQuery, Drupal));
