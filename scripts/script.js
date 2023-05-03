function successAddCart(){
    var x = document.getElementById("addcart");
    x.className = "show";
    setTimeout(function(){x.className = x.className.replace("show", "");}, 3000);
    console.log("yawa");
}

