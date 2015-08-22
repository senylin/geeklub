/**
 * Created by senyi on 2015/8/17.
 */
$(document).ready(function(){
    $(".oval_href").children().eq(0).click(function(){
        if(Number!=0){
            Number =0;
            $("#container").children().eq(2).animate({top:'980px'},600);
            $("#container").children().eq(1).animate({top:'980px'},600);
            $("#container").children().eq(0).animate({top:'0px'},1000);
            React.render(
                <Linkball />,document.getElementById("main_oval")
            )}
    });
    $(".oval_href").children().eq(1).click(function(){
        if(Number==0){
            Number =1;
            $("#container").children().eq(0).animate({top:'-980px'},600);
            $("#container").children().eq(1).animate({top:'0px'},1000);
            React.render(
                <Linkball />,document.getElementById("main_oval")
            )}
        if(Number==2){
            Number =1;
            $("#container").children().eq(2).animate({top:'980px'},600);
            $("#container").children().eq(1).animate({top:'0px'},1000);
            React.render(
                <Linkball />,document.getElementById("main_oval")
            )}
    });
    $(".oval_href").children().eq(2).click(function(){
        if(Number!=2){
            Number =2;
            $("#container").children().eq(0).animate({top:'-980px'},600);
            $("#container").children().eq(1).animate({top:'-980px'},600);
            $("#container").children().eq(2).animate({top:'0px'},1000);

            React.render(
                <Linkball />,document.getElementById("main_oval")
            )}
    });
})