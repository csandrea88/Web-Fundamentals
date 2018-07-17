function StudentsandInstructors() {

    var students = [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
   ]
   
    
    console.log("Students: "); 
    for (var kids in students) {  
        
        console.log(students[kids].first_name + " " + students[kids].last_name + "- " + (students[kids].last_name.length + students[kids].first_name.length));
    }    
}
StudentsandInstructors();