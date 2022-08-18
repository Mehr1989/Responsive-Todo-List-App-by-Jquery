$("document").ready(function(){
    $(".txtb").on("keyup",function(e){
        //13 means enter button
        if(e.keyCode == 13 && $(".txtb").val() !=""){
            var task=$("<div class='task'></div>").text($(".txtb").val());
            var del=$('<i class="fa fa-check" aria-hidden="true"></i>').click(function(){
                var p=$(this).parent();
                p.fadeOut(function(){
                    p.remove();
                })
            })
            var check=$('<i class="fa fa-trash" aria-hidden="true"></i>').click(function(){
                var p=$(this).parent();
                p.fadeOut(function(){
                   $(".attach-comp").append(p);
                   p.fadeIn();

            })
            $(this).remove();
        })
        
        task.append(del,check);

        $('.attach-notcomp').append(task);
            //to clear the input
        $(".txtb").val("")
        }
        

    })
})


