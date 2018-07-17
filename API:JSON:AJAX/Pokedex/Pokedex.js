$(document).ready(function(){ 
    
    

    for (var i = 1; i <= 5; i++) {

        $.get("https://pokeapi.co/api/v2/pokemon/"+i+"/", function(res) {
            
            var html_str = "";
            
            html_str = "<img class = 'pokeimg' id='" + res.id + "' src='" + res.sprites.front_default + "'></img>";
            
            $('#images').append(html_str); 

        },'json');

    }

    
});

$(document.body).on('click', '.pokeimg', function() {
                
    var pokeI = $(this).attr("id");

    var html_str = "";

    $.get("https://pokeapi.co/api/v2/pokemon/" + pokeI + "/", function(res) {
           
            
          html_str += "<h1>" + res.forms[0].name + "</h1>";
          html_str += "<img id='" + pokeI + "' src='" + res.sprites.front_default + "'></img>";
          
          html_str += "<ul><h2>Types:</h2>"
          
          for (var i=0; i<res.types.length; i++) {
                html_str += "<li>" + res.types[i].type.name + "</li>"
          }
          
          html_str += "</ul>";
          html_str += "<h2>Height</h2>";
          html_str += "<p>" + res.height + "</p>";
          html_str += "<h2>Weight</h2>";
          html_str += "<p>" + res.weight + "</p>";
          

          $('#dex').html(html_str); 

    },'json');

});    
