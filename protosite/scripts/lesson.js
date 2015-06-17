
$(document).ready(function(){	/* on page load */
	$(".contblock").hide();		/* by default, hide all contblock(s) */
	
	$("main>h2").click(function(){		/* when click on main h2s */
		$(this).next().toggle(300);		/* toggle the subsequent element, which should be a contblock div */
	});

});

