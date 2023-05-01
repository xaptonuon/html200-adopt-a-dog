function showDogInformation(dog, breed, price) {
    const description = 'You have clicked on ' + dog + '. Adoption fees for this ' + breed + ' will cost: ' + price;
    alert(description);
}

let total = 0;
$(document).ready(function(){
  $(".adopt").click(function(){
      total+=123.45;

      $("#cart-total").text(total);
      alert('Total: $' + total);
  });
 
  });