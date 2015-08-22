/** @jsx React.DOM */
var Experiment = React.createClass({
    click:function(){

    },
     render:function(){

    var name = this.props.name;

    return(

        <div className={name+"_all click"} onClick={this.click}>
            <div className={name+"_log"} ></div>
            <div className={name+"_txt"}></div>
        </div>
        )
}
})

React.render(
    <Experiment name={"member"} />,
    document.getElementById('member')
)
React.render(
    <Experiment name={"event"} />,
    document.getElementById('event')
)
React.render(
    <Experiment name={"activity"} />,
    document.getElementById('activity')
)
React.render(
    <Experiment name={"production"} />,
    document.getElementById('production')
)
React.render(
    <Experiment name={"find"} />,
    document.getElementById('find')
)
React.render(
    <Experiment name={"share"} />,
    document.getElementById('share')
)

var Socity = React.createClass({

    render:function(){

        return(
            <div className="social_logo"></div>
            )
    }
})
var Logo = React.createClass({

    render:function(){

        return(
            <div className="logos">
                <div className="logoL">
                <ContactLogo name={"github"} />
                <ContactLogo name={"coding"} />
                <Jian />
                <Bili />
                </div>
                <div className="logoR">
                <Sf />
                <Weibo />
                <Bdyun />
                  </div>
            </div>
            )
    }
})
var ContactLogo = React.createClass({
    joinin:function(){

    },
    render:function(){

    var logo = this.props.name;
        return(
            <div className={"logo_"+logo+" click"} onClick={this.joinin}></div>
            )
    }
})
var Coding = React.createClass({
    joinin:function(){

    },
    render:function(){
        return(
            <div className="logo_coding click" onClick={this.joinin}></div>
            )
    }
})
var Sf = React.createClass({
    joinin:function(){

    },
    render:function(){
        return(
            <div className="logo_sf click" onClick={this.joinin}></div>
            )
    }
})
var Jian= React.createClass({
    joinin:function(){

    },
    render:function(){
        return(
            <div className="logo_jian click" onClick={this.joinin}></div>
            )
    }
})
var Bili = React.createClass({
    joinin:function(){

    },
    render:function(){
        return(
            <div className="logo_bilibili click" onClick={this.joinin}></div>
            )
    }
})
var Weibo = React.createClass({
    joinin:function(){

    },
    render:function(){
        return(
            <div className="logo_weibo click" onClick={this.joinin}></div>
            )
    }
})
var Bdyun = React.createClass({
    joinin:function(){

    },
    render:function(){
        return(
            <div className="logo_baiduyun click" onClick={this.joinin}></div>
            )
    }
})
//页码
var Number = 0;

var Linkball = React.createClass({
   getInitialState:function(){
       return {page:Number};
   },
    render:function(){
        var n = [0,1,2];
        return(
            <div className="oval_href" >
            {n.map(function(each){
                if(Number ==each){
                return <div className="oval_2" ></div>}
                else{
                 return <div className="oval_1 click" ></div>
                }
            })}
            </div>
            )
    }

})

var Downlog = React.createClass({
    upSide:function() {
        var n = Number;
        Number -=1;
        $("#container").children().eq(n).animate({top: '980px'}, 600);
        $("#container").children().eq(n-1).animate({top: '0px'}, 1000);
        React.render(
            <Linkball />,document.getElementById("main_oval")
        )
    },
    downside:function(){
        var thispage=Number;
        Number +=1;
        if(Number==3)Number=0;
        $(".apges").children().eq(thispage).animate({top:'-980px'},600);
        $("#container").children().eq(thispage+1).animate({top:'0px'},1000);

        React.render(
            <Linkball />,document.getElementById("main_oval")
        )
    },
    render:function(){
        return(
            <div className="down_log" onClick={this.downside}></div>
            )
    }
})

React.render(
    <Linkball />,document.getElementById("main_oval")
)

React.render(
    <Socity />,document.getElementById("socialContact")
)
React.render(
    <Logo />,document.getElementById("all_logo")
)
React.render(
    <Downlog />,document.getElementById("footer")
)
React.render(
    <Downlog />,document.getElementById("footer_2")
)
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