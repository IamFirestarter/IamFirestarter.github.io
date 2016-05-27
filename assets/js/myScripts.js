// google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-43077921-11', 'auto');
ga('send', 'pageview');

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