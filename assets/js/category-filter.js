var buttonId = localStorage.getItem("key");
filterSelection(buttonId);
activeButton = document.getElementById(buttonId);
activeButton.style.background = activeButton.style.borderColor;
activeButton.style.color = "white";
activeButton.className +=" active";

function filterSelection(c){
    var x, i;
    x = document.getElementsByClassName("center");
    if (c=="all") c="";
    for (i=0; i<x.length; i++){
        AddClass(x[i], "hide");
        if (x[i].className.indexOf(c)>-1) RemoveClass(x[i], "hide");
    }   
}

function AddClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i< arr2.length; i++){
        if (arr1.indexOf(arr2[i])==-1){
            element.className += " "+ arr2[i];
        }
    }
}

function RemoveClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i<arr2.length; i++){
        while(arr1.indexOf(arr2[i])>-1){
           arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

$(".category-button").click(function(){
    var current = document.getElementsByClassName("category-button active");
    current[0].style.background = "white";
    current[0].style.color =current[0].style.borderColor;
    console.log(current[0].className);
    current[0].className= current[0].className.replace(" active", "");
    this.className +=" active";
    this.style.background = this.style.borderColor;
    this.style.color = "white";
})

$(".category-button").hover(function(){
    if(this.className.split(" ").pop()!="active"){
         $(this).css("color", "white");
    $(this).css("background-color", this.style.borderColor);
    };
  }, function(){
    if (this.className.split(" ").pop()!="active"){
    $(this).css("background-color", "white");
  $(this).css("color", this.style.borderColor);}
});