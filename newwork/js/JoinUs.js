/**
 * Created by lenovo on 2015/8/16.
 */
var FormBox = React.createClass({
    handleSubmit:function(){
        e.preventDefault();
        var name = this.refs.name.getDOMNode().value.trim();
        var address = this.refs.address.getDOMNode().value.trim();
        var phoneNumber = this.refs.phoneNumber.getDOMNode().value.trim();
        var studentNumber = this.refs.studentNumber.getDOMNode().value.trim();
        if(!name||!address){
            if(!phoneNumber||!studentNumber){
                return;
            }
        }
        this.refs.name.getDOMNode().value = "";
        this.refs.address.getDOMNode().value = "";
        this.refs.phoneNumber.getDOMNode().value = "";
        this.refs.studentNumber.getDOMNode().value = "";
        return;
    },
    render:function(){
        return(
            <form className='formList' onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name" required="required" ref = "name"/>
                <input type="text" placeholder="Email Address" required="required" ref = "address"/>
                <input type="text" placeholder="PhoneNumber" required="required" ref = "phoneNumber"/>
                <input type="text" placeholder="Student Number" required="required" ref = "studentNumber"/>
                <input type = "submit" value = "Submit" id = "SB"/>
            </form>
        );
    }
});

React.render(
    <FormBox />,
    document.getElementById('Form')
);
