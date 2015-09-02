var start = [];
var finish = [];
$(document).ready(function(){
	$("#submit").on('click', function(){
		//console.log("hello");
		var t1 = $("#t1").val();
		
		var t2 = $("#t2").val();
		
		var t3 = $("#t3").val();
		
		var t4 = $("#t4").val();
		
		var t5 = $("#t5").val();
		
		var t6 = $("#t6").val();
		
		var t7 = $("#t7").val();
		
		var t8 = $("#t8").val();
		
		var t9 = $("#t9").val();
		
		var t10 = $("#t10").val();
		
		
		start = $("input.firstname").map(function () {
    		return this.value;
		});
		

		finish = $("input.lastname").map(function () {
    		return this.value;
		});
		

		var from,to;
		var i=0;
		from=0;
		for(i=0;i<finish.length;i++)
		{
			if(finish[i]<start[i+1])
			{
				from=start[i];
				to=finish[i];
				//i=i+1;
				console.log(from,to);
			}

			
			if(finish[i]>=start[i+1])
			{
				//var j=i;
				from = start[i];
				while(finish[i]>=start[i+1])
				{
					to=finish[i+1];
					i=i+1;
				}
				console.log(from,to);
			}
			
		}



	});
});