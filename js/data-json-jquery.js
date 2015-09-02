
$(document).ready(function(){
	$.getJSON("data/data.json",function(data){
		$.each(data, function(i,field){
			$("#tmain").append('<tr><td>'+field.FirstName+'</td><td>'+field.LastName+
				'</td><td>'+field.RollNo+'</td><td>'+field.Subject+
				'</td><td><button class="edit" >' + 'edit' +'</button></td><td><button class="rem">remove</td></tr>');
		});
	});

	$("#add").on('click', function(){
		$("#fo").css("display", "block");
	});	

	$("#submit").on('click', function(){
		$("#tmain").append('<tr><td>'+ $('#FirstName').val() +'</td><td>'+ $("#LastName").val() +'</td><td>'+ $("#RollNo").val() +'</td><td>'+ $("#Subject").val() +
				'</td><td><button class="edit">edit</button></td><td><button class="rem">remove</td></tr>');
	});

	$(".rem").on('click', function(){
		console.log("duhd");
		$(this).parent().parent().css('color', 'green');
	});

});


