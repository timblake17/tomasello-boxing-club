(function() {
    console.log("Javascript connected");
})();


$(".menu-toggle").on("click",function(){
  $(".site-nav").toggleClass("siteNavOpen",500);
  $(this).toggleClass("open");

});
