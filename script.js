
$(document).ready(function(){
$("#menu4").draggable();


    $("#menuitem1").click(function(){
console.log("click")
$("#menuitem1").html("<p>Hello!</p>");
  })

  $("#menuitem2").hover(function(){
    $("#menuitem2").html("😄😄😄");

  })

  $("#menuitem3").click(function(){
    $("#menuitem3").fadeToggle("slow","linear");
  
  })

  $("#container1").click(function(){
    $("#container1").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  })
    
$("#menu5").click(function(){
  $("#menu5").slideUp();
})

$("#menuitem6").click(function(){
  $("#menuitem6").animate({
    marginLeft: '0%',
    width:'35%'
});
})

$("#menuitem4").click(function(){
  $("#menuitem4").animate({
    margiRight: '0%',
    width:'35%'
});
})

$("#container2").click((function() {
  var i = 0;
  return function(){
      $(this).animate({height:(++i % 2) ? 40 : 10},200);
      $(this).animate({fontSize: "30px"}, 1000);
    }
})());


  
       // $("#container2").fadeToggle();
       //$("#container2").animate({
           //opacity:'0.2',
          // height:'60%',
         //  width: '60%',}2000, function(){
              // alert("The paragraph is hiddedn");
          // }

       //})

  
  

  

  $("#menuitem5").click(function(){
      console.log("menuitem5clicked")
      scrollTo(0,5000)
  })

  $("#menu6").click(function(){
    $("#menu6").animate(
      {deg: 360},
      {duration: 1200,
      step: function(now){
          $(this).css({transform: 'rotate(' + now + 'deg)'})
      }}
  )
})



});



    // $("#menuitem1").click(function(){
    //       $("#container1").html("<p>hello this is an html<br>paragraph element</p>");
    //   })

    // $("#menuitem2").click(function(){
    //     $("#container1").append("this is append");
    // })

    // $("#menuitem3").click(function(){
    //   $("#container1").text("this is text");
    // })

    //   $(".menu2").children().click(function(){
    //     console.log("click")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //     console.log("click")
    //     $("#container2").slideToggle(1000, "swing");
    //     $("#container2").fadeToggle();
    //     $("#container2").animate({
    //       opacity: '0.2',
    //       height: '60%',
    //       width: '60%',},2000,function(){
    //         alert("The paragraph is now hidden");
    //     });
    //     })
    //   $("#menuitem6").click(function(){
    //       scrollTo(0,5000)
    //   })

    //   $( ".menu3" ).children().draggable();


