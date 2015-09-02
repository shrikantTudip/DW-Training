$(".submit").click(function(){
	var t1=$("#t1s").val();
	var t2=$("#t1e").val();
	var t3=$("#t2s").val();
	var t4=$("#t2e").val();
	var t5=$("#t3s").val();
	var t6=$("#t3e").val();
	var t7=$("#t4s").val();
	var t8=$("#t4e").val();
	var t9=$("#t5s").val();
	var t10=$("#t5e").val();
	var to=" to ";
	var ls="<li>";
	var le="</li>";

	console.log(t1);
	console.log(t2);
	console.log(t3);
	console.log(t4);
	console.log(t5);
	console.log(t6);	

	if(t1<t2&&t3<t4&&t5<t6&&t7<t8&&t9<t10){
	//if(t1<t3&&t2<t4&&t1<t2&&t3<t4&&t3<t5&&t4<t6&&t5<t6&&t5<t7&&t6<t8&&t7<t8&&t7<t9&&t8<t10&&t9<t10){
		if(t2==t3||t2>t3){
			if(t4==t5||t4>t5){
				if(t6==t7||t6>t7){
					if(t8==t9||t8>t9){
						$("#ul1").append(ls,t1,to,t10,le);		
					}
					else{
						$("#ul1").append(ls,t1,to,t8,le);
						$("#ul2").append(ls,t9,to,t10,le);		
					}
				}
				else{
					if(t8==t9||t8>t9){
						$("#ul1").append(ls,t1,to,t6,le);
						$("#ul2").append(ls,t7,to,t10,le);
					}
					else{
						$("#ul1").append(ls,t1,to,t6,le);
						$("#ul2").append(ls,t7,to,t8,le);
						$("#ul3").append(ls,t9,to,t10,le);	
					}
				}
				//$("#ul1").append(ls,t1,to,t6,le);
			}
			else{
				if(t6==t7||t6>t7){
					if(t8==t9||t8>t9){
						$("#ul1").append(ls,t1,to,t4,le);
						$("#ul2").append(ls,t5,to,t10,le);	
					}
					else{
						$("#ul1").append(ls,t1,to,t4,le);
						$("#ul2").append(ls,t5,to,t8,le);
						$("#ul3").append(ls,t9,to,t10,le);	
					}
					
				}
				else{
					if(t8==t9||t8>t9){
						$("#ul1").append(ls,t1,to,t4,le);
						$("#ul2").append(ls,t5,to,t6,le);
						$("#ul3").append(ls,t7,to,t10,le);	
					}
					else{
						$("#ul1").append(ls,t1,to,t4,le);
						$("#ul2").append(ls,t5,to,t6,le);	
						$("#ul3").append(ls,t7,to,t8,le);	
						$("#ul4").append(ls,t9,to,t10,le);			
					}
					
				}
			}
		}
		else{ 
			if(t4==t5||t4>t5){
				if(t6==t7||t6>t7){
					if(t8==t9||t8>t9){
						$("#ul1").append(ls,t1,to,t2,le);
						$("#ul2").append(ls,t3,to,t10,le);		
					}
					else{
						$("#ul1").append(ls,t1,to,t2,le);		
						$("#ul2").append(ls,t3,to,t8,le);		
						$("#ul3").append(ls,t9,to,t10,le);			
					}
				
				}
			
				else{
					if(t8==t9||t8>t9){
						$("#ul1").append(ls,t1,to,t2,le);
						$("#ul2").append(ls,t3,to,t6,le);
						$("#ul3").append(ls,t7,to,t10,le);	
					}
					else{
						$("#ul1").append(ls,t1,to,t2,le);
						$("#ul2").append(ls,t3,to,t6,le);
						$("#ul3").append(ls,t7,to,t8,le);
						$("#ul4").append(ls,t9,to,t10,le);		
					}
					
				}
			}
			else{
				if(t6==t7||t6>t7){
					if(t8==t9||t8>t9){
						$("#ul1").append(ls,t1,to,t2,le);
						$("#ul2").append(ls,t3,to,t4,le);
						$("#ul3").append(ls,t5,to,t10,le);	
					}
					else{
						$("#ul1").append(ls,t1,to,t2,le);
						$("#ul2").append(ls,t3,to,t4,le);
						$("#ul3").append(ls,t5,to,t8,le);
						$("#ul4").append(ls,t9,to,t10,le);		
					}
					
				}
				else{
					if(t8==t9||t8>t9){
						$("#ul1").append(ls,t1,to,t2,le);
						$("#ul2").append(ls,t3,to,t4,le);
						$("#ul3").append(ls,t5,to,t6,le);
						$("#ul4").append(ls,t7,to,t10,le);
					}
					else{
						$("#ul1").append(ls,t1,to,t2,le);
						$("#ul2").append(ls,t3,to,t4,le);
						$("#ul3").append(ls,t5,to,t6,le);
						$("#ul4").append(ls,t7,to,t8,le);
						$("#ul4").append(ls,t9,to,t10,le);
					}
				}
			}
		}
	}
	else{
		alert("Wrong Input");
	}
});