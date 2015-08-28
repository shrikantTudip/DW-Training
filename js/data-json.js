var i=0;

var xhr = new XMLHttpRequest();                

xhr.onload = function() {                      
    responseObject = JSON.parse(xhr.responseText);

   
    var newContent = '';
	newContent += '<table id="table" style="border:1px solid black; width:70% ;height:40%; text-align:left">';
	newContent +='<tr><th>'+'name'+'</th><th>'+'lastname'+'</th><th>'+'Rollno'+'</th><th>'+'subject'+'</th><th>'+'edit'+'</th><th>'+'remove'+'</th></tr>';
    for (i = 0; i < responseObject.events.length; i++) { 
      
    	newContent += '<tr id='+i+'><td>'+ responseObject.events[i].FirstName + '</td>';
      newContent += '<td>' + responseObject.events[i].LastName + '</td>';
      newContent +='<td>' + responseObject.events[i].RollNo + '</td>'+'   ';
      newContent += '<td>' + responseObject.events[i].Subject + '</td>';
	newContent+='<td><button type="button" class="edit" onclick="myedit('+i+');"  >' + 'edit' +'</button></td>';
	newContent+='<td><button type="button" class="but" onclick="rem('+i+');" >' + 'remove' +'</button></td></tr>';
  
    }
 newContent +='</table>';
   
    document.getElementById('content').innerHTML = newContent;

};

xhr.open('GET', 'data/data.json', true);        
xhr.send(null);                

var x=document.getElementById('add');
x.onclick=myfunction;

function myfunction()
{
y=document.getElementById('fo');
y.style.display="block";
y.submit.value="submit"
//alert("add");
//document.getElementsByTagName('input').textContent="";

}


var sub=document.getElementById('submit');
sub.onclick=addfunction;
function addfunction()
{
var a=document.getElementById("FirstName").value;
var b=document.getElementById("LastName").value;
var c=document.getElementById("RollNo").value;
var d=document.getElementById("Subject").value;
var e='<button type="button" id="edit" onclick=myedit('+ i +')>' + 'edit' +'</button>';
var f='<button type="button" class="remove" onclick="rem('+ i +');" >' + 'remove' +'</button>';

var tab = document.getElementById("table");
var row = table.insertRow(1);
row.setAttribute("id",''+ i +'');
i=i+1;
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
console.log(i);


cell1.innerHTML = a;
cell2.innerHTML = b;
cell3.innerHTML = c;
cell4.innerHTML = d;
cell5.innerHTML = e;
cell6.innerHTML = f;

}



function rem(x)
{	
	console.log(i);
	//console.log(x);
	y=document.getElementById(''+x+'');
	//console.log(y);
	console.log(y.parentNode);
	p=y.parentNode.removeChild(y);
	
	//document.getElementById('table').innerHTML=p;
}

function myedit(x)
{
s=x;
y=document.getElementById('fo');
y.style.display="block";
var sub=document.getElementById('replace');
sub.addEventListener('click', function(){edit(s);},false);
}
function edit(s)
{
	var a=document.getElementById("FirstName").value;
	var b=document.getElementById("LastName").value;
	var c=document.getElementById("RollNo").value;
	var d=document.getElementById("Subject").value;

	var r=document.getElementById(''+s+'');
	var n='<td>'+a+'</td><td>'+b+'</td><td>'+c+'</td><td>'+d+'</td><td><button type="button" id="edit" onclick=myedit('+ s +')>edit</button></td><td><button class="remove" onclick="rem('+ s +');">remove</button></td>';
	r.innerHTML=n;

}
