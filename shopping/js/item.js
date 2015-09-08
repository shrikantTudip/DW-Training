var xhr = new XMLHttpRequest();                
var imgid,imgsource,imgname,price;
var cart = [];
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
for (var i = 0; i < responseObject.imgdata.length; i++) {       
    if(langval==responseObject.imgdata[i].imgid){
        document.getElementById("img1").src=responseObject.imgdata[i].imgsource;
        document.getElementById("img2").src=responseObject.imgdata[i].imgsource;
        info +='<ul><li>'+'ID:'+ responseObject.imgdata[i].imgid + '</li>';
         imgid=responseObject.imgdata[i].imgid;
      //  console.log(imgid);
        info +='<li>'+'SOURCE:'+ responseObject.imgdata[i].imgsource + '</li>';
         imgsource=responseObject.imgdata[i].imgsource;
       // console.log(imgsource);
        info +='<li>'+'NAME:'+ responseObject.imgdata[i].imgname + '</li>';
         imgname= responseObject.imgdata[i].imgname;
        //console.log(imgname);
        info +='<li>'+'PRICE:'+ responseObject.imgdata[i].price + '</li>';
         price=responseObject.imgdata[i].price;
        //console.log(price);
        info +='</ul>';
        document.getElementById("information").innerHTML=info;
        break;

      }
  
  }


};

xhr.open('GET', 'js/data.json', true);        
xhr.send(null);     


$("#addcart").on('click', function(){
    $(".cart").css("display","block");
   // console.log(imgname);

 /*   cart.push({
       imgid:imgid ,
       imgsource: imgsource ,
       imgname: imgname,
       price:  price
    });
    sessionStorage.setItem("cart", JSON.stringify(cart));
  
   $('#showcart').html(sessionStorage.getItem("cart"));
   console.log(cart[0].imgid);
   console.log(cart[1].imgname);*/



     
      // Get current state of our items from session
      var items = JSON.parse(sessionStorage.getItem("cart"));
      if(items === null) // if cart is empty
          items = [];
     
      // Populate the item
      var item = {
       imgid:imgid ,
       imgsource: imgsource ,
       imgname: imgname,
       price:  price
      };
      items.push(item); // Push item to the cart
      console.log("item="+item.price);

      sessionStorage.setItem("cart", JSON.stringify(items)); // Save cart back to session
      addToCart(item); // append item to the cart
      
  

   populateCart(); // Populates the cart when page loads
var x;
var p=0;
//var z=0;
function populateCart(){
  var test = 0;
  var items = JSON.parse(sessionStorage.getItem("cart"));
  x=items.length;
    if(items !== null){
       var cart = $('#showcart > ul');
       for (i = 0; i < items.length; i++) {
         cart.append('<li>' + items[i]['imgsource'] + "</li>");
         p = parseInt(items[i]['price'],10);
         // console.log(type(p));
        console.log(test);
       
         test = Number(test) + parseInt(p);
         // alert("sdad");
         console.log(test);
       }
    }
    $("#itemno").text(x);
//console.log(p);
$("#itemprice").text(test);
}



function addToCart(item){
  $('#showcart > ul').append('<li>'+ item['imgname'] +'</li>');
}


});