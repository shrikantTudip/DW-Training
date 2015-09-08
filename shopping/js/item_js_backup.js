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

    cart.push({
       imgid:imgid ,
       imgsource: imgsource ,
       imgname: imgname,
       price:  price
    });
    sessionStorage.setItem("cart", JSON.stringify(cart));
  
   $('#showcart').html(sessionStorage.getItem("cart"));
   console.log(cart[0].imgid);
   console.log(cart[1].imgname);


/*  $(document).on("click", ".item", function() { 
     
      // Get current state of our items from session
      var items = JSON.parse(sessionStorage.getItem("cart"));
      if(items === null) // if cart is empty
          items = [];
     
      // Populate the item
      var item = {
        inventory_id: $(this).data('inventory_id'),
        inventory_name: $(this).data('inventory_name'),
        inventory_description: $(this).data('inventory_description'),
        lender_email: $(this).data('lender_email')
      };
      items.push(item); // Push item to the cart
      sessionStorage.setItem("cart", JSON.stringify(items)); // Save cart back to session
      addToCart(item); // append item to the cart
      
    });

   populateCart(); // Populates the cart when page loads

function populateCart(){
  var items = JSON.parse(sessionStorage.getItem("cart"));
    if(items !== null){
       var cart = $('#cart > ul');
       for (i = 0; i < items.length; i++) {
         cart.append('<li>' + items[i]['inventory_name'] + "</li>");
       }
    }
}

function addToCart(item){
  $('#cart > ul').append('<li>'+ item['inventory_name'] +'</li>');
}*/


});