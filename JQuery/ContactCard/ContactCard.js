$(document).ready(function(){ 
    //upon submit get text box values
    

    $('button').click(function(){
         
         var  firstName = $("#ifname").val();
         var lastname = $("#ilname").val();
         var desc = $("#idesc").val();
         
         console.log(desc);
         
         $('#rightcol').append(
            "<div id='contactnames'>" +
            "<p id='pname' class = 'contactboxn' >" + firstName + " " + lastname + "<br>Click for Description</p>" +
            "<p id='pdesc' class = 'contactboxd hidden' >" + desc + "</p>" +
            "</div>"
         );
    
         
    });

    
});

$(document.body).on('click', '#contactnames', function() {
 
   
    if ($(this).find(".contactboxn").hasClass("hidden") == true ) {
        $(this).find(".contactboxn").removeClass("hidden");
        $(this).find(".contactboxd").addClass("hidden");
    } else if ($(this).find(".contactboxd").hasClass("hidden") == true ) {
        $(this).find(".contactboxd").removeClass("hidden");
        $(this).find(".contactboxn").addClass("hidden");
    }


});


