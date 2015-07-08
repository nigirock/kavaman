$( document ).ready(function() {
    var btnSearch =  $(".btn");
    var formSearch = $(".form-control");
    btnSearch.on("click",function(){
       formSearch.toggleClass("block-input-group").focus();
    });
});
