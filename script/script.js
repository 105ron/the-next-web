$(document).ready(function(){ 
  // for the inital loading
  categoryHeight('.category-image');
  halfHeight('.story-image');
  // for when the user resizes
  $(window).resize(function(){
    categoryHeight('.category-image');
    halfHeight('.story-image');
  });

  function halfHeight(id) {
    $(id).height(function() { 
      var myWidth = $(id).width() > 72;
      return myWidth ? (.5 * $(id).width()) : 72;
    });
  };

  function categoryHeight(id) {
    $(id).height(function() { 
      return .75 * $(id).width()
    });
  };

});