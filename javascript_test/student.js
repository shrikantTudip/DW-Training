var i=0;
var xhr = new XMLHttpRequest();

xhr.onload = function() {      
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    	newContent += '<table id="mytable" style="border:1px dotted black;width:70%;text-align:left">';
    	newContent += '<tr><th>' + 'Firstname' + '</th>';
    	newContent += '<th>' + 'Lastname' + '</th>';
    	newContent += '<th>' + 'RollNo' + '</th>';
    	newContent += '<th>' + 'Subject' + '</th></tr>';
//	   	newContent += '<tr id="one"><td>' + responseObject.subarr[0].firstname + '</td>';  	    	    	
/* 		newContent += '<td>' + responseObject.subarr[0].lastname + '</td>';
 		newContent += '<td>' + responseObject.subarr[0].rollno + '</td>';
 		newContent += '<td>' + responseObject.subarr[0].subject + '</td>';
 		newContent += '<td><button type="button">' 		 		
 */
 	for (i = 0; i < responseObject.subarr.length; i++) { 
      
      newContent += '<tr id='+i+'><td>' + responseObject.subarr[i].firstname + '</td>';
      newContent += '<td>' + responseObject.subarr[i].lastname 	+ '</td>';
      newContent += '<td>' + responseObject.subarr[i].rollno 	+ '</td>';
      newContent += '<td>' + responseObject.subarr[i].subject 	+ '</td>';
      newContent += '<td><button type="button" onclick="editform('+i+');">' + 'Edit' + '</button></td>';
      newContent += '<td><button type="button" onclick="removefunction('+i+');">' + 'Remove' + '</button></tr>';      
    }
    
      newContent += '</table>';
    document.getElementById('content').innerHTML = newContent;

  
};

xhr.open('GET', 'student.json', true);
xhr.send(null);

var x=document.getElementById('add');
x.onclick=subfunction;

function subfunction(){
	y=document.getElementById('frm');
	y.style.display='block';
	y.submit.value="submit";
}

var sub=document.getElementById('submit');
sub.onclick=addfunction;

function addfunction() {
	var fname=document.getElementById('firstname').value;
	var lname=document.getElementById('lastname').value;
	var rno=document.getElementById('rollno').value;
	var sbjct=document.getElementById('subject').value;
	var edbtn='<button type="button" id="edit" onclick="editform('+ i+1 +');">' + 'Edit' + '</button>';
	var rmbtn='<button type="button" onclick="removefunction('+ i+1 +');">' + 'Remove' + '</button>';
	var tab=document.getElementById('mytable');
	var row=tab.insertRow(1);


	row.setAttribute("id", ''+ i+1 +'');
	i=i+1;
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	console.log(i);
cell1.innerHTML=fname;
cell2.innerHTML=lname;
cell3.innerHTML=rno;
cell4.innerHTML=sbjct;
cell5.innerHTML=edbtn;
cell6.innerHTML=rmbtn;

}

function removefunction(x) {

	console.log(i);
	y=document.getElementById(''+x+'');
	console.log(y.parentNode);
	q=y.parentNode.removeChild(y);
}
/*	var row1=document.getElementById('i');
	row1.deleteCell(0);
	row1.deleteCell(1);
	row1.deleteCell(2);
	row1.deleteCell(3);
	var target, elparent, elgrandparent;
	target=getTarget(x);
	elparent=target.parentNode;
	elgrandparent=target.parentNode.parentNode;
	elgrandparent.removeChild(elparent);
*/

	/*if(e.preventDefault){
		e.preventDefault();
	}else {
		e.returnValue = false;
	}*/




function editform(a){
	//b=a;
	//w=document.getElementById(''+a+'');
	b=a;
	y=document.getElementById('frm');
	y.style.display="block";
	var ed=document.getElementById('editin');
	//ed.onclick=editfunction;
	ed.addEventListener('click', function(){editfunction(b);},false);
}


function editfunction(b){

	var fname=document.getElementById('firstname').value;
	var lname=document.getElementById('lastname').value;
	var rno=document.getElementById('rollno').value;
	var sbjct=document.getElementById('subject').value;

	var r=document.getElementById(''+b+'');
	//var f='<td>'+fname+'</td><td>'+lname+'</td><td>'+rno+'</td><td>'+sbjct+'</td><td>';
	var f='<td>'+fname+'</td><td>'+lname+'</td><td>'+rno+'</td><td>'+sbjct+'</td><td><button type="button" id="edit" onclick=editform('+ b +')>Edit</button></td><td><button onclick="removefunction('+ b +');">Remove</button></td>';
	r.innerHTML=f;
}
