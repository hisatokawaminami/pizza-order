//business logic
function Pizza (name, size, toppings){
  this.name = name;
  this.size = size;
  this.toppings = []

}



//userinterface
$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
  var username = $("input#name").val()
  var selectedSize = $("input:radio[name=size]:checked").val()
  var newPizza = new Pizza(username, selectedSize);

  $("input:checkbox[name='topping']:checked").each(function(){
      newPizza.toppings.push($(this).val());
    });

      $(".name").text(newPizza.name);
      $(".size").text(newPizza.size);
      $(".toppings").text(newPizza.toppings);
      $("price").text();
      // $(".output").show();
      console.log(this.size)
    });

  });
