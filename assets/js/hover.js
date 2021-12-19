function clickMe(c){
    localStorage.setItem("key", c);
}

$(".category-button").hover(function(){
         $(this).css("background-color", this.style.color);
    $(this).css("color", "white");
    }, function(){
    $(this).css("color", this.style.borderColor);
  $(this).css("background-color", "white");}
);