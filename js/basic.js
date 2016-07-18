function hilfskraft(){
  this.APP         = "Hilfskraft";
  this.animation = function() {
    $('.head_intro').css({"background-size":"110% 110%"});
    $(".element").typed({
      strings: ["Hello", "Ola", "Bonjour", "Hola!", "Ciao"],
    });
  }
}

$(function(){
  $(".trans-on-load").css({'top':'0px'});
  var myapp = new hilfskraft();
  myapp.animation()
});



