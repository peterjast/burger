$(function() {

    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
        eaten: '0'
      };
  console.log(newBurger)
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("neweaten") === false;
  
      var newEatenState = {
        eaten:  newEaten
      };
      console.log('id:' + id)
      console.log('eaten:' + newEatenState.eaten)
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed eaten state to", newEaten);
          location.reload();
        }
      );
    });
  })