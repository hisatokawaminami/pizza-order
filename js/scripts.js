//business logic
function Pizza (name, size, toppings, total){
  this.name = name;
  this.size = size;
  this.toppings = []
  // this.total = total
}

// Pizza.prototype.total = function(total){
//   var toppingPrice = this.topping.length * 1.5;
//   if (this.size === "large") {
//     total = 18 + toppingPrice;
//   } else if (this.size === "medium"){
//     total = 15 + toppingPrice;
//   } else {
//     total = 10 + toppingPrice;
//   }
//   // this.toppings.forEach(function(){
//   //   total += 1.5
//   // });
//     return this.total
//   };


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

    function sizePrice(){
      total = 0

        if (selectedSize === "Large") {
          total = 20
        } else if (selectedSize === "Medium"){
          total = 15
        } else {
          total = 10

    } return total
    }
    var basePrice = sizePrice()
    var totalPrice = basePrice + newPizza.toppings.length*1.5

    // newPizza.total(total)
      $(".name").text(newPizza.name);
      $(".size").text(newPizza.size);
      $(".toppings").text(newPizza.toppings);
      $(".price").text("$"+totalPrice.toFixed(2));
      $(".output").show();
      console.log(newPizza.total)
    });

  });
