$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();

    $(".printname").text(nameInput);
    $(".printaddress").text(addressInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
