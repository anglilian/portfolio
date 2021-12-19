$(".center").sort(function(a,b){
    a = $(a).attr("data-date");
    b = $(b).attr("data-date");
    return a<b ? -1 : a>b ? 1 : 0;
}).each(function(){
        $("#div-container").prepend(this);
    });