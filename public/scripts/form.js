$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        var formData = $("#form").serialize()
        $.post('/Index', formData, function(datos){
            $("#response").html(datos);
        });
    });
});