//business logic
function Pizza (name, size, toppings, total){
  this.name = name;
  this.size = size;
  this.toppings = []
}

Pizza.prototype.basePrice = function(newPizza){
  var total = 0;

  if (this.size === "Large") {
    total = 20
  } else if (this.size === "Medium"){
    total = 15
  } else {
    total = 10
  }
    return total
  };

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

    var final = newPizza.basePrice() + newPizza.toppings.length*1.5;
    // newPizza.total(total)
      $(".name").text(newPizza.name);
      $(".size").text(newPizza.size);
      $(".toppings").text(newPizza.toppings);
      $(".price").text("$"+final.toFixed(2));
      $(".output").show();
      // $("#formOne").hide();
      console.log(newPizza.total)
    });

  // $("#return").click(function(){
  // location.reload();

  // })


  });
