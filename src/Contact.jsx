import React from 'react';
import Axios from 'axios';
const api_url = "http://localhost:3003";

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {firstName : '', lastName : '', mobile : '', message : 'Form', messageClass : ''};

        Axios.get(api_url+"/users")
        .then(function(res){
            console.log(res);
        })
        .catch(function(res){
            console.log(res);
        });
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
            
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h1 className={this.state.messageClass}>{this.state.message}</h1>
                <>
                    <tr>
                        <td>First Name : </td>
                        <td><input type="text" name="firstName" onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>
                            Last Name : 
                        </td>
                        <td>
                            <input type="text" name="lastName" onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>Mobile (10 Digit) : &nbsp; </td>
                        <td>
                            <input type="text" name="mobile" onChange={this.handleChange} />
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
                </>
            </form>
            
        );
    };
}

// function Contact() {
    
    
    
// }

export default Contact;