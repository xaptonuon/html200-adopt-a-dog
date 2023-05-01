$('.checkout-form').submit(function( event) {
    if ($('#name').val(),$('#email-address').val(),$('#street-address').val(),$('#city').val() == "") {
      alert("Please fill out all the required information.")
    }

    else {
    event.preventDefault();
    alert("Thank you The form information has been received.")
    console.log("Name: " + $('#name').val());
    console.log("Email: " + $('#email-address').val());
    console.log("Street: " + $('#street-address').val());
    console.log("City: " + $('#city').val());
    }
  });