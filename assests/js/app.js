//Checkoff Specific todos by Clicking
$("ul").on( "click", "li" ,function(){
    //if li is gray
    if($(this).css("color") === "rgb(128, 128, 128)")
    {
        $(this).css(
            {
                color:"black",
                textDecoration :"none"
            }
        );
    }
    else
    {
        console.log("hello_2");
        $(this).css({
                color:"gray",
                textDecoration:"line-through"
        }
        );
    }
}
);
//delete todos
$("ul").on("click","span",function (event) {
    $(this).parent().fadeOut(500,function () {
      $(this).remove();
    });
     event.stopPropagation();
    }
);

//insert todos
$("input[type='text']").keypress(function(event)
    {
        if(event.which === 13)
        {
            //grabbing value from input field
            var todoText = $(this).val();
            $(this).val("");
            //
            $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>" + todoText + "</li>")
        }
    }
);

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle(350)
});