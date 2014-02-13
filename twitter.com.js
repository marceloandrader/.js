var MATwitter = {
	
	ui_changes : function(){
		$('.js-promoted-badge').closest('.tweet').remove();
	}
	
};
MATwitter.ui_changes();
setInterval(MATwitter.ui_changes, 500);
