$(document).ready(function(){ 
    
    // .click 
    $('button#click').click(function(){
        alert("I was clicked");
    });
    
    //.hide and .show
    $('button#hide').click(function(){
        $('#HSContent').hide("slow");
    });
    $('button#show').click(function() {
        $('#HSContent').show("slow");
    });
    //.toggle
    $('button#toggle').click(function() {
        $('#TogContent').toggle("slow");
    });
    //.fadeIn, .slidedown, .slidetoggle
    $('button#fadeIn').click(function() {
        $('#fadeContent').fadeIn("slow");
    });
    $('button#fadeOut').click(function() {
        $('#fadeContent').fadeOut("slow");
    });
    //.addClass
    $('button#addClass').click(function() {
        $('#addClassContent').addClass("selected");
    });
    //.before, .after
    $('button#before').click(function() {
        $('#bfContent').before("<p>Description: </p>");
    });
    $('button#after').click(function() {
        $('#ahContent').after("<p>So Cool</p>");
    });
    //.append, .html
    $('button#append').click(function() {
        $('#ahContent').append("<strong>Hello <b>append</b></strong>");
    });
    $('button#html').click(function() {
        $('#ahContent').html("<strong>Hello <b>html</b></strong>");
    });
    //.attr, .val
    $('button#attr').click(function() {
        $('#avContent').attr("title", "attribute button");
    });
    $('button#val').click(function() {
        $('#tbox').val("val change");
    });
    //.text, .data
    $('button#text').click(function() {
        var str = $('#text1Content').text();
        $('#texttbox').val(str);
    });
    $('button#data').click(function() {
        var strdata = $.data("#data","name");
        console.log(strdata);
    });


    
});