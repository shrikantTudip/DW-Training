var xhr = new XMLHttpRequest();                
xhr.onload = function() {                      
    responseObject = JSON.parse(xhr.responseText);
   $.urlParam = function(name, url) {
    if (!url) {
     url = window.location.href;
    }
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) { 
        return undefined;
    }
    return results[1] || undefined;
}
var langval = $.urlParam('name');
var info="";
for (i = 0; i < responseObject.imgdata.length; i++) { 
      
    if(langval==responseObject.imgdata[i].imgid){
        document.getElementById("p-img-1").src=responseObject.imgdata[i].imgsource1;
        document.getElementById("p-img-2").src=responseObject.imgdata[i].imgsource2;
        info +='<h2>'+ responseObject.imgdata[i].pname + '</h2>';
        info +='<h3>'+ responseObject.imgdata[i].price + '</h3>';
        info +='<ul><li>'+ responseObject.imgdata[i].one + '</li>';
        info +='<li>'+ responseObject.imgdata[i].two + '</li>';
        info +='<li>'+ responseObject.imgdata[i].three + '</li>';
        info +='</ul>';

      document.getElementById("p-text").innerHTML=info;
      break;

    }
  }
};

xhr.open('GET', 'js/data.json', true);        
xhr.send(null);


$(".add-cart-link").on('click', function(){
  var text="Hello";
  alert(text);
});