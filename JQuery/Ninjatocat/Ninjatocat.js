$(document).ready(function(){ 
     
    $('img').click(function() {
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
      });
   
      $('img').click(function() {
        var tempaltsrc = $(this).attr('src')
        $(this).attr("src", $(this).attr('data-alt-src'));
        $(this).attr("data-alt-src", tempaltsrc);
    });
  
});