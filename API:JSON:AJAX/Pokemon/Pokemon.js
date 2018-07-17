$(document).ready(function(){ 

    for (var i = 1; i <= 151; i++) {
        
        var html_str = "";

        $.get("https://pokeapi.co/api/v2/pokemon/"+i+"/", function(res) {
          
          html_str = "<img src='" + res.sprites.front_default + "'></img>";
          
          $('#images').append(html_str); 

        },'json');

    }

    
});