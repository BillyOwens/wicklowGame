window.onload = function() {
  
  // Display the todo items.
  todoDB.open(refreshTodos);
  
  
  // Get references to the form elements.
  var newTodoForm = document.getElementById('new-todo-form');
  var newTodoInput = document.getElementById('new-todo');
  
  
  // Handle new todo item form submissions.
  newTodoForm.onsubmit = function() {
    // Get the todo text.
    var text = newTodoInput.value;
    
    // Check to make sure the text is not blank (or just spaces).
    if (text.replace(/ /g,'') != '') {
      // Create the todo item.
      todoDB.createTodo(text, function(todo) {
        refreshTodos();
      });
    }
    
    // Reset the input field.
    newTodoInput.value = '';
    
    // Don't send the form.
    return false;
  };
  
}

// Update the list of todo items.
function refreshTodos() {  
  todoDB.fetchTodos(function(todos) {
    var todoList = document.getElementById('todo-items');
    todoList.innerHTML = '';
    
    for(var i = 0; i < todos.length; i++) {
      // Read the todo items backwards (most recent first).
      var todo = todos[(todos.length - 1 - i)];

      var li = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.className = "todo-checkbox";
      checkbox.setAttribute("data-id", todo.timestamp);
      
      li.appendChild(checkbox);
      
      var span = document.createElement('span');
      span.innerHTML = todo.text;
      
      li.appendChild(span);
      
      todoList.appendChild(li);
      
      // Setup an event listener for the checkbox.
      checkbox.addEventListener('click', function(e) {
        var id = parseInt(e.target.getAttribute('data-id'));

        todoDB.deleteTodo(id, refreshTodos);
      });
    }

  });
}


//function to build handlers for all buttons used in the example code
//these can be called by onLoad as needed
function setupPages(){	
	
$('#page3testAjaxButton').bind("click", function () {
			//window.alert("page 3 Button Clicked!");
    $('#page3Text').attr('innerHTML','<h4> to ask questions and hold eye contact ;  </h4>');
});

$('#page3ListButton').bind("click", function () {
	//full commenting is provided in lab 4 solutions for question 3
			//window.alert("page 3 Button Clicked!");
for (y=0; y<10; y++){
	$('#page3ExampleList').append('<li><h3 style="white-space:normal">This is list item '+ y + '</h3></li>');
	}
	$('#page3ExampleList').listview( 'refresh' );
});




$('#page4ListButton').bind("click", function () {
	//full commenting is provided in lab 4 solutions for question 4
	//window.alert("page 4 Button Clicked!");
	var currentText= $('#page4TextInput').val();
			//pass them out to an alert to make sure they are correct
			//window.alert(currentText);
	$('#page4InputList').append('<li><h3 style="white-space:normal">This is list item '+ page4ListCounter + '</h3><p>' + currentText + '</p></li>');
	//increment the global list index variable
	page4ListCounter++;
	$('#page4InputList').listview( 'refresh' );
});




$('#page5AJAXButton').bind("click", function(){
	//window.alert("page 5 Button Clicked!");
	//set text box to loading message
	$('#page5Text').attr('innerHTML','Loading Data.....');
	//example URL for AJAX remote call taken from
	//http://www.jquery4u.com/demos/ajax/
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
{
  tags:"best resume",
  tagmode: "any",
  format: "json"
},
function(data) {
	$('#page5Text').attr('innerHTML','');
  $.each(data.items, function(i,item){			  
	  $('#page5ImageList').append('<li><a><img src="' + item.media.m + '"/><p>This is list item '+ i + '</p></a></li>');
    if ( i == 10 ) return false;
  });
});//end of JSON Call

});//end of page5AJAXButton click handler

//new handlers for touch events, swap with mouseUp/mouseDown for
//development in Dreamweaver or a web browser
    $('#page5AJAXButton').bind('mouseDown', function () {
//    $('#page5AJAXButton').bind('touchstart', function () {
      //do something with your buttons here
                                });
    $('#page5AJAXButton').bind('mouseUp', function () {
//    $('#page5AJAXButton').bind('touchend', function () {
		//cleanout the tag to prevent results being duplicated
        //do something with your buttons here
                                });

}//end of setupPages()

window.onload = function() {
  
  // Display the todo items.
  todoDB.open(refreshTodos);
  
  
  // Get references to the form elements.
  var newTodoForm = document.getElementById('new-todo-form');
  var newTodoInput = document.getElementById('new-todo');
  
  
  // Handle new todo item form submissions.
  newTodoForm.onsubmit = function() {
    // Get the todo text.
    var text = newTodoInput.value;
    
    // Check to make sure the text is not blank (or just spaces).
    if (text.replace(/ /g,'') != '') {
      // Create the todo item.
      todoDB.createTodo(text, function(todo) {
        refreshTodos();
      });
    }
    
    // Reset the input field.
    newTodoInput.value = '';
    
    // Don't send the form.
    return false;
  };
  
}
