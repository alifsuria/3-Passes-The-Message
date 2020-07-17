$(document).ready(function() {
  $(".message-form").submit(function(a){
    a.preventDefault();
    const feedback = $(".feedback");
    const input = $(".input-box");
    if(input.val() === ''){
      feedback.toggle("delete").fadeOut(1500)
    } else {
      $(".last-message").html(input.val())
      input.val("");
    }

  })
});
