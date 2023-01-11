$(document).ready(function () {
    $("#button_01").click(function () {
        $("#square").fadeIn ()
        $("#triangle").fadeIn ('slow')
        $("#circle").fadeIn(800);
    });

   $("#button_02").click(function () {
        $("#square").fadeOut ();
        $("#triangle").fadeOut ('slow');
        $("#circle").fadeOut (800);
    });

    $("#button_03").click(function () {
        $("#square").fadeToggle ();
        $("#triangle").fadeToggle ('slow');
        $("#circle").fadeToggle (800);
    });

    $("#button_04").click(function () {
        $("#square").fadeTo('fast', 0.8);
        $("#triangle").fadeTo ('slow', '0.6');
        $("#circle").fadeTo (800, 0.6);
    });
    
   
    $("#button_05").click(function () {
        $("#down").slideDown();
    });
    
    $("#button_06").click(function () {
        $("#down").slideUp();
    });
    
    $("#button_07").click(function () {
        $("#down").slideToggle();
    });

    $("#button_08").click(function () {
        var div = $(".square");
    
        div.animate ({height:'150px', width: '150px', fontSize: '28px', color: 'blue', backgroundColor:'yellow'}, "slow");
        div.animate ({height: '100px', width: '200px', fontSize: '15px', color: 'brown', backgroundColor: 'green'}, "slow");       
        div.animate ({height: '100px', width: '200px', fontSize: '27px', color: 'green', backgroundColor:'black', mozBorderRadius: '100px / 50px',
        webkitBorderRadius: '100px / 50px', borderRadius: '50px'}, "slow");
        div.animate ({height: '150px', width: '100px', fontSize: '20px', color: 'red', backgroundColor:'white'}, "slow");   
        div.animate ({height: '200px', width: '200px', fontSize: '30px', color: 'yellow', backgroundColor:'blue',mozBorderRadius: '60px', webkitBorderRadius: '60px',
        borderRadius:'60px'}, "slow"); 
        div.animate ({height: '100px', width: '100px', fontSize: '15px', color: 'white', backgroundColor:'red', borderRadius: '0px'}, "slow");  
    });
    
    $("#button_move").click (function () {
        $("#panel_move").slideDown(5000);
        
    });
    $("#button_stop").click(function () {
        $(".panel_stop").stop().callback();
    
       });
    $("#chaining").click(function () {
        $(".p_01").css("color", "white").slideUp(1500).slideDown(1000);
    });
    $("#chaining2").click(function () {
        $(".square2").css("color", "white").slideUp(1200).slideDown(3000).fadeTo('slow', 0.6).callback();
    })

    });
    

