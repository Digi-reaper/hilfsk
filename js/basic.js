function hilfskraft(){
  this.APP         = "Hilfskraft";
  
  this.animation = function() {
    $('.head_intro').css({"background-size":"110% 110%"});
    $(".element").typed({
      strings: ["Hello", "Ola", "Bonjour", "Hola!", "Ciao"],
    });
  }

  this.logofy = function() {
    if(document.body.scrollTop>50||document.documentElement.scrollTop>50){
      $('.logo').addClass('minified');
    }
    else{
      $('.logo').removeClass('minified');
    
    }
  }
}

$(function(){
  $(".trans-on-load").css({'top':'0px'});
  var myapp = new hilfskraft();
  myapp.animation();
});

window.onscroll=function(){
  var myapp = new hilfskraft();
  myapp.logofy();
}



