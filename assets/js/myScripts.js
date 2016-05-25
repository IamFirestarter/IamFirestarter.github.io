// "code to hide hint div"
var hideHint = function(){
	$("#hint").hide();
}

var showHint = function(){
	$("#hint").show();
	setTimeout(function(){hideHint();},5000);
}
$(document).ready(function(){
    $("#hint").click(function(){
        hideHint();
    });
    setTimeout(function(){hideHint();},5000);
    // $("#show").click(function(){
    //     $("p").show();
    // });
});

// add responsive class to all images
var addResponsive = function(){
var images = document.getElementsByTagName("img");
var i;

// init at 1 so logo is unaffected
for(i = 1; i < images.length; i++) {
    images[i].className += "img-responsive";}
};
addResponsive();