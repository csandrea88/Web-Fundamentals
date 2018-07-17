$(document).ready(function(){ 
    //upon submit get text box values
    $('button').click(function(){
         //alert($("#ifname").val()); 
         var  firstName = $("#ifname").val();
         var lastname = $("#ilname").val();
         var email = $("#iemail").val();
         var Cinfo = $("#icontactNo").val();
         
         $('#info tr:last').after("<tr><td>" + firstName + "</td><td>" + lastname + "</td><td>" + email + "</td><td>" + Cinfo + "</td></tr>");
    });
});