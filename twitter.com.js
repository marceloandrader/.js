var MATwitter = {
	
	ui_changes : function(){
		$('.js-promoted-badge').closest('.tweet').remove();
	}
	
};
MATwitter.ui_changes();
setTimeout(MATwitter.ui_changes, 500);
