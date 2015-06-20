
$(document).ready(function(){	/* on page load */
	$(".contblock").hide();		/* on page load, hide all contblock(s) */
	$("#all_button").css("background-color","#ffff00"); /* on page load, make the "all button" background-color: yellow */
	
	$("main>h2").click(function(){		/* when click on main h2s */
		$(this).next().toggle(300);		/* toggle the subsequent element, which should be a contblock div */
	});
	
	$("#all_button").click(function(){	/* when click on the all button */
		$("#lesson h2").next().hide();	/* for all lesson h2s, hide the next div content */
		$("#lesson h2").show();			/* show all lesson h2s */
		$("#all_button").css("background-color","#ffff00");       /* yellow */
		$("#notes_button").css("background-color","#ffa500");     /* orange */
		$("#exercises_button").css("background-color","#ffa500"); /* orange */
	});

	$("#notes_button").click(function(){/* when click on the notes button */
		$("#lesson h2").next().hide();	/* for all lesson h2s, hide the next div content */
		$("#lesson h2").show();			/* show all lesson h2s */
		$("#lesson h2[id^='excercise']").hide();	/* hide all exercise h2s */
		$("#all_button").css("background-color","#ffa500");
		$("#notes_button").css("background-color","#ffff00");
		$("#exercises_button").css("background-color","#ffa500");
	});

	$("#exercises_button").click(function(){/* when click on the exercises button */	
		$("#lesson h2").next().hide();		/* for all lesson h2s, hide the next div content */
		$("#lesson h2").hide();				/* hide all lesson h2s */
		$("#lesson h2[id^='excercise']").show();	/* show all exercise h2s */
		$("#lesson #homework").show();				/* show homework h2 */
		$("#all_button").css("background-color","#ffa500");
		$("#notes_button").css("background-color","#ffa500");
		$("#exercises_button").css("background-color","#ffff00");
	});

	$("#expand_button").click(function(){		/* when click on the expand button */
		$("#lesson h2:visible").next().show();	/* for all lesson h2s that are visible, show the next div content */
	});
	
	$("#collapse_button").click(function(){		/* when click on the collapse button */
		$("#lesson h2:visible").next().hide();	/* for all lesson h2s that are visible, hide the next div content */
	});
	
});

