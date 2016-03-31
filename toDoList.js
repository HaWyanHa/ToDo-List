function TODO() {

	var counter = 0;

	$("form").submit(function(event) {
		
		event.preventDefault();

		var newToDO = $(".new-todo").val();

		counter++;
		// console.log(counter);

		$(".new-todo").val(" ");

		$(".incomplete-items").text(counter);

		$(".items")
				.append($("<li>")
				.append($("<article>")
				.append($("<button>").attr("class", "check"))
				.append($("<p>").text(newToDO))
				.append($("<input>").attr({"type": "text", "class": "edit-todo", "value": newToDO}))
				.append($("<button>").attr("class", "delete").text("X"))
						)
				);

	});

	//items in the <li> below
	$(".items").on("click", ".delete", function(event){
		console.log('in delete');
			$(this).closest('li').remove();

		if ($(this).closest("article").hasClass("completed")) {
		} else {
			counter--;
			$(".incomplete-items").text(counter);
		}
	});

	$(".items").on("click", ".check", function (event){
		$(this).closest("article").toggleClass("completed");
		if ( $(this).closest("article").hasClass("completed") ){
			counter--;
		}else {
			counter++;
		}
		$(".incomplete-items").text(counter);
	});

	$(".items").on("click", "p", function (event){
		if (!($("article").hasClass("completed"))) {
			$(this).closest("article").addClass("editing");
			$(".edit-todo").focus();
		}
	});

	$(".items").on("keydown", ".edit-todo", function(event){
		if (event.keyCode === 13) {
			$(this).closest("article").find("p").text($(this).val());
			$(this).closest("article").removeClass("editing");

		}
	});

	//end items in the </li>

	$(".show-all").on("click", function(event){
		$("article").closest("li").show();
		$(".show-all").addClass("active");
		$(".show-active, .show-completed").removeClass("active");
	})

	$(".show-active").on("click", function(event){
		$("article:not(.completed)").closest("li").show();
		$(".completed").closest("li").hide();
		$(".show-active").addClass("active");
		$(".show-all, .show-completed").removeClass("active");

	})

	$(".show-completed").on("click", function(event){
		$(".completed").closest("li").show();
		$("article:not(.completed)").closest("li").hide();
		$(".show-active, .show-all").removeClass("active");
		$(".show-completed").addClass("active");

	})

	$(".clear").on("click", function(event){
		$(".completed").closest("li").remove();
		$("article").closest("li").show();
		$(".show-all").addClass("active");
		$(".show-active, .show-completed").removeClass("active");
	})




// $('.items').on('click', '.delete', function deleteItem (event){
//    // $(this).closest('li').remove();
// omission is a sign of betrayal fear based.
// dont tell you because don't know what she is going to say.
// I will lose out in some kind of way.
// worried about seeing this side of me.


}TODO();