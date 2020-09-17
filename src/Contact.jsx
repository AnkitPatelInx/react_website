import React from 'react';

class Users extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            firstName : '', 
            lastName : '', 
            mobile : '', 
            message : 'Form', 
            messageClass : '',

        };
    };

    handleChange(e){
        debugger;
        const name = e.target.name;
        const val = e.target.value;
        this.setState({message : "Form"});
        this.setState({messageClass : ""});
        this.setState({[name] : val});
        if(name === "mobile"){
            if(isNaN(val) || val.length > 10){
                this.setState({message : "Please enter valid 10 digit mobile number"});
                this.setState({messageClass : "mobile-error"});
                return null;
            }
        }
    };

    handleSubmit(e){
        debugger;
        e.preventDefault();
        if(isNaN(this.state.mobile) || this.state.mobile.length != 10){
            this.setState({message : "Please enter valid 10 digit mobile number"});
            this.setState({messageClass : "mobile-error"});
            return null;
        }
        if(this.state.firstName.trim()=='' || this.state.lastName.trim()==''){
            this.setState({message : "First Name and Last Name Required."});
            this.setState({messageClass : "mobile-error"});
            return null;
        }
        const message = "First name : "+this.state.firstName
                        +" | Last Name : "+this.state.lastName
                        +" | Mobile : "+this.state.mobile;
        this.setState({message : message});
        this.setState({messageClass : "mobile-success"});
    }

    render(){
        return (
        <>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h1 className={this.state.messageClass}>{this.state.message}</h1>
                <table><tbody>
                    <tr>
                        <td>First Name : </td>
                        <td><input value={this.state.firstName} type="text" name="firstName" onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>
                            Last Name : 
                        </td>
                        <td>
                            <input value={this.state.lastName} type="text" name="lastName" onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>Mobile (10 Digit) : &nbsp; </td>
                        <td>
                            <input value={this.state.mobile} type="text" name="mobile" onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        
                        </td>
                        <td>
                            <input type="submit" />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="reset" />
                        </td>
                    </tr>
                </tbody></table>
            </form>
        </>    
        );
    };
}

// function Contact() {
    
    
    
// }

export default Users;