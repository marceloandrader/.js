var MATwitter = {
	
	ui_changes : function(){
		// Remove background of new twitts
		$(".js-stream-item").css("background-color", "");

		// Swap fullname with @username
		$(".account-group").each(function () {
			var fullname = $(this).find(".fullname");
			if ($(fullname).data("already-swapped") == "yes") return;
			var username =  $(this).find(".username");
			var tmp_fullname = $(fullname).html();
			$(fullname).html($(username).html());
			$(username).html(tmp_fullname);
			$(fullname).removeClass("fullname").addClass("username").
				css("font-size", "15px").
				css("color", "black");
			$(username).removeClass("username").addClass("fullname").
				css("font-size", "12px").
				css("font-weight", "normal").
				css("color", "#999");
				
			$(username).data("already-swapped", "yes");
		});
	}
	
};
MATwitter.ui_changes();
setInterval(MATwitter.ui_changes, 500);